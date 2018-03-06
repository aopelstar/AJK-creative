import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Bio from './components/Bio';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './reset.css';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Skills />
        <Bio />
        <Project />
        <Contact />
        <Footer />


        
        
      </div>
    );
  }
}

export default App;
