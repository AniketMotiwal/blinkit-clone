import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import Product from '../Pages/Product';

export default function Router() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((item) => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
  
    // Update totalPrice by adding the price of the product
    setTotalPrice((prevTotal) => prevTotal + product.price);
  
    // Update cartItems state with the updated cart
    setCartItems(updatedCart);
  };
  
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    const removedItem = cartItems.find((item) => item.id === productId);
  
    if (removedItem) {
      // Subtract the price of the removed item multiplied by its quantity from totalPrice
      setTotalPrice((prevTotal) => prevTotal - (removedItem.price * removedItem.quantity));
    }
  
    // Update cartItems state with the updated cart
    setCartItems(updatedCart);
  };
  
  
  return (
    <BrowserRouter>
      <Header cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} totalPrice={totalPrice} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} product={Product} />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
