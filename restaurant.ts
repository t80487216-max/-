export interface MenuItem {
  id: string;
  name: string;
  category: 'meats' | 'poultry' | 'platters' | 'tajines' | 'appetizers' | 'beverages';
  price: number;
  description: string;
  portion: string;
  calories?: string;
  isPopular?: boolean;
  image?: string;
  tags?: string[];
}

export interface CartItem {
  dish: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
  verified: boolean;
}

export interface TableReservation {
  name: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  seatingType: 'family' | 'standard' | 'outdoor';
  notes: string;
}
