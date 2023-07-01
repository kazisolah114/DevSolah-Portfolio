import React from 'react';
import './Banner.css'
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content container">
                <div className="banner-text">
                    <h5>Hey there, my name is</h5>
                    <h2>Kazi Solayman</h2>
                    <h4>
                    <TypeAnimation
                        sequence={[
                            "I'm a Front-end web developer", // Types 'One'
                            1000, // Waits 1s
                            "I build web applications with React", // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            "I'm a MERN Stack web developer", // Types 'Three' without deleting 'Two'
                            () => {
                                console.log();
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', color: "#D1D5DB", display: 'inline-block' }}
                    />
                    </h4>
                    <p>I'm a creative hardworking Jr. web developer. What excites me most about web development is the ever-evolving nature of the field. I thrive on staying up-to-date with the latest trends, technologies, and best practices.</p>
                    <a href="#contact" className='main-button'>Hire Me <span><FaArrowRight></FaArrowRight></span></a>
                </div>
                <div className="banner-image">
                    <img src="https://i.ibb.co/tM05w72/solah.jpg" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Banner;