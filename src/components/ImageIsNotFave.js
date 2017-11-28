import React from 'react';

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
  )
}

export default ImageIsNotFave;