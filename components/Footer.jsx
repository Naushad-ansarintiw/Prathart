import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023-2024 PRATHART All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      {/* <p style={{fontSize: 24}}>Made by Naushad ❤️</p> */}
    </div>
  )
}
export default Footer
