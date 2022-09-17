import React from 'react';
import Profile from './Profile/Profile' ;
import Footer from '/media/kaleesha/E/my-protofolio-react/src/PortfolioContainer/Home/Footer/Footer.js'
import './Home.css';
import About from '../AboutMe/About';
import Resume from '../Resume/Resume';

export default function Home() {
  return (
    <div className='home-container' >
        <Profile />
        <Footer />
    <About />
    <Resume />
    </div>
  )
}
