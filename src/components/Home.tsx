import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Nav from "./Nav";

const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <Nav />
      <main className="bg-teal-500 flex-1 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-red-500 text-7xl uppercase">Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="py-2 px-4 bg-slate-500 hover:bg-slate-400 rounded-lg">
          <Link to={"shop"}>Shop</Link>
        </button>
      </main>
    </>
  );
};

export default Home;
