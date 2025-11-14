
import React from 'react';
import { LeafIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <LeafIcon className="w-7 h-7 text-emerald-600" />
            <span className="text-xl font-bold text-stone-700">Verde</span>
          </div>
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Verde Organic Foods. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-stone-500 hover:text-emerald-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-stone-500 hover:text-emerald-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
