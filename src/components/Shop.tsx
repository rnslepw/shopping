import { useQuery } from "@tanstack/react-query";
import Nav from "./Nav";

const Shop = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  console.log(data);

  return (
    <>
      <main>
        <h1>Shop</h1>
      </main>
    </>
  );
};

export default Shop;
