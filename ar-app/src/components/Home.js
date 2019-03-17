import React, { Component } from "react";
import Header from './Header';
import News from './News';
class Home extends Component {
  render() {
    return (
     <div className="App">
     <Header/>
     <News/>
      </div>

    );
  }
}
export default Home;
