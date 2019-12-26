import React, { Component } from 'react';
import Home from './pages/home';
import './App.css';
import Tab from './Tab';
import Navbar from './pages/Navbar';

class App extends Component {
  render(){
    return (
      <div>
        {/* <Home/> */}
        <Navbar/>
        {/* <Tab/>  */}
      </div>
    )
  }
}

export default App;
