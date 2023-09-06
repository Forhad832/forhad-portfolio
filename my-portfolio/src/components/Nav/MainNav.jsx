// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
    return (
        <div>
            <nav className='absolute  md:right-0  flex gap-8 justify-end bg-nav-blue w-fit mx-auto md:px-16 py-3 rounded-bl-3xl rounded-tr-xl text-xl'>
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