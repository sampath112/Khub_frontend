import React from 'react';
import './slides.css'
// import Slide from '../Slide/Slide'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';// Make sure to import the Slide component


const Slide = ({ color }) => {
  return <div className="Slide" style={{ backgroundColor: color }}></div>;
};


const Slides = () => {
  return (
    <>
    <div className='main'>
    <div className="Slides">
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
    </div>




    <div className="box">
    <div className="content">
      <div className="database-icon">
        <FontAwesomeIcon icon={faDatabase} size="3x" />
        <h6>About the Data</h6>
      </div>
      
      {/* Additional content */}
    </div>
  </div>
  </div>
    </>
    
  
   
  );
};

export default Slides;
