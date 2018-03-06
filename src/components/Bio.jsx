import React from 'react';
import me from '../images/me.jpg'


export default function Bio(){
    return(
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
    )
}