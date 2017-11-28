import React, { Component } from 'react';
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
        <div className='box'>
          <div className='Image-details'>
            <div className='Image-title'>
              <h1>{this.props.title}</h1>
              <i className='fa fa-heart' aria-hidden='true'></i>
            </div>
            <a href={this.props.flickrLink} target='_blank'>
              <img src={this.props.src} alt='sunrise' />
            </a>
          </div>
          <div className='FavesButton'>
            <button className='button is-danger' onClick={this.RemoveFaveStatus}>Remove from favourites</button>
          </div>
        </div>
        :
        <div className='box'>
          <div className='Image details'>
            <h1>{this.props.title}</h1>
            <a href={this.props.flickrLink} target='_blank'>
              <img src={this.props.src} alt='sunrise' />
            </a>
          </div>
          <div className='FavesButton'>
            <button className='button is-warning' onClick={this.AddFaveStatus}>Add to favourites</button>
          </div>
        </div>
    )
  }

  AddFaveStatus() {
    this.props.addToFaves(this.props.imageDetails)
    this.setState({
      isFave: true
    })
  }

  RemoveFaveStatus() {
    this.props.removeFromFaves(this.props.imageDetails, this.props.id)
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