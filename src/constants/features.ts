// src/constants/features.ts
import type React from 'react';
// Import specific icons from react-icons/hi2 (Heroicons v2)
import {
  HiOutlineRocketLaunch,     // For 'Quick Setup' (represents speed and launch)
  HiOutlineLockClosed,       // For 'Secure Transactions' (represents security)
  HiOutlineBanknotes,        // For 'No Gas Fees' (represents money without fees)
} from 'react-icons/hi2';

export interface FeatureInfo {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export const FEATURES_LIST: FeatureInfo[] = [
  {
    title: 'Quick Setup',
    description: 'Add RippleTip to your server and start tipping in minutes.',
    icon: HiOutlineRocketLaunch,
  },
  {
    title: 'No Gas Fees',
    description: 'Send tips without worrying about transaction costs.',
    icon: HiOutlineBanknotes,
  },
  {
    title: 'Secure Transactions',
    description: 'Enjoy safe tipping with end-to-end encryption.',
    icon: HiOutlineLockClosed,
  },
];