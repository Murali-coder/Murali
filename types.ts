
export enum DietaryPreference {
  VEGETARIAN = 'Vegetarian',
  VEGAN = 'Vegan',
  GLUTEN_FREE = 'Gluten-Free',
  KETO = 'Keto',
  PALEO = 'Paleo',
  NONE = 'None',
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  dietaryPreferences: DietaryPreference[];
  profilePictureUrl: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
}
