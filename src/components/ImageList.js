import React, { Component } from 'react';
import Image from './Image';
import photoData from '../data/photoData';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allImages: photoData.items,
      faveImages: []
    }
  }
  render() {
    return (
      <div className='ImageList'>
        <div className='container'>
        <h1>I am an image list!</h1>
        <a className='button is-link is-medium'>Show all</a>
        <a className='button is-link is-medium'>Show favourites</a>
        {this.state.allImages.length === 0 ?
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <i className='fa fa-spinner fa-pulse fa-4x is-centered' aria-hidden='true'></i>
              </div>
            </div>
          </nav>
          : this.state.allImages.map(image =>
            <Image 
              title={image.title}
              src={image.media.m}
              flickrLink={image.link}
              key={image.date_taken}
            />
          )}
        </div>
      </div>
    );
  }
}

export default ImageList;