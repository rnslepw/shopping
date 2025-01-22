import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="bg-teal-500 flex-1 flex justify-center items-center bg-[url('../public/home.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="p-16 flex flex-col gap-8 justify-center items-center bg-slate-900 bg-opacity-75">
          <h1 className="text-amber-500 text-7xl md:text-9xl uppercase">
            Locals
          </h1>
          <p className="text-lg md:text-xl text-amber-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="py-2 px-4 bg-slate-100 hover:bg-slate-300 text-slate-900 rounded-lg">
            <Link to={"shop"}>Learn More</Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
