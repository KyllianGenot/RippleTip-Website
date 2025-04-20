import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { User } from '../../context/AuthContext'; // Adjust path if needed
import { HiOutlinePlus, HiOutlineLogout } from 'react-icons/hi'; // Import icons

interface UserDropdownProps {
  user: User;
  onLogout: () => void;
  onAddFunds: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user, onLogout, onAddFunds }) => {
  const userAvatar = user.avatar || `https://cdn.discordapp.com/embed/avatars/${parseInt(user.id) % 5}.png`;
  const displayName = user.globalName || user.username;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center space-x-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500 p-0.5 transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-700/50">
          <span className="sr-only">Open user menu</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden md:inline pl-2">
            {displayName}
          </span>
          <img
            className="h-8 w-8 rounded-full"
            src={userAvatar}
            alt={`${displayName}'s avatar`}
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-gray-700 focus:outline-none divide-y divide-gray-100 dark:divide-gray-700">
          <div className="px-4 py-3">
            <p className="text-sm text-gray-900 dark:text-white">Signed in as</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{displayName}</p>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onAddFunds}
                  className={`${active ? 'bg-gray-100 dark:bg-gray-700' : ''} group flex rounded-md items-center w-full px-4 py-2 text-sm text-black dark:text-white`}
                >
                  <HiOutlinePlus className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-500" aria-hidden="true" />
                  Add Funds
                </button>
              )}
            </Menu.Item>
            {/* Add other items like Settings here if needed */}
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onLogout}
                  className={`${active ? 'bg-gray-100 dark:bg-gray-700' : ''} group flex rounded-md items-center w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-300`}
                >
                  <HiOutlineLogout className="mr-2 h-5 w-5 text-red-500 dark:text-red-500" aria-hidden="true" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserDropdown; 