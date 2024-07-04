import React, { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Switch,
  Outlet,
} from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenuCard from "./components/RestaurantMenuCard";
// import Instamart from "./components/Instamart";
const Instamart = lazy(() => import("./components/Instamart"));

/**
 * config (data) driven ui
 * which means let's take a example swigy(ui), it shows different ui and options(offers, resturats)
 * based on location, day, time etc.., this is known as cofig(data) driven ui
 * @returns
 */

/**
 * how to bundles the react below are different names but are all small
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * lazy loading
 * on demand loading
 * Dynamic import
 * @returns
 *
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* Oultet will replace by the childeren component */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <AppLayout></AppLayout>,
  // },

  // we can use <AppLayout></AppLayout> or <AppLayout />  both will work
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/mart",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenuCard />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/About",
  //   element: <About />,
  // },
  // {
  //   path: "/Contact",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//for render component we need to pass <component name/>
// root.render(<AppLayout />);

root.render(<StrictMode><RouterProvider router={appRouter} /></StrictMode> );
