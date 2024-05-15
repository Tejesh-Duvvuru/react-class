import React from "react";
import ReactDOM from "react-dom/client";

//function component is normal js function which returns jsx
//Write first letter is Capital to understand
const HeadingComponent = () => {
  return <h1>Welcome to the react world</h1>;
};
// HeadingComponent and HeadingComponent1 both are same
const HeadingComponent1 = () => (
  <div>
    <HeadingComponent />
    <h1>I am js I am your boss</h1>
  </div>
);

//what is component composition
//calling one function inside another function

const root = ReactDOM.createRoot(document.getElementById("root"));
//for render component we need to pass <component name/>
root.render(<HeadingComponent1 />);
