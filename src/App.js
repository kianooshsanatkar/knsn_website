import React from 'react'

import './App.css';

import Articles from './components/sections/articles.component';
import Bio from './components/sections/bio.component';
import Contact from './components/sections/contact.component';
import Contributes from './components/sections/contribute.component';
import Experiences from './components/sections/experiences.component';
import Home from './components/sections/home.component';
import Services from './components/sections/services.component';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Home />
        <Bio />
        <Services />
        <Experiences />
        <Articles />
        <Contributes />
        <Contact />
      </div>
    );
  }
}

export default App;
