import React from 'react';
import './Space.css'; // Link to your CSS file for styling
import exploreIcon from '../../assets/8884806.webp'; // Replace with actual image path
import simulationIcon from '../../assets/4089012.webp'; // Replace with actual image path

const Space = () => {
  return (
    <div className="space-section">
      <div className="card">
        <div className="card-content">
          <h2>Explore New Planets</h2>
          <p>
            Open repair of infrarenal aortic aneurysm <br/> or dissection, 
            plus repair of associated.
          </p>
          <a href="#" className="download-link">Explore Now</a>
        </div>
        <div className="card-image" id='ec'>
          <img src={exploreIcon} alt="Explore Planets" className='exploreicon' />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <h2>Create Universe Simulation</h2>
          <p>
            Open repair of infrarenal aortic aneurysm <br/> or dissection, associated plus repair.
          </p>
          <a href="#" className="download-link">Explore Now</a>
        </div>
        <div className="card-image">
          <img src={simulationIcon} alt="Create Universe Simulation" />
        </div>
      </div>
    </div>
  );
};

export default Space;
