
import React from 'react';
import { LeafIcon, UserIcon } from './Icons';

type Page = 'home' | 'createProfile' | 'viewProfile';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  profileExists: boolean;
}

const NavButton: React.FC<{
    onClick: () => void;
    isActive: boolean;
    children: React.ReactNode;
}> = ({ onClick, isActive, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
            isActive
                ? 'text-emerald-600'
                : 'text-stone-500 hover:text-emerald-600'
        }`}
    >
        {children}
    </button>
);


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, profileExists }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <LeafIcon className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-stone-800 tracking-tight">Verde</span>
          </div>
          <nav className="flex items-center space-x-2">
            <NavButton onClick={() => setCurrentPage('home')} isActive={currentPage === 'home'}>
              Our Products
            </NavButton>
            <NavButton onClick={() => setCurrentPage('createProfile')} isActive={currentPage === 'createProfile'}>
              {profileExists ? 'Edit Profile' : 'Create Profile'}
            </NavButton>
            {profileExists && (
               <NavButton onClick={() => setCurrentPage('viewProfile')} isActive={currentPage === 'viewProfile'}>
                My Profile
               </NavButton>
            )}
            
            <button
              onClick={() => profileExists ? setCurrentPage('viewProfile') : setCurrentPage('createProfile')}
              className="ml-2 p-2 rounded-full hover:bg-emerald-100 transition-colors"
              aria-label="User Profile"
            >
              <UserIcon className="w-6 h-6 text-stone-600" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
