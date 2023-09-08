// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <div>
            <nav className='fixed bottom-0 left-0 md:left-auto z-10 md:absolute md:right-0 md:top-0 md:bottom-auto  flex gap-8 justify-evenly md:justify-end bg-nav-blue md:w-fit mx-auto px-0 md:px-16 py-3 rounded-tl-xl md:rounded-tl-none rounded-tr-xl md:rounded-tr-none md:rounded-bl-3xl w-full text-sm md:text-lg'>
                <Link to="/">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default MainNav;