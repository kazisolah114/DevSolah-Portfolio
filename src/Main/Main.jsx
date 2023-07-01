import React from 'react';
import Home from '../Layout/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import About from '../Layout/About/About';
import Services from '../Layout/Services/Services';
import Contact from '../Layout/Contact/Contact';
import Footer from '../Layout/Footer/Footer';
import Portfolio from '../Layout/Portfolio/Portfolio';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Services></Services>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;