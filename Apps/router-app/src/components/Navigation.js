import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';


const Navigation = () => {
    return(
        <BrowserRouter>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </BrowserRouter>
    );
};

export default Navigation;