import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { CartContext } from "../utils/CartContext";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const data = useContext(UserContext);
  const { cartValue } = useContext(CartContext);
  // console.log("data", data);
  console.log("cartData", cartValue);

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
    <div className="header flex flex-row justify-between px-1 bg-green-950 shadow-2xl">
      <div>
        <img className="w-24" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex  items-center">
        <ul className="flex flex-row  list-none text-white ">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About Us</Link>
            {/* the difference between <a> and <Link
            is while using a tag entire page will render again but in
            Link tah it will replace the component so it will not render entire the render tag */}
            {/* <a href="/about">About us</a> */}
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact Us</Link>
            {/* <a href="/contact">Contact us</a> */}
          </li>
          <li className="mx-2">
            <Link to="/mart">Insta Mart</Link>
          </li>
          <li className="mx-2">
            <Link to="/cart">Cart items:{cartValue.length}</Link>
          </li>
          <button
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
            className="mx-2"
          >
            {login}
          </button>
          <li className="mx-2">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
