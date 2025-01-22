import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="bg-teal-500 flex-1 flex justify-center items-center">
        <div className="p-4 flex flex-col gap-8 justify-center items-center">
          <h1 className="text-amber-500 text-9xl uppercase">Locals</h1>
          <p className="text-xl text-teal-900 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="py-2 px-4 bg-slate-700 hover:bg-slate-900 text-teal-50 rounded-lg">
            <Link to={"shop"}>Watch</Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
