import React from 'react';

import './header.style.css'


export const Header = (params) => {

    return <div className='nav-menu'>
        <ul>
            {/* <li><a href="#section_me">Me</a></li> */}
            <li><a href="#section_about">About</a></li>
            <li><a href="#section_services">Services</a></li>
            <li><a href="#section_experiences">Experiences</a></li>
            {/* <li><a href="#section_article">Articles</a></li>
            <li><a href="#section_framework">Frameworks</a></li> */}
            <li><a href="#section_contact">Contact</a></li>
        </ul>
    </div>
    
}
