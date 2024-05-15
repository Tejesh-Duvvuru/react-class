import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", class: "heading1" },
  "Hello ma"
);

console.log("heading root", heading);
// heading and jsxHeading both are same

//jsxHeading is jsx element it is not html
//JSX (transpiled before it reaches the JS Engine)
//JSX => React.createElemnt => JS Object
const jsxHeading = (
  <h1 id="heading" className="heading1">
    I am from jsx
  </h1>
);
//we rapp jsx in ( ) becuse it is multpile line, if ypu write in single line no nedd ()
//because babel understans

// go the babel page you can check how it is converting

//js engine didn't understand jsx
//js engine and browsers only understand ECAMscript
//so jsx is not valid js code
//then how it is working
//then parcel is doing
//JSX (transpiled before it reaches the JS Engine) PARCEL - Babel
//Babel is doing  JSX conersion

console.log("jsxHeading", jsxHeading);

// React Component
//Everthing in react is a component (button, header, input)
//Class Based Component - OLD
//Functionak COmponent - NEW

const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("jsx"));
root1.render(jsxHeading);
root.render(heading);
