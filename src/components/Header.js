import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");

  //when a setstate variable entire component will rerenders

  //if there is no dependency array, useEffect is called every render
  //  useEffect(() => {
  //    console.log("on dependency render");
  //  });

  //if dependency array is empty [], useEffect is called on initial render(just once)
  // useEffect(() => {
  //   console.log("header render, empty array");
  // }, []);

  //in dependency array is there variable [variable, variable..], useEffect is called only variable updates and initial render
  useEffect(() => {
    console.log("header render, variable changes");
  }, [login]);
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
            {/* the difference between <a> and <Link
            is while using a tag entire page will render again but in
            Link tah it will replace the component so it will not render entire the render tag */}
            {/* <a href="/about">About us</a> */}
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
            {/* <a href="/contact">Contact us</a> */}
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
