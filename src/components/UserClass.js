import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Class Constructor Called");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Child Class componentDidMount Called");
  }

  render() {
    console.log("Child Class render() Called");
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : Hyderabad</h3>
        <h4>Contact : contact@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
