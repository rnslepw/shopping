import { Link } from "react-router-dom";

import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <main className="bg-teal-500 flex-1 flex justify-center items-center">
        <div className="p-4 flex flex-col gap-8 justify-center items-center">
          <h1 className="text-red-500 text-7xl uppercase">Baraholka</h1>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="py-2 px-4 bg-slate-500 hover:bg-slate-400 rounded-lg">
            <Link to={"shop"}>Shop</Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
