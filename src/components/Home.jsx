import React from 'react';
import image from '../images/Alta.jpg';

export default function Home(){
    return(
        <div className="home-body">
        <img src={image} alt='typewrite' className="typewriter"/>
        <h1 className="myName">Andrew Keele</h1>
        <h2 className="byLine">Professional We Developer</h2>
        </div>
    )
}