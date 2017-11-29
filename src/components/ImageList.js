/* eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import Image from './Image';
import photoData from '../data/photoData';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayfaveImages: false,
      allImages: photoData.items,
      faveImages: []
    };
    this.showAll = this.showAll.bind(this);
    this.showFaves = this.showFaves.bind(this);
    this.addToFaves = this.addToFaves.bind(this);
    this.removeFromFaves = this.removeFromFaves.bind(this);
  }

  render() {
    return (
      <div className='ImageList'>
        <div className='container'>
          <button className='button is-link is-medium' onClick={this.showAll}>Show all</button>
          <button className='button is-link is-medium' onClick={this.showFaves}>Show favourites</button>
          {this.state.displayfaveImages ?
            this.state.faveImages.map((image, index) =>
              <Image
                imageDetails={image}
                title={image.title}
                src={image.media.m}
                flickrLink={image.link}
                key={index}
                addToFaves={this.addToFaves}
                removeFromFaves={this.removeFromFaves}
                faves={this.state.faveImages}
              />
            )
            :
            this.state.allImages.map((image, index) =>
              <Image
                imageDetails={image}
                title={image.title}
                src={image.media.m}
                flickrLink={image.link}
                key={index}
                addToFaves={this.addToFaves}
                removeFromFaves={this.removeFromFaves}
                faves={this.state.faveImages}
              />
            )
          }
        </div>
      </div>
    );
  }

  showAll() {
    this.setState({
      displayfaveImages: false
    });
  }

  showFaves() {
    this.setState({
      displayfaveImages: true
    });
  }

  addToFaves(item) {
    this.setState({
      faveImages: this.state.faveImages.concat(item)
    });
  }

  removeFromFaves(item) {
    let newFaves = this.state.faveImages.filter(image => {
      return image !== item;
    });
    this.setState({
      faveImages: newFaves
    });
  }

}

export default ImageList;