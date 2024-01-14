import React from 'react';
import './landingpage.css';
import backgroundImg from '../assets/bacground.jpg';
import Slider from '../components/slider';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/7.png";
import image7 from "../assets/8.jpg";


function LandingPage() {
  const textContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '48px',
  };

  const subheadingStyle = {
    fontSize: '24px',
    color: 'white',
  };

  return (  
<div className='conteiner'>

    <div className="landing-Page">
      <img src={backgroundImg} className="backGroundImg" />
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>Welcome to Picsart Academy Library!</h1>
      </div>
      <div className='sliderContainer'>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={image1} className="sliderimg"/>
          <img src={image2} className="sliderimg"/>
          <img src={image3} className="sliderimg"/>
          <img src={image4} className="sliderimg"/>
          <img src={image5} className="sliderimg"/>
          <img src={image6} className="sliderimg"/>
          <img src={image7} className="sliderimg"/>
        </AliceCarousel>
    </div>  
    </div>
 
</div>
  );
}

export default LandingPage;
