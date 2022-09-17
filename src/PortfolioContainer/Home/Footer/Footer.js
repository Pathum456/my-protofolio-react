import React from 'react'
import './Footer.css';
import shapebg from './shapebg.png';
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
          <img 
          src={shapebg} 
          alt='no Internet Connection '></img>
        </div>
    </div>
  )
}
