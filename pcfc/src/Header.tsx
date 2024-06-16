import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from './auth/AuthProvider';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';


interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: false },
{ name: 'ReduceFootPrint', href: '/reduce', current: false },
  { name: 'Alternative Ways', href: '/alternatives', current: false },
   { name: 'Profile', href: '/profile', current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  const updatedNavigation = navigation.map((item) => {
    if (!isAuthenticated && item.name === 'Profile') {
      return { ...item, name: 'Login', href: '/login' };
    } else {
      return { ...item, current: location.pathname === item.href };
    }
  });
  return (
    <div className="sticky top-0 z-50 bg-blue-400 shadow-md">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="./profile.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {updatedNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            'text-gray-800 hover:text-white transition-colors duration-300 ease-in-out',
                            item.current ? 'bg-blue-100 text-black' : 'text-gray-600',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>{
                  isAuthenticated ? <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="data:image/png;base64,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"
                            alt=""
                          />
                        </MenuButton>
                      </div>
                      <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <MenuItem>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Settings
                              </Link>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {
                              ({ active }) => (
                                <Link
                                  to="/signout"
                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                  Sign out
                                </Link>
                              )}
                          </MenuItem>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </div> : <></>
                }

              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {updatedNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href} // Use Link from react-router-dom
                    className={classNames(
                      'block px-3 py-2 rounded-md text-base font-medium',
                      item.current ? 'bg-green-400 text-white' : 'text-gray-600 hover:bg-green-300 hover:text-white',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
