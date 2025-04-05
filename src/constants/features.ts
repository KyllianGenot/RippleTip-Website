// src/constants/features.ts
import type React from 'react';
// Import specific icons from react-icons/hi2 (Heroicons v2)
import {
  HiOutlineSparkles,         // For 'Instant Tips'
  HiOutlineCircleStack,      // For 'Easy Balance Checks' (alternative: HiOutlineWallet)
  HiOutlineShieldCheck       // For 'Secure & Reliable'
} from 'react-icons/hi2';

// No longer need to import the old placeholder components

export interface FeatureInfo {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export const FEATURES_LIST: FeatureInfo[] = [
  {
    title: 'Instant Tips',
    description: 'Send tips to any Discord user instantly using simple commands.',
    icon: HiOutlineSparkles, // Use the imported icon component
  },
  {
    title: 'Easy Balance Checks',
    description: 'Quickly check your current balance anytime without leaving Discord.',
    icon: HiOutlineCircleStack, // Use the imported icon component
  },
  {
    title: 'Secure & Reliable',
    description: 'Built with security in mind to ensure your tips are handled safely.',
    icon: HiOutlineShieldCheck, // Use the imported icon component
  },
  // Add more features if needed, assigning appropriate icons
];