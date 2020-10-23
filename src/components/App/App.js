import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header.js';
import GalleryList from '../GalleryList/GalleryList.js';
import GalleryItem from '../GalleryItem/GalleryItem.js';
import './App.css';

class App extends Component {
  state = {
    picsArray: []
  }

  componentDidMount = () => {
    console.log('app.js is mounted')
    this.getPics();
  }

  getPics = () => {
    console.log('in getPics');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log(response.data);
      this.setState({
        picsArray: response.data
      });
    }).catch((err) => {
      console.log(err);
    })
  }

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
