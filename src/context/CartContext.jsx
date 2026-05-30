import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product, variant, quantity = 1) => {
    setItems(prev => {
      const key = `${product.id}-${variant.weight}`;
      const existing = prev.find(i => i.key === key);
      if (existing) {
        return prev.map(i => i.key === key ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { key, product, variant, quantity }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((key) => {
    setItems(prev => prev.filter(i => i.key !== key));
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.key !== key));
      return;
    }
    setItems(prev => prev.map(i => i.key === key ? { ...i, quantity } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const toggleCart = useCallback(() => setIsOpen(prev => !prev), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const total = items.reduce((sum, i) => sum + i.variant.price * i.quantity, 0);

  const getWhatsAppMessage = useCallback(() => {
    if (items.length === 0) return '';
    let msg = '🙏 Namaste! I would like to order from Murali Sweets:\n\n';
    items.forEach(i => {
      msg += `• ${i.product.name} (${i.variant.weight}) × ${i.quantity} = ₹${i.variant.price * i.quantity}\n`;
    });
    msg += `\n📦 Total: ₹${total}\n\nPlease confirm availability and delivery. Thank you!`;
    return encodeURIComponent(msg);
  }, [items, total]);

  return (
    <CartContext.Provider value={{
      items, isOpen, addItem, removeItem, updateQuantity, clearCart,
      toggleCart, closeCart, itemCount, total, getWhatsAppMessage,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
