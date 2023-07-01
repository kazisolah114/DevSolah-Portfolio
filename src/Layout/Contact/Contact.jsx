import React from 'react';
import './Contact.css'
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaTwitterSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact-section' id="contact">
            <div className="contact container">
                <div className="contact-header">
                    <h2>Get In Touch</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>ADDRESS</h2>
                        <p>Mizmizi Madrasha Rd, Shiddhirganj, Narayanganj, Dhaka, Bangladesh</p>
                        <div>
                            <span><FaPhone></FaPhone></span>
                            <a href="tel:+8801790033329">+880 1790033329</a>
                        </div>
                        <div>
                            <span><FaMailBulk></FaMailBulk></span>
                            <a href="mailto:kazisolayman123@gmail.com">kazisolayman123@gmail.com</a>
                        </div>
                        <div className="contact-media">
                            <h2>FOLLOW ME</h2>
                            <ul>
                                <li><Link to="https://github.com/kazisolah114"><FaGithub></FaGithub></Link></li>
                                <li><Link to="https://www.facebook.com/km.solayman.lillie"><FaFacebook></FaFacebook></Link></li>
                                <li><Link to="https://www.linkedin.com/in/kazisolah114/"><FaLinkedin></FaLinkedin></Link></li>
                                <li><Link to="https://twitter.com/mu_solah114"><FaTwitterSquare></FaTwitterSquare></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h2>SEND ME A NOTE</h2>
                        <form action="">
                            <div>
                                <input type="text" placeholder='Name' />
                                <input type="email" placeholder='Email' />
                            </div>
                            <textarea name="" id="" cols="30" rows="8" placeholder='Tell me more about your needs'></textarea>
                            <input type="submit" className='main-button contact-btn' value="Send Message" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;