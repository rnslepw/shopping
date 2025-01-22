import { useState } from "react";
import { Product } from "../utils/types";

interface PropType {
  product: Product;
  handleAddToCart: (item: number, price: number) => void;
}

const Card = ({ product, handleAddToCart }: PropType) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  return (
    <section className="p-8 flex flex-col gap-4 items-center justify-start shadow-lg shadow-teal-900 rounded-lg bg-white">
      <img src={product.image} alt="Product image" className="h-64 max-w-64" />
      <h2 className="text-xl text-center">{product.title}</h2>
      <p className="text-sm mb-auto">{product.description}</p>
      <div className="w-full flex justify-between items-center">
        <span className="block bg-amber-300 py-2 px-4">{product.category}</span>
        <span className="text-xl">Price: {product.price}$</span>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <button
            className="py-2 px-6 bg-slate-700 text-slate-50 rounded-full"
            onClick={handleSubtract}
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            className="py-2 px-6 bg-slate-700 text-slate-50 rounded-full"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <button
          className="bg-teal-700 hover:bg-teal-900 text-teal-50 py-2 px-4 rounded-lg"
          onClick={() => {
            handleAddToCart(quantity, product.price * quantity);
            setQuantity(1);
          }}
        >
          Add To Cart
        </button>
      </div>
    </section>
  );
};

export default Card;
