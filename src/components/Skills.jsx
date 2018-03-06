import React from 'react';
import HTML from '../images/html.png'
import Css from '../images/css.png';
import JS from '../images/js.png';
import Nodejs from '../images/node.png';
import react from '../images/react.png';
import postgres from '../images/postgres.png';
import sql from '../images/sql.png';
import git from '../images/git.png';
import github from '../images/github.png';

export default function Skills(){
    return(
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
    )
}