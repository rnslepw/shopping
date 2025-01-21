import Home from "../components/Home";
import Shop from "../components/Shop";
import Error from "../components/Error";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
];

export default routes;
