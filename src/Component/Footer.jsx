import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text" style={{ padding: '1rem', background: '#f8f8f8', textAlign: 'center' }}>
      <p>&copy; 2024 My Job Portal. All rights reserved.</p>
      <p>
        Powered by{' '}
        <a href="https://github.com/Amrenderkumar" target="_blank" rel="noopener noreferrer">
          Amrender Kumar
        </a>
      </p>
      <p>
        <Link to={"/Privacypolicy"} > Privacy policy</Link> | <a href="/terms-of-service">Terms of Service</a>
      </p>
      <p>
        Contact Us: <a href="tel:+918571879674">+91-85718-79674</a> | <a href="tel:+912323769476">23237-69476</a>
      </p>
    </footer>
  )
}

export default Footer;
