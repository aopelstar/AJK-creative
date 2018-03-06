import React from 'react';
import homeImage from '../images/screenShots/home.png'
import splash from '../images/screenShots/splash.png';

export default function Project(){
    return(
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
                    <img src ={splash} className="project-image"/>
                    <img src ={homeImage} className="project-image"/>
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
                    <img src ={splash} className="project-image"/>
                    <img src ={homeImage} className="project-image"/>
                    </div>
                </div>
            </div>

        </div>
    )
}