import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header.js';
import GalleryList from '../GalleryList/GalleryList.js';
import './App.css';

class App extends Component {




  render() {
    return (
      <div className="App">
       <Header />
        <p>Gallery goes here</p>
        <ul>
        <GalleryList />
        </ul>
      </div>
    );
  }
}

export default App;
