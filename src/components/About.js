import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Class Constructor Called");
  }
  componentDidMount() {
    console.log("Parent Class componentDidMount Called");
  }

  render() {
    console.log("Parent Class render() Called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is a Swiggy clone built as part of a React web series.</h2>
        <User name={"Vinith from Functional Component"} />
        <UserClass name={"Vinith from Class Component"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is a Swiggy clone built as part of a React web series.</h2>
//       <User name={"Vinith from Functional Component"} />
//       <UserClass name={"Vinith from Class Component"} />
//     </div>
//   );
// };

export default About;
