import './App.css';
import React, { useState } from 'react';
import { CartContext } from './Example/CartContext';
import ProductList from './Example/ProductList'
import Cart from './Example/Cart'


function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }
 
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, addToCart }} >
        <ProductList />
        <Cart />
      </CartContext.Provider>
    </div>
  );
}

export default App;
