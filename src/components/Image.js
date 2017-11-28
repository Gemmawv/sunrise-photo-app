import React, { Component } from 'react';
import ImageIsFave from './ImageIsFave';
import ImageIsNotFave from './ImageIsNotFave';
import '../css/Image.css';
import PropTypes from 'prop-types';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: this.props.isFave
    }
    this.AddFaveStatus = this.AddFaveStatus.bind(this)
    this.RemoveFaveStatus = this.RemoveFaveStatus.bind(this)
  }

  render() {
    return (
      this.state.isFave ?
        <ImageIsFave
          title={this.props.title}
          flickrLink={this.props.flickrLink}
          src={this.props.src}
          removeFave={this.RemoveFaveStatus}
        />
        :
        <ImageIsNotFave
          title={this.props.title}
          flickrLink={this.props.flickrLink}
          src={this.props.src}
          addFave={this.AddFaveStatus}
        />
    )
  }

  AddFaveStatus() {
    this.props.addToFaves(this.props.imageDetails)
    this.setState({
      isFave: true
    })
  }

  RemoveFaveStatus() {
    this.props.removeFromFaves(this.props.imageDetails)
    this.setState({
      isFave: false
    })
  }
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  flickrLink: PropTypes.string.isRequired,
  addToFaves: PropTypes.func.isRequired,
  removeFromFaves: PropTypes.func.isRequired
};

export default Image;