import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Header from '../GalleryList/GalleryList.js';
import Header from '../GalleryItem/GalleryItem.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
