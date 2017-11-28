import React from 'react';

function ImageIsFave(props) {
  return (
    <div className='box'>
      <div className='Image-details'>
        <div className='Image-title'>
          <h1>{props.title}</h1>
          <i className='fa fa-heart' aria-hidden='true'></i>
        </div>
        <a href={props.flickrLink} target='_blank'>
          <img src={props.src} alt='sunrise' />
        </a>
      </div>
      <div className='FavesButton'>
        <button className='button is-danger' onClick={props.removeFave}>Remove from favourites</button>
      </div>
    </div>
  )
}

export default ImageIsFave;