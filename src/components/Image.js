import React from 'react';

function Image(props) {
  return (
      <div className='box'>
        <h1>{props.title}</h1>
        <a href={props.flickrLink} target='_blank'>
          <img src={props.src} alt='sunrise' />
        </a>
        <a className='button is-warning'>Add to favourites</a>
      </div>
  )
}
export default Image;