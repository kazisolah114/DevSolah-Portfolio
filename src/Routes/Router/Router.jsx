import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Main/Main';
import Home from '../../Layout/Home/Home/Home';
import About from '../../Layout/About/About';
import Services from '../../Layout/Services/Services';
import Contact from '../../Layout/Contact/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'about', 
                element: <About></About>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;