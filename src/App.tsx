import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  const [cart, setCart] = useState(0);

  const handleAddToCart = (num: number) => {
    const newCart = cart + num;
    setCart(newCart);
  };

  return (
    <>
      <Nav cart={cart} />
      <Outlet context={handleAddToCart} />
    </>
  );
};

export default App;
