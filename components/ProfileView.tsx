
import React from 'react';
import { UserProfile } from '../types';
import { EditIcon } from './Icons';

interface ProfileViewProps {
  profile: UserProfile | null;
  onEdit: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ profile, onEdit }) => {
  if (!profile) {
    return (
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-stone-700">No Profile Found</h2>
        <p className="text-stone-500 mt-2 mb-4">It looks like you haven't created a profile yet.</p>
        <button 
          onClick={onEdit}
          className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-700 transition-colors"
        >
            Create a Profile
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-4xl mx-auto overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-50 to-green-100 p-8 md:flex md:items-center md:justify-between relative">
            <div className='flex items-center'>
                <img
                    className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-md"
                    src={profile.profilePictureUrl}
                    alt={`${profile.firstName} ${profile.lastName}`}
                />
                <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-stone-800 tracking-tight">{`${profile.firstName} ${profile.lastName}`}</h2>
                    <p className="text-emerald-700 font-medium mt-1">{profile.email}</p>
                </div>
            </div>
            <button 
              onClick={onEdit} 
              className="absolute top-6 right-6 flex items-center gap-2 bg-white/70 text-stone-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white transition-colors shadow-sm"
            >
              <EditIcon className="w-4 h-4" />
              Edit Profile
            </button>
        </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Shipping Address</h3>
            <p className="text-stone-600 whitespace-pre-wrap">{profile.address}</p>
        </div>
        <div>
            <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Dietary Preferences</h3>
            {profile.dietaryPreferences.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                    {profile.dietaryPreferences.map(pref => (
                        <span key={pref} className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                            {pref}
                        </span>
                    ))}
                </div>
            ) : (
                <p className="text-stone-500 italic">No preferences selected.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
