import React from "react";

 class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="Button">
        <div>
          <div className="count">
            <h3>Count:</h3>
            <h1>{this.state.count}</h1>
          </div>
          <button onClick={this.decrementCount}> - </button>
          <button onClick={this.incrementCount}> + </button>
        </div>
      </div>
      
   
    );
  };
 };

export default Button;