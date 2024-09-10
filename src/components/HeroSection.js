import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-left">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <TypeAnimation
            sequence={[
              'Ayushi Vivrekar',
              2000, 
              '', 
              500, 
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
          />
          <p>I'm <span className="typed">Designer,React JS Developer</span></p>
        </div>
      </section>
    </>
  );
}

export default HeroSection;