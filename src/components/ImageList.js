import React from 'react';
import Image from './Image';

function ImageList() {
  return (
    <div className='ImageList'>
      <h1>I am an image list!</h1>
        <a className='button is-link is-medium'>Show all</a>
        <a className='button is-link is-medium'>Show favourites</a>
      <div className='tile is-ancestor'>
        <Image />
      </div>
    </div>
  );
}

export default ImageList;