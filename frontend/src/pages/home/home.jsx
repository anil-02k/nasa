import React from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import AppDownload from '../../components/AppDownload/AppDownload'
import AmazingUpdate from '../../components/AmazingUpdate/AmazingUpdate'
import Space from '../../components/Space/Space'
import ExploreUniverse from '../../components/ExploreUniverse/ExploreUniverse'
import Scroller from '../../components/Scroller/Scroller'
import Experience from '../../components/Experience/Experience'

const home = () => {
  return (
    <div>
      <Header />
      <Experience/>
      <Scroller/>
      <ExploreUniverse/>
      <Space/>
      <AmazingUpdate/>
      <AppDownload/>
    </div>
  )
}

export default home
