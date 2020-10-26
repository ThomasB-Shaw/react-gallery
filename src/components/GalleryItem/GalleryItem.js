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

//   descriptionUpdate = (imageID) => {
//     console.log('Click Image!');
//     axios({
//       method: 'PUT',
//       url: `/gallery/descriptionStatus/${imageID}`,
//       data: {id: imageID} // ZERO IDEA WHY THIS IS WORKING HERE
//     }).then((response) => {
//       console.log('in PUT', response);
//       this.props.getPics();
//     }).catch((error) => {
//       console.log(error);
//     })
// }

//   pickRender = (image) => {
//     if (image.descriptionStatus === false) {
//     return (<div className="GalleryItem">
//       <li key={image.id}>
//            <img src={image.path} alt={image.description} onClick={() => this.descriptionUpdate(image.id)}></img>
//            <p>{image.likes}</p>
//            <button id='like' onClick={() => this.likeImage(image.id)}>Like This Image</button>
//           </li> 
//   </div>
//     )
//   } else if (image.descriptionStatus === true) {
//     return (<div className="GalleryItem">
//       <li key={image.id}>
//            <p onClick={() => this.descriptionUpdate(image.id)}>{image.description}</p>
//            <p className="textBox">{image.likes}</p>
//            <button id='like' onClick={() => this.likeImage(image.id)}>Like This Image</button>
//           </li> 
//   </div>
//     )
//   }
// }

updateToggleDisplay = () => {
  console.log('It was', this.state.toggleDisplay);

  this.setState({
      toggleDisplay: !this.state.toggleDisplay
  })
}  

  render() {
    return ( <div className='galleryItem'>
      <li>
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