import React from 'react';
import Button from './components/button/button.js';
// import './App.scss';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';


class App extends React.Component {
  render() {
    return (
      <>
       <Header />
       <Button />
       <Footer />
      </>
    )
  }
}

export default App;
