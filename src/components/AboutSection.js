import React from 'react'
import profileImg from '../assests/ayushiPic.jpg';
import AOS from 'aos';

function AboutSection() {
  AOS.init({
    duration: 1000,
    offset: 300
  });
  return (
    <>
      <div className='container'>
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>About</h2>
            </div>

            <div className="row">
              <div className="col-lg-4 mt-5">
                <img src={profileImg} className="img aboutImg " alt="Profile"/>
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <span className='text-center'><h3>React JS Developer &amp; Web Developer.</h3></span>
                <div className='mt-5'>
                  <h5>Experienced React.js Developer adept at building innovative user interfaces,
                    collaborating closely with designers and backend engineers. Dedicated to
                    translating UI/UX designs into high-quality, optimized code and ensuring
                    seamless integration.</h5>
                </div>
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <ul data-aos="fade-up">
                      <li><strong>Birthday:</strong> <span>25 Jan 1998</span></li>
                      {/* <li><strong>Website:</strong> <span>www.example.com</span></li> */}
                      <li><strong>Phone:</strong> <span>+91 6362628548</span></li>
                      <li><strong>City:</strong> <span>Indore, Madhaya Pradesh India</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul data-aos="fade-up">
                      <li><strong>Age:</strong> <span>25</span></li>
                      <li><strong>Degree:</strong> <span>Bechlor's Of Engineering(CSE)</span></li>
                      <li><strong>Email:</strong> <span>ayushi.viva@gmail.com</span></li>
                      {/* <li><strong>Freelance:</strong> <span>Available</span></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    
    </>
  )
}

export default AboutSection