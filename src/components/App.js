import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import ImageList from './ImageList';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <ImageList />
        <Footer />
      </div>
    );
  }
}

export default App;
