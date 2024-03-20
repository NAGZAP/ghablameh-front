import React from 'react';
import AccountDropdown from './AccountDropdown';

const Header = ({ isOpen }) => {
  return (
    <div>
      <button>Toggle</button>
      <div></div>
      <div>
        <nav className="{isOpen ? 'block' : 'hidden'} sm:block">
          <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
            <a href="../public/index.html" className="block px-2 py-1 text-white font-semibold rounded hover:underline">Link 1</a>
            <a href="../public/index.html" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:underline">Link 2</a>
            <a href="../public/index.html" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:underline">Link 3</a>
            <AccountDropdown className="hidden sm:block sm:ml-6" />
          </div>
          <div className="px-4 py-5 border-t border-gray-800 sm:hidden">
            <div className="flex items-center">
              <img className="h-8 w-8 border-2 border-gray-600 rounded-full object-cover" src="profile.jpg" alt="Profile" />
              <span className="ml-3 font-semibold text-white">Jane Doe</span>
            </div>
            <div className="mt-4">
              <a href="../public/index.html" className="block text-gray-400 hover:text-white">Account settings</a>
              <a href="../public/index.html" className="mt-2 block text-gray-400 hover:text-white">Support</a>
              <a href="../public/index.html" className="mt-2 block text-gray-400 hover:text-white">Sign out</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;