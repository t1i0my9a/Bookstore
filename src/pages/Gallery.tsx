import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Book, CartItem } from '../types';
import CartModal from '../components/CartModal';

const books: Book[] = [
  {
    id: 1,
    title: "Brie Mine 4Ever",
    description: "a book for cheese",
    price: 29.99,
    image: "https://cdn.sophia.org/markup_pictures/42784/file/cbbabbf6c98fb9ac8d5d0e00e904b023.png"
  },
  {
    id: 2,
    title: "Eat",
    description: "a magazine for foodies",
    price: 24.99,
    image: "https://cdn.sophia.org/markup_pictures/42789/file/40fa6225a49bf6e022dee7f81e12e83a.png"
  },
  {
    id: 3,
    title: "Sorcerer's Shadowed Chronicles",
    description: "a fantasy book",
    price: 19.99,
    image: "https://cdn.sophia.org/markup_pictures/42786/file/ba3a50be61dab549f87ba951a49ed110.png"
  }
];

export default function Gallery() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (items: CartItem[]) => {
    sessionStorage.setItem('cart', JSON.stringify(items));
    setCartItems(items);
  };

  const addToCart = (book: Book) => {
    const existingItem = cartItems.find(item => item.id === book.id);
    let newItems: CartItem[];

    if (existingItem) {
      newItems = cartItems.map(item =>
        item.id === book.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newItems = [...cartItems, { ...book, quantity: 1 }];
    }

    saveCart(newItems);
    alert('Item added to the cart');
  };

  const clearCart = () => {
    if (cartItems.length === 0) {
      alert('No items to clear');
      return;
    }
    sessionStorage.removeItem('cart');
    saveCart([]);
    setIsCartOpen(false);
    alert('Cart cleared');
  };

  const processOrder = () => {
    if (cartItems.length === 0) {
      alert('Cart is empty');
      return;
    }
    
    // Save order to localStorage for order history
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({
      id: Date.now(),
      items: cartItems,
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toISOString()
    });
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear session cart
    sessionStorage.removeItem('cart');
    saveCart([]);
    setIsCartOpen(false);
    alert('Thank you for your order');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold">Our Book Collection</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 flex items-center"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            View Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                <p className="text-gray-700 mb-4">{book.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-purple-600 font-bold text-xl">${book.price}</p>
                  <button
                    onClick={() => addToCart(book)}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onClearCart={clearCart}
        onProcessOrder={processOrder}
      />
    </div>
  );
}