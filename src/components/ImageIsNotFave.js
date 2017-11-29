import React from 'react';
import PropTypes from 'prop-types';

function ImageIsNotFave(props) {
  return (
    <div className='box'>
      <div className='Image details'>
        <h1>{props.title}</h1>
        <a href={props.flickrLink} target='_blank'>
          <img src={props.src} alt='sunrise' />
        </a>
      </div>
      <div className='FavesButton'>
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