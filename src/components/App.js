/* eslint-disable no-unused-vars*/

import React, { Component } from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import ImageList from './ImageList';

function App(props) {
  return (
    <div className="app" >
      <Header />
      <ImageList photoData={props.photoData} />
      <Footer />
    </div>
  );

}

App.propTypes = {
  photoData: PropTypes.array.isRequired
};

export default App;
