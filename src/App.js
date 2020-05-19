import React from 'react';
import Button from './button.js';
import Footer from './footer';
import Header from './header';
import './App.css';

class App extends React.Component {
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
    let { count } = this.state;
    return (
    <React.Fragment>
      <div className="app">
        <Header />
        <div>
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
    );
  }
}

export default App;
