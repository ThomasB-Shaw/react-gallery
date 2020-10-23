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

  clickDescription = () => {
    console.log('Click Description', this.state.picsArray.description)
  }

  render() {
    return (
      <div className="App">
       <Header />
        <p>Gallery goes here</p>
        {this.state.picsArray.map((image) => {
          return <ul>
              <li key={image.id}>
               <img src={image.path} alt={image.description} onClick={() => this.clickDescription(image.id)}></img>
               <button id='like'>Like This Image</button>
              </li> 
          </ul>
        })}
      </div>
    );
  }
}

export default App;
