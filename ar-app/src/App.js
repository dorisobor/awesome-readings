import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

//components
import Home from './components/Home.js';
import ContactPage from './components/Contact.js';
import News from './components/News.js';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';



const Contact = () => <ContactPage />;

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/News" component={News} />

      <Footer/>
    </div>
  </Router>

);

export default App;
