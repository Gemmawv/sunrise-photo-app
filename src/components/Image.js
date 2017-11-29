/* eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import ImageIsFave from './ImageIsFave';
import ImageIsNotFave from './ImageIsNotFave';
import PropTypes from 'prop-types';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.addFaveStatus = this.addFaveStatus.bind(this);
    this.removeFaveStatus = this.removeFaveStatus.bind(this);
  }

  render() {
    return (
      this.props.faves.includes(this.props.imageDetails) ?
        <ImageIsFave
          title={this.props.title}
          flickrLink={this.props.flickrLink}
          src={this.props.src}
          removeFave={this.removeFaveStatus}
          key={this.props.id}
        />
        :
        <ImageIsNotFave
          title={this.props.title}
          flickrLink={this.props.flickrLink}
          src={this.props.src}
          addFave={this.addFaveStatus}
          key={this.props.id}
        />
    );
  }

  addFaveStatus() {
    this.props.addToFaves(this.props.imageDetails);
  }

  removeFaveStatus() {
    this.props.removeFromFaves(this.props.imageDetails);
  }
}

Image.propTypes = {
  imageDetails: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  flickrLink: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  addToFaves: PropTypes.func.isRequired,
  removeFromFaves: PropTypes.func.isRequired,
  faves: PropTypes.array.isRequired
};

export default Image;
