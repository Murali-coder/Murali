
import React, { useState } from 'react';
import { UserProfile, DietaryPreference } from '../types';

interface ProfileFormProps {
  onSave: (profile: UserProfile) => void;
  existingProfile: UserProfile | null;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSave, existingProfile }) => {
  const [formData, setFormData] = useState<UserProfile>(
    existingProfile || {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      dietaryPreferences: [],
      profilePictureUrl: `https://picsum.photos/seed/${Date.now()}/200`,
    }
  );
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleDietaryChange = (preference: DietaryPreference) => {
    setFormData(prev => {
        const newPreferences = prev.dietaryPreferences.includes(preference)
            ? prev.dietaryPreferences.filter(p => p !== preference)
            : [...prev.dietaryPreferences, preference];
        return {...prev, dietaryPreferences: newPreferences};
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Basic validation
    if (formData.firstName && formData.lastName && formData.email && formData.address) {
        onSave(formData);
    }
  };

  const isInvalid = (field: keyof UserProfile) => {
    return formSubmitted && !formData[field];
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">
        {existingProfile ? 'Edit Your Profile' : 'Create Your Profile'}
      </h2>
      <p className="text-stone-500 mb-8">Join our community of 10,000+ organic food lovers.</p>
      
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-stone-600 mb-1">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition ${isInvalid('firstName') ? 'border-red-500' : 'border-stone-300'}`}
              required
            />
             {isInvalid('firstName') && <p className="text-red-500 text-xs mt-1">First name is required.</p>}
          </div>
          
          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-stone-600 mb-1">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition ${isInvalid('lastName') ? 'border-red-500' : 'border-stone-300'}`}
              required
            />
             {isInvalid('lastName') && <p className="text-red-500 text-xs mt-1">Last name is required.</p>}
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition ${isInvalid('email') ? 'border-red-500' : 'border-stone-300'}`}
              required
            />
            {isInvalid('email') && <p className="text-red-500 text-xs mt-1">A valid email is required.</p>}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-stone-600 mb-1">Shipping Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition ${isInvalid('address') ? 'border-red-500' : 'border-stone-300'}`}
              required
            />
             {isInvalid('address') && <p className="text-red-500 text-xs mt-1">Address is required.</p>}
          </div>
          
          {/* Dietary Preferences */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-stone-600 mb-2">Dietary Preferences</label>
            <div className="flex flex-wrap gap-2">
              {Object.values(DietaryPreference).map(pref => (
                <button
                  key={pref}
                  type="button"
                  onClick={() => handleDietaryChange(pref)}
                  className={`px-3 py-1.5 text-sm rounded-full border-2 transition-colors ${
                    formData.dietaryPreferences.includes(pref)
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-stone-600 border-stone-300 hover:border-emerald-500'
                  }`}
                >
                  {pref}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-right">
          <button
            type="submit"
            className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            {existingProfile ? 'Save Changes' : 'Create My Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
