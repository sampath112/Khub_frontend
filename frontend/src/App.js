import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
// import Box from  './components/Box/box'
import Slides from './components/Slides/slides';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Content">
        <Slides />
      </div>
      <Footer />
    </div>
  );
};

export default App;