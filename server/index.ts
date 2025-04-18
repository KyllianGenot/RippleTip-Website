import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import fetch from 'node-fetch'; // Standard ES module import
import { URLSearchParams } from 'url';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; // Use a different port than Vite dev server

// Environment variable validation
if (!process.env.SESSION_SECRET) {
  console.error("FATAL ERROR: SESSION_SECRET is not defined.");
  process.exit(1);
}
// Use VITE_ prefixed variable for Client ID
if (!process.env.VITE_DISCORD_CLIENT_ID) {
    console.error("FATAL ERROR: VITE_DISCORD_CLIENT_ID is not defined.");
    process.exit(1);
}
// Use CLIENT_SECRET for the secret
if (!process.env.CLIENT_SECRET) {
    console.error("FATAL ERROR: CLIENT_SECRET is not defined.");
    process.exit(1);
}
// Use VITE_ prefixed variable for Redirect URI
if (!process.env.VITE_DISCORD_REDIRECT_URI) {
    console.error("FATAL ERROR: VITE_DISCORD_REDIRECT_URI is not defined.");
    process.exit(1);
}

// --- Session Configuration ---
// Augment express-session types to include 'user'
declare module 'express-session' {
  interface SessionData {
    user?: {
      id: string;
      username: string;
      globalName: string | null;
      avatar: string | null;
    };
    // If using state for CSRF protection
    // discordOAuthState?: string;
  }
}

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false, // Don't save session until something is stored
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true, // Prevent client-side JS access
    maxAge: 1000 * 60 * 60 * 24 // 1 day
   }
}));

// --- Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Utility for Async Routes ---
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const asyncHandler = (fn: (req: Request, res: Response, next: any) => Promise<any>) =>
    (req: Request, res: Response, next: any) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };

// --- Routes ---

// Simple check route
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from Express server!' });
});

// OLD Callback Route (Not used directly by Discord in this flow, but keep for potential future use/direct server testing)
// It redirects immediately, not suitable for the frontend-brokered flow.
app.get('/auth/discord/callback', asyncHandler(async (req: Request, res: Response) => {
   // This route might just redirect to an error page or home now,
   // as the primary flow uses /api/auth/discord/exchange
   console.warn("Direct access to /auth/discord/callback detected, redirecting home. Flow should use /api/auth/discord/exchange via frontend.");
   res.redirect('/');
}));

// NEW Endpoint for Frontend to Exchange Code
app.post('/api/auth/discord/exchange', asyncHandler(async (req: Request, res: Response) => {
    const { code } = req.body; // Get code from POST body

    if (!code || typeof code !== 'string') {
        return res.status(400).json({ success: false, message: 'Error: No authorization code provided or invalid code.' });
    }

    // --- TODO: State verification (if implemented) ---
    // Requires passing state from frontend component that gets it from initial redirect
    // const { state } = req.body;
    // if (!state || state !== req.session.discordOAuthState) {
    //     console.error('State mismatch:', state, req.session.discordOAuthState);
    //     return res.status(403).json({ success: false, message: 'Error: Invalid state parameter. Possible CSRF attack.' });
    // }
    // delete req.session.discordOAuthState; // Clean up state

    try {
        // 1. Exchange code for access token
        const tokenResponse = await fetch('https://discord.com/api/v10/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                client_id: process.env.VITE_DISCORD_CLIENT_ID!,
                client_secret: process.env.CLIENT_SECRET!,
                grant_type: 'authorization_code',
                code: code,
                // IMPORTANT: Use the *actual* redirect URI configured in Discord and .env
                redirect_uri: process.env.VITE_DISCORD_REDIRECT_URI!, 
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const tokenData = await tokenResponse.json() as any;

        if (!tokenResponse.ok || !tokenData.access_token) {
            console.error('Discord Token API Error:', tokenData);
            const errorMessage = `Failed to fetch access token: ${tokenData.error_description || 'Unknown error'}`;
            return res.status(500).json({ success: false, message: errorMessage });
            // throw new Error(errorMessage);
        }

        // 2. Get user profile
        const userResponse = await fetch('https://discord.com/api/v10/users/@me', {
            headers: {
                Authorization: `${tokenData.token_type} ${tokenData.access_token}`,
            },
        });

        const userData = await userResponse.json() as any;

        if (!userResponse.ok || !userData.id) {
            console.error('Discord User API Error:', userData);
            const errorMessage = 'Failed to fetch user profile.';
             return res.status(500).json({ success: false, message: errorMessage });
            // throw new Error(errorMessage);
        }

        // 3. Define user data structure
        const sessionUser = {
            id: userData.id,
            username: userData.username,
            globalName: userData.global_name,
            avatar: userData.avatar ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png` : null,
        };

        // 4. Store user info in session after regenerating the session
        req.session.regenerate((err) => {
             if (err) {
                console.error("Session regeneration failed:", err);
                return res.status(500).json({ success: false, message: "Failed to regenerate session." });
             }
             // Store user data again after regeneration
             req.session.user = sessionUser;

             // 5. Send success response to frontend
             console.log(`User ${sessionUser.username} (${sessionUser.id}) logged in successfully via exchange endpoint.`);
             res.json({ success: true, user: sessionUser });
         });

    } catch (error: any) {
        console.error('Error processing Discord code exchange:', error);
        // Provide a user-friendly error message to frontend
        res.status(500).json({ success: false, message: error.message || 'An error occurred during Discord authentication.' });
    }
}));

// Route to get current user status
app.get('/api/auth/status', (req: Request, res: Response) => {
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.json({ loggedIn: false });
    }
});

// Logout route
app.post('/api/auth/logout', (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Failed to destroy session:", err);
            return res.status(500).json({ success: false, message: 'Could not log out.' });
        }
        res.clearCookie('connect.sid'); // Default session cookie name
        res.json({ success: true, message: 'Logged out successfully.' });
    });
});

// Add a basic error handler middleware at the end
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
// biome-ignore lint/nursery/noUselessLoneBlockStatements: <explanation>
app.use((err: any, req: Request, res: Response, next: any) => {
    console.error("[ErrorHandler]:", err);
    res.status(err.status || 500).send(err.message || 'Internal Server Error');
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Express server listening on http://localhost:${PORT}`);
}); 