import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';
import axios from 'axios';


class GalleryList extends Component {

  state = {
    picsArray: [],
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

  render() {
    return (
      <div className="galleryList">
      {this.state.picsArray.map((image) => {
          return <GalleryItem picsArray = {this.state.picsArray} getPics = {this.getPics} image={image}/>
      })}
  </div>
    );
  }
}

export default GalleryList;