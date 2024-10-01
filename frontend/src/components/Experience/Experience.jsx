import React from 'react';
import './Experience.css'; // Link to your CSS file for styling
import cometIcon from '../../assets/4974978.webp'; // Replace with actual image path
import planetIcon from '../../assets/4088994.webp'; // Replace with actual image path
import atomIcon from '../../assets/4089008.webp'; // Replace with actual image path

const Experience = () => {
  return (
    <div className="experience-section">
      <h1 className="experience-title">Get The Experience Of Exploring The Universe</h1>
      <div className="experience-container">
        <div className="experience-item">
          <img src={cometIcon} alt="Comet" className="experience-icon" />
          <div className='flexbo'>
          <h2 className="experience-number">1</h2>
          <p className="experience-description">
            Direct repair of aneurysm,  pseudoaneurysm, or excision (partial or total) and graft insertion.
          </p>
          </div>
        </div>

        <div className="experience-item">
          <img src={planetIcon} alt="Planet" className="experience-icon" />
          <div className='flexbo'>
          <h2 className="experience-number">2</h2>
          <p className="experience-description">
            Direct repair of aneurysm, pseudoaneurysm, or excision (partial or total) and graft insertion.
          </p>
          </div>
        </div>

        <div className="experience-item">
          <img src={atomIcon} alt="Atom" className="experience-icon" />
          <div className='flexbo'>
          <h2 className="experience-number">3</h2>
          <p className="experience-description">
            Direct repair of aneurysm, pseudoaneurysm, or excision (partial or total) and graft insertion.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
