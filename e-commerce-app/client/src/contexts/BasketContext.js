import { useState, useContext, createContext, useEffect } from 'react';

const BasketContext = createContext();
const defaultBasket = JSON.parse(localStorage.getItem('basket')) || [];

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(defaultBasket);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(items));
  }, [items]);

  const addToBasket = (data, findBasketItem) => {
    if (!findBasketItem) {
      return setItems((prevState) => [...prevState, data]);
    }
    const filtered = items.filter((item) => item._id !== findBasketItem._id);
    setItems(filtered);
  };

  const removeFromBasket = (id) => {
    const filtered = items.filter((item) => item._id !== id);
    setItems(filtered);
  };

  const values = {
    items,
    setItems,
    addToBasket,
    removeFromBasket,
  };
  return (
    <BasketContext.Provider value={values}> {children}</BasketContext.Provider>
  );
};

const useBasket = () => useContext(BasketContext);

export { useBasket, BasketProvider };
