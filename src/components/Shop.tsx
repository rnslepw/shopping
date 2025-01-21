import { Link } from "react-router-dom";

import Nav from "./Nav";

const Shop = () => {
  return (
    <>
      <Nav />
      <main>
        <h1>Shop</h1>
        <Link to={"/"}>Home</Link>
      </main>
    </>
  );
};

export default Shop;
