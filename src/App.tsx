import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  const [cart, setCart] = useState({
    items: 0,
    price: 0,
  });

  const handleAddToCart = (item: number, price: number) => {
    setCart({
      items: cart.items + item,
      price: cart.price + price,
    });
  };

  return (
    <>
      <Nav cart={cart} />
      <Outlet context={handleAddToCart} />
    </>
  );
};

export default App;
