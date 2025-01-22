import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { Product } from "../utils/types";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const handleAddToCart = useOutletContext<(num: number) => void>();

  const { isPending, error, data } = useQuery({
    queryKey: ["productsData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
  });

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <>
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 bg-teal-50">
        {data.map((product: Product) => (
          <Card
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}
          />
        ))}
      </main>
    </>
  );
};

export default Shop;
