import React, { useState } from 'react';
import { showMoonPayWidget, hideMoonPayWidget } from '../../services/moonpayService';
import { AddFundsButton } from '../ui';

/**
 * MoonPay Integration Demo Component
 * Shows various ways to integrate with MoonPay
 */
const MoonPayDemo: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('100');
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle direct MoonPay widget display
  const handleOpenMoonPay = async () => {
    setIsLoading(true);
    try {
      await showMoonPayWidget({
        walletAddress: walletAddress || undefined,
        baseCurrencyAmount: amount
      });
    } catch (error) {
      console.error('Failed to open MoonPay widget:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle hiding the MoonPay widget
  const handleCloseMoonPay = () => {
    hideMoonPayWidget();
  };
  
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">MoonPay Integration Demo</h2>
      
      <div className="space-y-6">
        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Wallet Address (optional)
            </label>
            <input
              id="walletAddress"
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="0x..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Amount in USD
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
        
        {/* Direct Integration */}
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Method 1: Direct SDK Usage</h3>
          <div className="flex space-x-2">
            <button
              onClick={handleOpenMoonPay}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition"
            >
              {isLoading ? 'Loading...' : 'Open MoonPay Widget'}
            </button>
            <button
              onClick={handleCloseMoonPay}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Close Widget
            </button>
          </div>
        </div>
        
        {/* Button Component Integration */}
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Method 2: Using AddFundsButton</h3>
          <AddFundsButton walletAddress={walletAddress} />
        </div>
        
        {/* Info Box */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-sm text-blue-800 dark:text-blue-300">
          <h4 className="font-semibold mb-2">Integration Steps:</h4>
          <ol className="list-decimal list-inside space-y-1">
            <li>Install package: <code className="bg-blue-100 dark:bg-blue-800/50 px-1 rounded">npm install @moonpay/moonpay-js</code></li>
            <li>Import: <code className="bg-blue-100 dark:bg-blue-800/50 px-1 rounded">import {'{ showMoonPayWidget }'} from '../services/moonpayService'</code></li>
            <li>Configure API key in <code className="bg-blue-100 dark:bg-blue-800/50 px-1 rounded">src/constants/moonpay.ts</code></li>
            <li>Call <code className="bg-blue-100 dark:bg-blue-800/50 px-1 rounded">showMoonPayWidget()</code> with optional parameters</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MoonPayDemo; 