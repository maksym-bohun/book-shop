import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Advantages from "./components/Advantages/Advantages";
import FilteredList from "./components/BookList/FilteredList";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const closeCartHandler = () => {
    setCartIsVisible(false);
  };

  const openCartHandler = () => {
    setCartIsVisible(true);
  };

  return (
    <CartProvider>
      <>
        <Header onOpenCart={openCartHandler} />
        <Advantages />
        <FilteredList />
        {cartIsVisible && (
          <Cart
            onCloseCart={closeCartHandler}
            setCartIsVisible={setCartIsVisible}
          />
        )}
        <Footer />
      </>
    </CartProvider>
  );
}

export default App;
