import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Bio from './components/Bio';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollableAnchor, { goToTop, configureAnchors } from 'react-scrollable-anchor';
import HTML from './images/html.png'
import Css from './images/css.png';
import JS from './images/js.png';
import Nodejs from './images/node.png';
import react from './images/react.png';
import postgres from './images/postgres.png';
import sql from './images/sql.png';
import git from './images/git.png';
import github from './images/github.png';
import image from './images/Alta.jpg';
import me from './images/me.jpg'
import homeImage from './images/screenShots/home.png'
import splash from './images/screenShots/splash.png';
import Modal from 'react-modal';
import './reset.css';
import './App.css';

const customStyle = {
  content: {
    position: "absolute",
    left: "25%",
    height: "500px",
    width: "650px",
    margin: "0",
    padding: "0"
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModalHome = this.openModalHome.bind(this);
    this.closeModalHome = this.closeModalHome.bind(this);
    this.openModalTwitter = this.openModalTwitter.bind(this);
    this.closeModalTwitter = this.closeModalTwitter.bind(this);
    this.openModalTwitter2 = this.openModalTwitter2.bind(this);
    this.closeModalTwitter2 = this.closeModalTwitter2.bind(this);
  }

  componentWillMount(){
    configureAnchors({offset: -100 })
  }

  openModal(){
    this.setState({
      modalIsOpen:true
    })
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    })
  }

  openModalHome(){
    this.setState({
      modalHomeIsOpen:true
    })
  }

  closeModalHome(){
    this.setState({
      modalHomeIsOpen: false
    })
  }

  openModalTwitter(){
    this.setState({
      modalTwitterIsOpen:true
    })
  }

  closeModalTwitter(){
    this.setState({
      modalTwitterIsOpen: false
    })
  }

  openModalTwitter2(){
    this.setState({
      modalTwitter2IsOpen:true
    })
  }

  closeModalTwitter2(){
    this.setState({
      modalTwitter2IsOpen: false
    })
  }


  render() {
    return (
      <div className="App">
        <div className="header-body">
                <div className="header-home" onClick={goToTop}>
                    Andrew Keele
                </div>
                <div className="header-menu">
                    <ul className="ul-menu-items">
                     <li><a href='#section1'>Skills</a></li>
                    <li><a href='#section2'> Bio</a></li>
                        <li><a href='#section3'> Projects</a></li>
                        <li><a href='#section3'> Contact</a></li>
                    </ul>
                </div>

            </div>
            <div className="home-body">
        <img src={image} alt='typewrite' className="typewriter"/>
        <h1 className="myName">Andrew Keele</h1>
        <h2 className="byLine">Professional Web Developer</h2>
        </div>


          <ScrollableAnchor id={'section1'}>
            <div className="skills-body">
        <h2>Skills:</h2>
        <div className="skills-container">
            <div className="skill-icon"><img src={JS} alt="javascript"/></div>
            <div className="skill-icon"><img src={HTML} alt="HTML"/></div>
            <div className="skill-icon"><img src={Css} alt="CSS"/></div>
            <div className="skill-icon"><img src={Nodejs} alt="Node"/></div>
            <div className="skill-icon"><img src={react} alt="react"/></div>
            <div className="skill-icon"><img src={postgres} alt="postgres"/></div>
            <div className="skill-icon"><img src={sql} alt="SQL"/></div>
            <div className="skill-icon"><img src={git} alt="Git"/></div>
            <div className="skill-icon"><img src={github} alt="github"/></div>

        </div>

        </div>
            </ScrollableAnchor>
            
            <ScrollableAnchor id={'section2'}>
            <div className="bio-body">
        <h2>Bio</h2>
        <div className="bio-container">
        <div className="bio-image"><img src={me} className="bio-image-me"/></div>
        <div className="bio-desc">They say that charity 
        never faileth and neither do I.  I am a hard working
         professional, currently transitioning into web 
         development. I love problem solving and the pay 
         off involved with overcoming a complex problem. 
         I love photography, building/flying drones, and 
         creative writing</div> 
        </div>
        </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
        <div className="project-body">
            <h2>Projects</h2>
            <div className="project-container">
                <div className="timpview">
                    <h3>Timpview Events</h3>
                    <ul>
                        <li className="project-sub">A mobile first, fullstack web application</li>
                        <li>- Used React to create both functional and class components</li>
                        <li>- Created a server using Node that 
                            received calls from React
                            and queried the database</li>
                    </ul>
                    <div className="project-skills">
                    React | Javascript | PostgreSQL | Node
                    <br/>
                    <a href="http://TimpviewEvents.AndrewKeeleCreative.com">
                    TimpviewEvents.AndrewKeeleCreative.com</a>

                    </div>
                    <div className="project-images">
                    <img src ={splash} className="project-image" onClick={this.openModal}/>
                    <img src ={homeImage} className="project-image" onClick={this.openModalHome}/>
                    </div>
                </div>
                <div className="twitter">
                    <h3>TwitterBook</h3>
                    <ul>
                        <li className="project-sub">A full stack application
                        made with a team of devs</li>
                        <li>- Used NodeJS and Express to create server with RESTful endpoints</li>
                        <li>- Built shopping cart using Stripe and React</li>
                    </ul>
                    <div className="project-skills">
                    Redux | Stripe | PostgreSQL | Node
                    <br/>
                    <a href="http://TwitterBook.AndrewKeeleCreative.com">
                    TwitterBook.AndrewKeeleCreative.com</a>

                    </div>
                    <div className="project-images">
                    <img src ={splash} className="project-image" onClick={this.openModalTwitter}/>
                    <img src ={homeImage} className="project-image" onClick={this.openModalTwitter2}/>
                    </div>
                </div>
            </div>
            </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'section4'}>
            <div className="contact-body">
              <div className="prelude">Thank you for visiting AndrewKeeleCreative.com.
              Please contact me with questions or inquiries.
              
                <div>
                Phone: 801-319-0708 | Email: Tantoprecords@gmail.com
                </div>
              </div>

            </div>
            </ScrollableAnchor>
            <div className="footer-body">
        <div className="whatevs">
        AndrewKeeleCreative.com
        </div>
        </div>
            
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyle}>
        <img src={splash} className="modalImage"/>
        </Modal>
        <Modal isOpen={this.state.modalHomeIsOpen} onRequestClose={this.closeModalHome} style={customStyle}>
        <img src={homeImage} className="modalImage"/>
        </Modal>
        <Modal isOpen={this.state.modalTwitterIsOpen} onRequestClose={this.closeModalTwitter} style={customStyle}>
        <img src={splash} className="modalImage"/>
        </Modal>
        <Modal isOpen={this.state.modalTwitter2IsOpen} onRequestClose={this.closeModalTwitter2} style={customStyle}>
        <img src={homeImage} className="modalImage"/>
        </Modal>
        
      </div>
    );
  }
}

export default App;