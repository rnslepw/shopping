import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

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
      <h1 className="text-red-500">Home</h1>
      <h2>{data[0].title}</h2>
      <Link to={"shop"}>Shop</Link>
    </>
  );
};

export default Home;
