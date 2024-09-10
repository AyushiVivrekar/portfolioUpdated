import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SkillsData } from '../getData/data';

const Skills = () => {
  const [progress, setProgress] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSkills, setVisibleSkills] = useState([]);
  const itemsPerSlide = 4; // Number of CircularProgressbars to display at once

  // Set up initial state and start progress animation
  useEffect(() => {
    const skillValues = SkillsData.map(skill => skill.skillValue);
    setProgress(skillValues);
    setVisibleSkills(SkillsData.slice(0, itemsPerSlide));

    const timer = setInterval(() => {
      setProgress(prevProgress => prevProgress.map(value => (value >= 100 ? 0 : value + 10)));
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Handle previous button click
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setVisibleSkills(prevVisible => {
        const newVisible = [...prevVisible];
        newVisible.pop();
        newVisible.unshift(SkillsData[currentIndex - 1]); 
        return newVisible;
      });
    }
  };


  const handleNext = () => {
    if (currentIndex < SkillsData.length - itemsPerSlide) {
      setCurrentIndex(currentIndex + 1);
      setVisibleSkills(prevVisible => [
        ...prevVisible.slice(1),
        SkillsData[currentIndex + itemsPerSlide], 
      ]);
    }
  };

  return (
    <div className='backOverlapSkills'>
      <div id="skills">
        <Container fluid className="skills">
          <div className="section-title">
            <h2 className='text-light'>Skills</h2>
          </div>
          <Row className="skills-content d-flex align-items-center justify-content-center">
            <Col xs={2} sm={1} className="d-flex justify-content-center">
              <button onClick={handlePrevious} disabled={currentIndex === 0}
              style={{background:"rgba(255, 255, 255, 0.535)", border:"none", borderRadius:"70%", padding:"10px", color:"blue"}}>
                <FaArrowLeft className="arrow-icon" />
              </button>
            </Col>
            <Col xs={8} sm={10} className="d-flex justify-content-center">
              <div className="d-flex align-items-center flex-wrap justify-content-center">
                {visibleSkills.map((dataSkill, index) => (
                  <div key={index} className="d-flex flex-column align-items-center mr-4 mb-4">
                    <CircularProgressbarWithChildren
                      value={progress[index]}
                      text={`${dataSkill.skillText}`}
                      styles={{
                        root: { width: '85px' },
                        path: { stroke: '#0c4a6e', strokeWidth: 10 },
                        trail: { stroke: '#7dd3fc' },
                      }}
                      className='progressBarIcon'
                    />
                    <span style={{ marginTop: "20px" }} className='me-5'>
                      <span>{dataSkill.icon}</span>
                      <span className='text-light text-center'><b>{dataSkill.skillsName}</b></span>
                    </span>
                  </div>
                ))}
              </div>
            </Col>
            <Col xs={2} sm={1} className="d-flex justify-content-center">
              <button onClick={handleNext} disabled={currentIndex === SkillsData.length - itemsPerSlide} style={{background:"rgba(255, 255, 255, 0.535)", border:"none", borderRadius:"70%", padding:"10px", color:"blue"}}>
                <FaArrowRight className="arrow-icon" />
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="skillParallaxImg"></div>
    </div>
  );
};

export default Skills;