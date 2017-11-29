import React, { Component } from 'react';
import ImageIsFave from './ImageIsFave';
import ImageIsNotFave from './ImageIsNotFave';
import PropTypes from 'prop-types';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: this.props.isFave
    }
    this.addFaveStatus = this.addFaveStatus.bind(this)
    this.removeFaveStatus = this.removeFaveStatus.bind(this)
  }

  render() {
    return (
      this.state.isFave ?
        <ImageIsFave
          title={this.props.title}
          flickrLink={this.props.flickrLink}
          src={this.props.src}
          removeFave={this.removeFaveStatus}
        />
        :
        <ImageIsNotFave
          title={this.props.title}
          flickrLink={this.props.flickrLink}
          src={this.props.src}
          addFave={this.addFaveStatus}
        />
    )
  }

  addFaveStatus() {
    this.props.addToFaves(this.props.imageDetails)
    this.setState({
      isFave: true
    })
  }

  removeFaveStatus() {
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