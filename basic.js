import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading", class: "heading" },
  "Hello"
);
//head or parent or parent1 is a ReactElement nothing but return jsobject => (Browsers will understan)
//nested tags
{
  /* 
  <div id='parent'>
  <div id='child'>
    <h1>I am a h1 tag</h1>
    <h2>I am a h2 tag</h2>
  </div>
</div>;
if we have multiple childern we need to pass in array[h1, h2] 
*/
}
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am a h1 tag"),
    React.createElement("h2", { key: "h2" }, "I am a h2 tag"),
  ])
);
{
  /* <div id="parent">
  <div id="child">
    <h1>I am a h1 tag</h1>
    <h2>I am a h2 tag</h2>
  </div>
  <div id="child">
    <h1>I am a h1 tag</h1>
    <h2>I am a h2 tag</h2>
  </div>
</div>; */
}
const parent1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I am Tejesh tag"),
    React.createElement("h2", { key: "h2" }, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h11" }, "I am a h1 tag"),
    React.createElement("h2", { key: "h22" }, "I am a h2 tag"),
  ]),
]);

console.log(parent1); // it return the javascript object
//creaRoot is for adding childs to it
const root = ReactDOM.createRoot(document.getElementById("root"));
//render method will help convert react element into html and display in browser
root.render(parent1);
//what ever inside in the root(attribute in html) will be replaced not append

//library where we want just apply
//React will do as it is
//we have written two div one head and root
// but our react is applied only for root that is library
