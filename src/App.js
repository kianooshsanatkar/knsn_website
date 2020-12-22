import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import './App.css'

import { Articles } from './components/sections/articles.component'
import { Bio } from './components/sections/bio.component'
import { Contact } from './components/sections/contact.component'
// import { Frameworks } from './components/sections/frameworks.component'
import { Experiences } from './components/sections/experiences.component'
import { Home } from './components/sections/home.component'
import { Services } from './components/sections/services.component'
import { Empty } from './components/sections/empty.component'
import { Header } from "./components/header/header.component"

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Container style={{ display: 'block', height: '50vh' }}>  </Container>
        <Grid container>
          <Grid item md={1}></Grid>
          <Grid item md={10}>
            <Empty />
            <Bio />
            <Empty />
            <Services />
            <Empty />
            <Experiences />
            <Empty />
            <Articles />
            <Empty />
            {/* <Frameworks /> */}
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
        <Grid container style={{ background: '#333' }}>
          <Grid item md={1}></Grid>
          <Grid item md={10}>
            <Empty half className='border-color-secondary' />
            <Contact />
            <Empty half className='border-color-secondary'/>
          </Grid>
          <Grid item md={1}></Grid>
        </Grid>
        {/* <Container style={{ display: 'block', height: '30vh' }}> </Container> */}
      </div>
    );
  }
}

export default App;
