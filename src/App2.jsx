/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import {Link} from 'react-scroll'

export default (params) => {
    return(
        <div>
            <nav>
                <Link activeClass="active" to="section3" spy={true} smooth={true} duration={1000}>About</Link>
            </nav>
            <section id='section1' style={{height:'100vh', backgroundColor:'darkcyan'}}><h1>Section 1</h1></section>
            <section id='section2' style={{height:'100vh', backgroundColor:'darkolivegreen'}}><h1>Section 2</h1></section>
            <section id='section3' style={{height:'100vh', backgroundColor:'darkorange'}}><h1>Section 3</h1></section>
            <section id='section4' style={{height:'100vh', backgroundColor:'darkgray'}}><h1>Section 4</h1></section>
        </div>
    );
}
