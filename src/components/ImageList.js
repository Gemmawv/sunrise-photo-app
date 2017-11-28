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
    this.AddtoFaves = this.AddtoFaves.bind(this);
    this.RemoveFromFaves = this.RemoveFromFaves.bind(this);
    this.isFave = this.isFave.bind(this);

  }
  render() {
   // console.log(this.state.faveImages)
    return (
      <div className='ImageList'>
        <div className='container'>
          <h1>I am an image list!</h1>
          <button className='button is-link is-medium'>Show all</button>
          <button className='button is-link is-medium'>Show favourites</button>
          {this.state.allImages.length === 0 ?
            <nav className="level">
              <div className="level-item has-text-centered">
                <div>
                  <i className='fa fa-spinner fa-pulse fa-4x is-centered' aria-hidden='true'></i>
                </div>
              </div>
            </nav>
            : this.state.allImages.map((image, index) =>
              <Image
                imageDetails={image}
                title={image.title}
                src={image.media.m}
                flickrLink={image.link}
                key={index}
                id={index}
                addToFaves={this.AddtoFaves}
                removeFromFaves={this.RemoveFromFaves}
                isFave={this.isFave(image)}
              />
            )}
        </div>
      </div>
    );
  }

  isFave(item) {
    item.isFave = item.isFave || false;
  }

  AddtoFaves(item) {
    item.isFave = true;
    this.setState({
      faveImages: this.state.faveImages.concat(item)
    })
  }

  RemoveFromFaves(item) {
    item.isFave = false;
    let newFaves = this.state.faveImages.filter(image => {
     return image.isFave === true;
    })
    this.setState({
      faveImages: newFaves
    })
  }

}

export default ImageList;