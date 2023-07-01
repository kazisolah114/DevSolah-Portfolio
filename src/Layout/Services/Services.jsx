import React, { useEffect, useState } from 'react';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services-section' id="services">
            <div className="services container">
                <div className="services-header">
                    <h2>What I Do?</h2>
                </div>
                <div className="services-content">
                    <div className="service">
                        {
                            services.map(service => <div className='item' to={service.id}>
                                <img src={service.picture} alt="" />
                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    {/* <div className="service-button">
                    <button className='main-button'>Download Resume</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Services;