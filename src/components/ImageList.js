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
    }
    this.showAll = this.showAll.bind(this);
    this.showFaves = this.showFaves.bind(this);
    this.addToFaves = this.addToFaves.bind(this);
    this.removeFromFaves = this.removeFromFaves.bind(this);
    this.isFave = this.isFave.bind(this);

  }
  render() {
    console.log(this.state.faveImages)
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
                id={index}
                addToFaves={this.addToFaves}
                removeFromFaves={this.removeFromFaves}
                isFave={this.isFave(image)}
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
                id={index}
                addToFaves={this.addToFaves}
                removeFromFaves={this.removeFromFaves}
                isFave={this.isFave(image)}
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
    })
  }

  showFaves() {
    this.setState({
      displayfaveImages: true
    })
  }

  isFave(item) {
    item.isFave = item.isFave || false;
  }

  addToFaves(item) {
    item.isFave = true;
    this.setState({
      faveImages: this.state.faveImages.concat(item)
    })
  }

  removeFromFaves(item) {
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