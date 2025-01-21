import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-red-500 sticky top-0">
      <h1 className="text-xl uppercase">
        <Link to={"/"}>Baraholka</Link>
      </h1>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"shop"}>Shop</Link>
          </li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
