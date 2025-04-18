import { loadMoonPay } from '@moonpay/moonpay-js';
import { 
  MOONPAY_API_KEY, 
  DEFAULT_CURRENCY_CODE, 
  DEFAULT_BASE_CURRENCY,
  MOONPAY_THEME 
} from '../constants/moonpay';

// MoonPay SDK instance and types
let moonPaySdk: any = null;

type MoonPayConfig = {
  flow: 'buy' | 'sell' | 'swap';
  environment: 'sandbox' | 'production';
  variant: 'overlay' | 'embedded';
  apiKey: string;
  theme?: 'dark' | 'light';
  baseCurrencyCode?: string;
  defaultCurrencyCode?: string;
  [key: string]: any;
};

/**
 * Initialize the MoonPay SDK
 * @param options Optional configuration options to override defaults
 * @returns Promise that resolves when MoonPay is initialized
 */
export const initializeMoonPay = async (options: Partial<MoonPayConfig> = {}) => {
  try {
    const moonPay = await loadMoonPay();
    
    if (!moonPay || typeof moonPay !== 'function') {
      throw new Error('Failed to load MoonPay SDK');
    }
    
    // Default configuration
    const defaultConfig: MoonPayConfig = {
      flow: 'buy',
      environment: process.env.NODE_ENV === 'production' ? 'production' : 'sandbox',
      variant: 'overlay',
      apiKey: MOONPAY_API_KEY,
      theme: MOONPAY_THEME as 'dark' | 'light',
      baseCurrencyCode: DEFAULT_BASE_CURRENCY,
      defaultCurrencyCode: DEFAULT_CURRENCY_CODE,
      ...options
    };
    
    moonPaySdk = moonPay(defaultConfig as any);
    return moonPaySdk;
  } catch (error) {
    console.error('Failed to initialize MoonPay:', error);
    throw error;
  }
};

/**
 * Show the MoonPay widget
 * @returns Promise that resolves when the widget is shown
 */
export const showMoonPayWidget = async (options: Partial<MoonPayConfig> = {}) => {
  try {
    // Initialize if not already initialized
    if (!moonPaySdk) {
      await initializeMoonPay(options);
    }
    
    // Show the widget
    if (moonPaySdk && typeof moonPaySdk.show === 'function') {
      return moonPaySdk.show();
    }
    throw new Error('MoonPay SDK not initialized properly');
  } catch (error) {
    console.error('Failed to show MoonPay widget:', error);
    throw error;
  }
};

/**
 * Hide the MoonPay widget
 */
export const hideMoonPayWidget = () => {
  if (moonPaySdk && typeof moonPaySdk.hide === 'function') {
    moonPaySdk.hide();
  }
}; 