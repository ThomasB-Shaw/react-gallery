import React, { Component } from 'react';
import axios from 'axios';


class GalleryItem extends Component {


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
      this.props.getPics();
    }).catch((error) => {
      console.log(error);
    })
  }

  descriptionUpdate = () => {
    console.log('clicked', this.props.descriptionStatus);

    this.setState({
        descriptionStatus: !this.props.descriptionStatus
    })
}

  pickRender = (image) => {
    if (image.descriptionStatus === false) {
    return (<div className="GalleryItem">
      <li key={image.id}>
           <img src={image.path} alt={image.description} onClick={() => this.descriptionUpdate(image.descriptionStatus)}></img>
           <p>{image.likes}</p>
           <button id='like' onClick={() => this.likeImage(image.id)}>Like This Image</button>
          </li> 
  </div>
    )
  } else if (image.descriptionStatus === true) {
    return (<div className="GalleryItem">
      <li key={image.id}>
           <p onClick={() => this.descriptionUpdate(image.descriptionStatus)}>{image.description}</p>
           <p>{image.likes}</p>
           <button id='like' onClick={() => this.likeImage(image.id)}>Like This Image</button>
          </li> 
  </div>
    )
  }
}

  render() {
    return (
      this.props.picsArray.map(image => this.pickRender(image))
    );
  }
}

export default GalleryItem;