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
    console.log('app.js is mounted');
    // On mount gets picsArray data to append to DOM on start up or reload
    this.getPics();
  }

 // Calling will get all picture data from the gallery.data module on the server side
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

  // On Click from img black will fire off
  clickDescription = (imageDescription) => {
    console.log('Click Description', imageDescription);
  }
  //PUT Update Here
  likeImage = (imageID) => {
    console.log('Click Like!');
    axios({
      method: 'PUT',
      url: `/gallery/like/${imageID}`,
      data: {id: imageID} // ZERO IDEA WHY THIS IS WORKING HERE
    }).then((response) => {
      console.log('in PUT', response);
      this.getPics();
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
       <Header />
        <p>Gallery goes here</p>
        <ul>
        {this.state.picsArray.map((image) => {
          return <li key={image.id}>
               <img src={image.path} alt={image.description} onClick={() => this.clickDescription(image.description)}></img>
               <p>{image.likes}</p>
               <button id='like' onClick={() => this.likeImage(image.id)}>Like This Image</button>
              </li> 
        })}
        </ul>
      </div>
    );
  }
}

export default App;
