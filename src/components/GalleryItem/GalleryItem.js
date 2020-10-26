import React, { Component } from 'react';
import axios from 'axios';


class GalleryItem extends Component {

  state = {
    toggleDisplay: true
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

  // Flips the state of the toggle display to play against the conditional render
  // This will either display the text box or image per item based on its status
updateToggleDisplay = () => {
  console.log('It was', this.state.toggleDisplay);

  this.setState({
      toggleDisplay: !this.state.toggleDisplay
  })
}  

  render() {
    return ( <div className='galleryItem'>
      <li>
        {/* Conditional Render using ternary operator to display image or textbox. Based on toggleDisplay */}
      {this.state.toggleDisplay ?
      <img src={this.props.image.path} alt={this.props.image.description} onClick={this.updateToggleDisplay}></img>
      :
      <p className= "textBox" onClick={this.updateToggleDisplay}>{this.props.image.description}</p>
    } 
    <p>This photo has been loved {this.props.image.likes} times!</p>
      <button id='like' onClick={() => this.likeImage(this.props.image.id)}>Like This Image</button>
    <br/>
    </li>
      </div>
    );
  }
}

export default GalleryItem;