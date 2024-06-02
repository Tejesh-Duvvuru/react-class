import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    return (
      // here in useEffect return is like componentWillUnmount
      <h1></h1>
    );
    //[] with this we can say componentDidMount
    //[dependency array with variable], componentDidUpdate
  }, []);

  return (
    <div className="user-card">
      <h2>Name: Tejesh</h2>
      <h2>Location: Hyd</h2>
      <h2>Contact: saitejeosh1919@gmaill.com</h2>
    </div>
  );
};

export default User;
