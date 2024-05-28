import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * config (data) driven ui
 * which means let's take a example swigy(ui), it shows different ui and options(offers, resturats)
 * based on location, day, time etc.., this is known as cofig(data) driven ui
 * @returns
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//for render component we need to pass <component name/>
root.render(<AppLayout />);
