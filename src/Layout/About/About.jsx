import React from 'react';
import './About.css';
import resume from '../../../public/resume.pdf';

const About = () => {
    return (
        <div className='about-section' id="about">
            <div className="about container">
                <div className="about-header">
                    <h2>Know Me More</h2>
                </div>
                <div className="about-content">
                    <div className="about-main-content">
                        <div className="about-text">
                            <h4>I'm <span>Kazi Solayman,</span> a Jr. Web Developer</h4>
                            <p>As a versatile and skilled Frontend Web Developer with a strong familiarity with backend technologies, I possess a unique blend of expertise that enables me to create dynamic and interactive web experiences. With a solid foundation in HTML, CSS, and JavaScript, React JS, I am proficient in crafting visually appealing and user-friendly interfaces.</p>
                            <p>My experience extends beyond the frontend realm, as I am well-versed in backend technologies such as databases, server-side scripting, and APIs. This allows me to collaborate effectively with backend developers, enabling seamless integration between frontend and backend systems.</p>
                        </div>
                        <div className="about-info">
                            <ul>
                                <li><span>Name:</span> Kazi Solayman</li>
                                <li><span>Email:</span> kazisolayman123@gmail.com</li>
                                <li><span>Age:</span> 20</li>
                                <li><span>From:</span> Dhaka, Bangladesh</li>
                            </ul>
                            <a href={resume} download="Resume-Dev-Kazi.pdf" className='main-button download-resume'>Download Resume</a>
                        </div>
                    </div>
                    <div className="about-footer"></div>
                </div>
            </div>
        </div>
    );
};

export default About;