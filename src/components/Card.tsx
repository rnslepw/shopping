import { Product } from "../utils/types";

interface PropType {
  product: Product;
}

const Card = ({ product }: PropType) => {
  return (
    <section className="p-8 flex flex-col gap-4 items-center justify-between shadow-lg shadow-slate-500 rounded-lg">
      <img src={product.image} alt="Product image" className="h-64 max-w-64" />
      <h2 className="text-3xl text-center">{product.title}</h2>
      <p>{product.description}</p>
      <div className="w-full flex justify-between">
        <span className="block bg-yellow-300 py-2 px-4">
          {product.category}
        </span>
        <span className="text-xl">Price: {product.price}$</span>
      </div>
      <div className="flex gap-4 items-center">
        <button className="py-2 px-6 bg-slate-900 text-white rounded-full">
          -
        </button>
        <span className="text-xl">1</span>
        <button className="py-2 px-5 bg-slate-900 text-white rounded-full">
          +
        </button>
      </div>
    </section>
  );
};

export default Card;
