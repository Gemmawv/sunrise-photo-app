import React from 'react';
import PropTypes from 'prop-types';

function ImageIsNotFave(props) {
  return (
    <div className='image-box'>
      <div className='image-details'>
        <div className='image-title'>
          <h1>{props.title}</h1>
        </div>
        <a href={props.flickrLink} target='_blank'>
          <img className='image-src' src={props.src} alt='sunrise' />
        </a>
      </div>
      <div className='faves-button'>
        <button className='button is-warning' onClick={props.addFave}>Add to favourites</button>
      </div>
    </div>
  );
}

ImageIsNotFave.propTypes = {
  title: PropTypes.string.isRequired,
  flickrLink: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  addFave: PropTypes.func.isRequired
};

export default ImageIsNotFave;