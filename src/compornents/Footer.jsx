import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <footer>
      <h2>洗濯表示チェッカー</h2>
      <p className='domain'>www.laundrychecker.com</p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li><Link to="/disclaimer">Disclaimer</Link></li>
        <li><Link to="/mail">Contact</Link></li>
      </ul>
      <p className='icon'>© 洗濯表示チェッカー 2023</p>
    </footer>
    </div>
  )
}

export default Footer