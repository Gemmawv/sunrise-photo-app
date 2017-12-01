/* eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayfaveImages: false,
      allImages: this.props.photoData,
      faveImages: []
    };
    this.showAll = this.showAll.bind(this);
    this.showFaves = this.showFaves.bind(this);
    this.addToFaves = this.addToFaves.bind(this);
    this.removeFromFaves = this.removeFromFaves.bind(this);
  }

  render() {
    return (
      <div className='image-list'>
        <div className="container">
          <button className='button is-link is-medium is-outlined show-button' onClick={this.showAll}>Show all</button>
          <button className='button is-link is-medium is-outlined show-button' onClick={this.showFaves}>Show favourites</button>
          {this.state.displayfaveImages ?
            this.state.faveImages.map((image, index) =>
              <div className='box' key={index}>
                <Image
                  imageDetails={image}
                  title={image.title}
                  src={image.media.m}
                  flickrLink={image.link}
                  key={index}
                  id={index}
                  addToFaves={this.addToFaves}
                  removeFromFaves={this.removeFromFaves}
                  faves={this.state.faveImages}
                />
              </div>
            )
            :
            this.state.allImages.map((image, index) =>
              <div className='box' key={index}>
                <Image
                  imageDetails={image}
                  title={image.title}
                  src={image.media.m}
                  flickrLink={image.link}
                  key={index}
                  id={index}
                  addToFaves={this.addToFaves}
                  removeFromFaves={this.removeFromFaves}
                  faves={this.state.faveImages}
                />
              </div>
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

ImageList.propTypes = {
  photoData: PropTypes.array.isRequired
};

export default ImageList;