import React, { lazy, StrictMode, Suspense, useEffect, useState } from "react";
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
import UserContext from "./utils/UserContext";
import { CartContextProvider } from "./utils/CartContext";
import Cart from "./components/Cart";
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
  const [userName, setUserName] = useState();
  useEffect(() => {
    //api call
    setUserName("tejesh");
  }, []);
  return (
    //UserContext.Provider is setting a value and writting businnse logic
    //we can wrap only which part we need
    <CartContextProvider>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "teja" }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          {/* Oultet will replace by the childeren component */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </CartContextProvider>
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
        path: "/cart",
        element: <Cart />,
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

root.render(<RouterProvider router={appRouter} />);

// <StrictMode>
/* </StrictMode> */
