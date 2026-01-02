import react, {lazy, Suspense} from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About.js";
import Error from "./components/Error.js";
import Menu from "./components/Menu.js";

import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";
import { lazy } from "react";

// called dynamic import
const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback = {<h1>Loading!!!</h1>}> <About /> </Suspense>,
      },
      {
        // this is dynamic routes
        path: "/restaurants/:resId",
        element: <Menu />,
      },
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// instead of this, using Router provider and providing config appRouter
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
