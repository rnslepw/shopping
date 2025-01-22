import { Link } from "react-router-dom";

interface PropType {
  cart: number;
}

const Nav = ({ cart }: PropType) => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-teal-900 text-teal-50 sticky top-0 opacity-90">
      <span className="text-2xl uppercase">
        <Link to={"/"}>Locals</Link>
      </span>
      <nav>
        <ul className="flex gap-8 items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"shop"}>Shop</Link>
          </li>
          <li className="flex items-center gap-4 p-4 bg-slate-100 rounded-xl text-teal-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>{" "}
            {cart}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
