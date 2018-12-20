import React, { Component } from "react";
import Header from './Header';
import Articles from './HomeArticles';
class Home extends Component {
  render() {
    return (
     <div className="App">
     <Header/>
     <Articles/>
      </div>

    );
  }
}
export default Home;
