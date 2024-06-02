import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("child constructor");
  }
  //in class is old method to call props and state
  //in class just constructor method will call automatically
  //   state = {
  //     count: 6,
  //     name: "",
  //   };

  //react life cycle
  //how this componet is mounted(loading) on webpage
  //when ever class loads constructor will called
  //then render method will call
  //then componentDidMount method will call
  // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  //   componentDidMount;
  componentDidMount() {
    //for the first time of the component will render
    console.log("child componentdidmount");
  }

  componentDidUpdate() {
    //after every rerender(state, props update)
    console.log("render update");
  }

  componentWillUnmount() {
    // to clear the things when ever the component will disappear
    console.log("child componentwill unmount");
  }

  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    console.log("child render");
    return (
      <div className="user-card">
        <h2>count:{count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            //remaning items in objects will not changes
            //only what we changes or updates on setSatet those will change
          }}
        >
          count buttton
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: {contact}</h2>
      </div>
    );
  }
}

export default UserClass;
