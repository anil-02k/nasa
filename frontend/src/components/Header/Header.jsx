import React from 'react'
import './Header.css'
import image1 from '../../assets/4089008.webp'
import image2 from '../../assets/5559374.webp'
import image3 from '../../assets/4089012.webp'

const Header = () => {
  return (
    <div  className="header">
      <span className='image1'><img src={image1}/></span>
      <span className='image2'><img src={image2}/></span>
      <span className='image3'><img src={image3}/></span>
      <div className='header_content'>
        <h1>See the amazing galaxy world</h1>
        <p className="header__description">
          Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated arterial trauma.
        </p>
        <div className="header__buttons">
          <button onClick={()=>window.location.href='https://celadon-khapse-e72a28.netlify.app/'} className="header__button header__button--learn">See Orrey</button>
        </div>
        <div className="header__stats">
          <div className="stat">
            <h2 className="stat__number">Millions +</h2>
            <span className="stat__label">Stars</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
