import React from 'react'
import './footer.scss'
import logo from "../../images/logoBlanc.png";

export default function Footer() {
  return (
    <>
    <footer>
        <div className='footer'>
            <div className='footer-img'>
            <img src={logo} className="footer-img_pic" alt="logo" />
            </div>
            <div className='footer-txt'>
                <p className='footer-txt_p'>
                © 2020 Kasa. All rights reserved

                </p>
                </div>
        </div>
    </footer>
    
    </>
  )
}
