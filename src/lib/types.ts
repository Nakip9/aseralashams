export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  order: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  brand: string;
  description: string;
  features: string[];
  image: string;
  accent: string;
  order: number;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  capacity: string;
  unit: string;
  location: string;
  description: string;
  image: string;
  accent: string;
  date: string;
  order: number;
}
