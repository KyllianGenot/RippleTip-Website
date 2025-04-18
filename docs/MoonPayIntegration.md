# MoonPay Integration

This document explains how to use the MoonPay integration in the RippleTip Website.

## Overview

The RippleTip Website uses the `@moonpay/moonpay-js` package to integrate MoonPay's on-ramp and off-ramp solutions, allowing users to purchase cryptocurrencies directly from the website.

## Setup

### 1. Install Dependencies

The MoonPay integration requires the `@moonpay/moonpay-js` package, which is already installed in the project. If you need to reinstall it, use:

```bash
npm install @moonpay/moonpay-js
```

### 2. Configure API Key

Before using the MoonPay integration, you need to configure your MoonPay API key in `src/constants/moonpay.ts`:

```typescript
// Change this to your actual API key from MoonPay dashboard
export const MOONPAY_API_KEY = 'pk_live_YOUR_ACTUAL_API_KEY_HERE';
```

### 3. Configure Allowed Domains

If you're using the overlay variant (which is the default), you need to set up your allowed domains on the MoonPay developers page:

1. Log in to your MoonPay developer account
2. Navigate to the API settings
3. Add your website domain to the allowed domains list

## Usage

### Basic Usage

The simplest way to use MoonPay in your components is through the `showMoonPayWidget` function:

```typescript
import { showMoonPayWidget } from '../services/moonpayService';

// In your component
const handleBuyCrypto = async () => {
  try {
    await showMoonPayWidget({
      walletAddress: 'YOUR_WALLET_ADDRESS', // Optional
      baseCurrencyAmount: '100' // Optional
    });
  } catch (error) {
    console.error('Failed to open MoonPay widget:', error);
  }
};
```

### Using the AddFundsButton Component

The project includes a pre-built `AddFundsButton` component for easy integration:

```typescript
import { AddFundsButton } from '../components/ui';

// In your component JSX
<AddFundsButton walletAddress="YOUR_WALLET_ADDRESS" />
```

### Configuration Options

When calling `showMoonPayWidget`, you can pass various configuration options:

```typescript
showMoonPayWidget({
  // User's wallet address for direct deposit
  walletAddress: '0x1234...',
  
  // Amount in the base currency to pre-fill
  baseCurrencyAmount: '100',
  
  // Base currency (default: 'usd')
  baseCurrencyCode: 'usd',
  
  // Target cryptocurrency (default: 'eth')
  defaultCurrencyCode: 'eth',
  
  // Theme ('dark' or 'light')
  theme: 'dark'
});
```

## URL Signing

For sensitive information such as email or wallet addresses, MoonPay requires the inclusion of a signature parameter. The implementation of URL signing requires a server-side component.

To implement URL signing:

1. Set up a server-side API endpoint that uses your MoonPay secret key to sign URLs
2. Modify the `moonpayService.ts` to call this endpoint before showing the widget

For more details, refer to the [MoonPay documentation on URL signing](https://www.moonpay.com/developers/url-signing).

## Demo Component

Check out the `MoonPayDemo.tsx` component in the `src/components/examples` directory for a complete example of how to use the MoonPay integration.

## Additional Resources

- [MoonPay JS SDK Documentation](https://moonpay.github.io/moonpay-js/)
- [MoonPay Developer Portal](https://www.moonpay.com/developers) 