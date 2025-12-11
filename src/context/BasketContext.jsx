import { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addToBasket = (album) => {
    setBasket((prev) => {
      const exists = prev.find((item) => item.id === album.id);
      if (exists) {
        return prev.map((item) =>
          item.id === album.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...album, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromBasket(id);
      return;
    }
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  // Очистка корзины
  const clearBasket = () => setBasket([]);

  const totalPrice = basket.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const totalItems = basket.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        updateQuantity,       
        removeFromBasket,
        clearBasket,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};