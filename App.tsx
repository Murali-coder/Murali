
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProfileForm from './components/ProfileForm';
import ProfileView from './components/ProfileView';
import { PRODUCTS_DATA } from './constants';
import { UserProfile } from './types';

type Page = 'home' | 'createProfile' | 'viewProfile';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const handleProfileSave = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentPage('viewProfile');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'createProfile':
        return <ProfileForm onSave={handleProfileSave} existingProfile={userProfile} />;
      case 'viewProfile':
        return <ProfileView profile={userProfile} onEdit={() => setCurrentPage('createProfile')} />;
      case 'home':
      default:
        return (
          <div>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight">Discover Nature's Best</h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-500">
                Hand-picked organic goods, delivered from the farm to your table.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS_DATA.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        profileExists={!!userProfile}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
