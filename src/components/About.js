import React, { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent componentdidmount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h2>About us</h2>
        <h2>Number one trusted company</h2>
        <div>
          Logged loggedIn:
          <UserContext.Consumer>
            {(data) => <h1>{data.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {/* <User /> */}
        <UserClass
          name="tejesh duvvuru"
          location="hyd"
          contact="tejesh@gmail.com"
        />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h2>About us</h2>
//       <h2>Number one trusted company</h2>
//       {/* <User /> */}
//       <UserClass
//         name="tejesh duvvuru"
//         location="hyd"
//         contact="tejesh@gmail.com"
//       />
//     </div>
//   );
// };

export default About;
