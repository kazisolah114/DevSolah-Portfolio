import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import './Portfolio.css'
import projectsData from './../../../public/projects.json';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


const Portfolio = () => {
    const [selectedTab, setSelectedTab] = useState('allProjects')
    const [showAll, setShowAll] = useState(false)


    return (
        <div className='portfolio-section' id="portfolio">
            <div className="portfolio container">
                <div className="portfolio-header">
                    <h2>Portfolio</h2>
                </div>
                <Tabs className="project-tabs">
                    <TabList className="tabs">
                        <Tab onClick={() => setSelectedTab('allProjects')}>All Projects</Tab>
                        <Tab onClick={() => setSelectedTab('htmlCssProjects')}>HTML & CSS</Tab>
                        <Tab onClick={() => setSelectedTab('javascriptProjects')}>JavaScript</Tab>
                        <Tab onClick={() => setSelectedTab('reactJsProjects')}>ReactJS</Tab>
                        <Tab onClick={() => setSelectedTab('mernStackProjects')}>MERN Stack</Tab>
                    </TabList>

                    {showAll == true ?
                        <TabPanel className="main-tab">
                            <div className="tab-items">
                                {projectsData[selectedTab].map(project => (
                                    <div className='tab-panel' key={project.title}>
                                        <div>
                                            <img src={project.image} alt="" />
                                        </div>
                                        <div className='tabs-content'>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <ul>
                                                {project.tags.map(tag => (
                                                    <li key={tag}>{tag}</li>
                                                ))}
                                            </ul>
                                            <div className='website-links'>
                                                <ul>
                                                    {project.links.map((link, index) => (
                                                        <li key={index}>
                                                            {link.client_link && <a href={link.client_link}>Client <FaGithub className='live-icon'></FaGithub></a>}
                                                            {link.server_link && <a href={link.server_link}>Server <FaGithub className='live-icon'></FaGithub></a>}
                                                            {link.live_link && <a href={link.live_link}>Live <FaExternalLinkAlt className='live-icon'></FaExternalLinkAlt></a>}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </TabPanel>
                        :
                        <TabPanel className="main-tab">
                            <div className="tab-items">
                                {projectsData[selectedTab].slice(0, 5).map(project => (
                                    <div className='tab-panel' key={project.title}>
                                        <div>
                                            <img src={project.image} alt="" />
                                        </div>
                                        <div>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <ul>
                                                {project.tags.map(tag => (
                                                    <li key={tag}>{tag}</li>
                                                ))}
                                            </ul>
                                            <div className='website-links'>
                                                <ul>
                                                    {project.links.map((link, index) => (
                                                        <li key={index}>
                                                            {link.client_link && <a href={link.client_link}>Client <FaGithub className='live-icon'></FaGithub></a>}
                                                            {link.server_link && <a href={link.server_link}>Server <FaGithub className='live-icon'></FaGithub></a>}
                                                            {link.live_link && <a href={link.live_link}>Live <FaExternalLinkAlt className='live-icon'></FaExternalLinkAlt></a>}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="show-more-btn">
                                    <button onClick={() => setShowAll(!showAll)}>Show More</button>
                                </div>
                            </div>
                        </TabPanel>
                    }
                    <TabPanel>
                        <div className="tab-items">
                            {projectsData[selectedTab].map(project => (
                                <div className='tab-panel' key={project.title}>
                                    <div>
                                        <img src={project.image} alt="" />
                                    </div>
                                    <div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <ul>
                                            {project.tags.map(tag => (
                                                <li key={tag}>{tag}</li>
                                            ))}
                                        </ul>
                                        <div className='website-links'>
                                            <ul>
                                                {project.links.map((link, index) => (
                                                    <li key={index}>
                                                        {link.client_link && <a href={link.client_link}>Client <FaGithub className='live-icon'></FaGithub></a>}
                                                        {link.server_link && <a href={link.server_link}>Server <FaGithub className='live-icon'></FaGithub></a>}
                                                        {link.live_link && <a href={link.live_link}>Live <FaExternalLinkAlt className='live-icon'></FaExternalLinkAlt></a>}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-items">
                            {projectsData[selectedTab].map(project => (
                                <div className='tab-panel' key={project.title}>
                                    <div>
                                        <img src={project.image} alt="" />
                                    </div>
                                    <div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <ul>
                                            {project.tags.map(tag => (
                                                <li key={tag}>{tag}</li>
                                            ))}
                                        </ul>
                                        <div className='website-links'>
                                            <ul>
                                                {project.links.map((link, index) => (
                                                    <li key={index}>
                                                        {link.client_link && <a href={link.client_link}>Client <FaGithub className='live-icon'></FaGithub></a>}
                                                        {link.server_link && <a href={link.server_link}>Server <FaGithub className='live-icon'></FaGithub></a>}
                                                        {link.live_link && <a href={link.live_link}>Live <FaExternalLinkAlt className='live-icon'></FaExternalLinkAlt></a>}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-items">
                            {projectsData[selectedTab].map(project => (
                                <div className='tab-panel' key={project.title}>
                                    <div>
                                        <img src={project.image} alt="" />
                                    </div>
                                    <div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <ul>
                                            {project.tags.map(tag => (
                                                <li key={tag}>{tag}</li>
                                            ))}
                                        </ul>
                                        <div className='website-links'>
                                            <ul>
                                                {project.links.map((link, index) => (
                                                    <li key={index}>
                                                        {link.client_link && <a href={link.client_link}>Client <FaGithub className='live-icon'></FaGithub></a>}
                                                        {link.server_link && <a href={link.server_link}>Server <FaGithub className='live-icon'></FaGithub></a>}
                                                        {link.live_link && <a href={link.live_link}>Live <FaExternalLinkAlt className='live-icon'></FaExternalLinkAlt></a>}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-items">
                            {projectsData[selectedTab].map(project => (
                                <div className='tab-panel' key={project.title}>
                                    <div>
                                        <img src={project.image} alt="" />
                                    </div>
                                    <div>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <ul>
                                            {project.tags.map(tag => (
                                                <li key={tag}>{tag}</li>
                                            ))}
                                        </ul>
                                        <div className='website-links'>
                                            <ul>
                                                {project.links.map((link, index) => (
                                                    <li key={index}>
                                                        {link.client_link && <a href={link.client_link}>Client <FaGithub className='live-icon'></FaGithub></a>}
                                                        {link.server_link && <a href={link.server_link}>Server <FaGithub className='live-icon'></FaGithub></a>}
                                                        {link.live_link && <a href={link.live_link}>Live <FaExternalLinkAlt className='live-icon'></FaExternalLinkAlt></a>}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Portfolio;