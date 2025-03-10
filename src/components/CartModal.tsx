import React from 'react';
import { X } from 'lucide-react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onClearCart: () => void;
  onProcessOrder: () => void;
}

export default function CartModal({ isOpen, onClose, items, onClearCart, onProcessOrder }: CartModalProps) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-gray-600 text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                    <div className="ml-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Total:</span>
                <span className="text-xl font-bold">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={onClearCart}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Clear Cart
              </button>
              <button
                onClick={onProcessOrder}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Process Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}