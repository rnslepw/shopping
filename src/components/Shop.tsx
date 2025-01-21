import { useQuery } from "@tanstack/react-query";
import Card from "./Card";

const Shop = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.map((product) => (
          <Card product={product} />
        ))}
      </main>
    </>
  );
};

export default Shop;
