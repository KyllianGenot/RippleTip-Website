import type React from 'react';
import {
  HiOutlineRocketLaunch,
  HiOutlineLockClosed,
  HiOutlineBanknotes,
} from 'react-icons/hi2';

export interface FeatureInfo {
  title: string;
  description: string;
  icon?: React.ElementType;
}

export const FEATURES_LIST: FeatureInfo[] = [
  {
    title: 'Quick Setup',
    description: 'Add WaveTip to your server and start tipping in minutes.',
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