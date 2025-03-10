export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem extends Book {
  quantity: number;
}

export interface FeedbackForm {
  name: string;
  email: string;
  message: string;
  orderType: 'feedback' | 'custom-order';
  customDetails?: string;
}