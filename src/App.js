import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Faq from './components/Faq/Faq.js';
import Features from './components/Features/Features.js';

import { Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <Route exact={true} path='/' component={Home} />
          <Route path='/features' component={Features} />
          <Route path='/faq' component={Faq} />
        <Footer/>
      </div>
    );
  }
}

export default App;
