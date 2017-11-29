import React from 'react';
import PropTypes from 'prop-types';

function ImageIsFave(props) {
  return (
    <div className='image-box'>
      <div className='image-details'>
        <div className='image-title'>
          <h1>{props.title}</h1>
          <i className='fa fa-heart' aria-hidden='true'></i>
        </div>
        <a href={props.flickrLink} target='_blank'>
          <img className='image-src' src={props.src} alt='sunrise' />
        </a>
      </div>
      <div className='faves-button'>
        <button className='button is-danger' onClick={props.removeFave}>Remove from favourites</button>
      </div>
    </div>
  );
}

ImageIsFave.propTypes = {
  title: PropTypes.string.isRequired,
  flickrLink: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  removeFave: PropTypes.func.isRequired
};

export default ImageIsFave;