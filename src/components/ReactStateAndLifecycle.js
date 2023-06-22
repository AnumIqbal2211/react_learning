import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this); //.bind() pass the data as an argument to the function                                                         of a class based component
  }

  handleClick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p> 
        <button onClick={this.handleClick}>
        Counter
        </button>
      </div>
    );
  }
}

export default Counter;
