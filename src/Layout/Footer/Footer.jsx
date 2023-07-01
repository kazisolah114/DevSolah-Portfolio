import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer container">
                <div className="footer-left">
                    <p>Copyright &copy; <a href="#">Dev Solah</a> All Rights Reserved.</p>
                </div>
                <div className="footer-right">
                    <ul>
                        <li><a href="#">Terms & Policy</a></li>
                        <li><a href="#">Disclaimer</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;