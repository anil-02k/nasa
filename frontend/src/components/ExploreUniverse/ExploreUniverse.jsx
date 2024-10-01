import React from 'react';
import './ExploreUniverse.css'; // Link to your CSS file for styling
import telescopeIcon from '../../assets/4089001.webp'; // Replace with actual image path
import explorersIcon from '../../assets/peoples.png'; // Replace with actual image path

const ExploreUniverse = () => {
  return (
    <div className="explore-universe">
      <div className="universe-left">
        <h2>A World Without Limits</h2>
        <p>
          Direct repair of aneurysm, pseudoaneurysm, or excision (partial or total) and graft insertion.
        </p>
        <p>You can visit every planet in every galaxy</p>
        <a href="#" className="learn-more-link">Learn More</a>
      </div>
      <div className="universe-center">
        <img src={telescopeIcon} alt="Telescope" className="telescope-icon" />
       
      </div>
      <div className="universe-right">
        <h2>There Are More Than 200 Stars</h2>
        <p>
          Direct repair of aneurysm, pseudoaneurysm, or excision (partial or total) and graft insertion.
        </p>
        <div className="explorers-section">
          <p>With 600 Explorers</p>
        </div>
          <img src={explorersIcon} alt="Explorers" className="explorers-icon" />
      </div>
    </div>
  );
};

export default ExploreUniverse;
