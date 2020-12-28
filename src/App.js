import React from 'react'
import Container from '@material-ui/core/Container'
import { elastic as Menu } from 'react-burger-menu'
import { Link, animateScroll as scroll } from 'react-scroll';

import './App.css'
import './components/burger-menu/burger-menu.style.css'

// import { Articles } from './components/sections/articles.component'
import { Bio } from './components/sections/bio.component'
import { Contact } from './components/sections/contact.component'
// import { Frameworks } from './components/sections/frameworks.component'
import { Experiences } from './components/sections/experiences.component'
import { Home } from './components/sections/home.component'
import { Services } from './components/sections/services.component'
import { Empty } from './components/sections/empty.component'

class App extends React.Component {

  render() {
    return (
      <div className="App" id="outer-container">
        <Menu right width='280px' pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <ul className='menu-item-container'>
            <li><div onClick={()=>scroll.scrollToTop()} >Home</div></li>
            <li><Link activeClass="active" spy={true} smooth={true} duration={1000} offset={-100} to="section_about">About</Link></li>
            <li><Link activeClass="active" spy={true} smooth={true} duration={1000} offset={-100} to="section_services">Services</Link></li>
            <li><Link activeClass="active" spy={true} smooth={true} duration={1000} offset={-100} to="section_experiences">Experiences</Link></li>
            <li><Link activeClass="active" spy={true} smooth={true} duration={1000} offset={10} to="section_contact">Contact</Link></li>
          </ul>
        </Menu>
        <div id='page-wrap'>
          <Home sectionId='section_home' />
          <Container style={{ display: 'block', height: '50vh' }}>  </Container>
          <Empty />
          <Bio sectionId='section_about' />
          <Services sectionId='section_services' />
          <Experiences sectionId='section_experiences' />
          <Contact sectionId='section_contact' />
        </div>
      </div >
    );
  }
}

export default App;
