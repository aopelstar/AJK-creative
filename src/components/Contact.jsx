import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component{
    constructor(){
        super();
        this.state={
            name: "",
            email: "",
            subject: "",
            content: ""
        }
    }


    
    render(){
        return(
            <div className="contact-body">
            <div className="prelude">Thanks for visiting AndrewKeeleCreative.com!
            Please feel free to contact me.
            </div>
            <div>
            </div>
                Phone: 801-319-0708 | Email: Tantoprecords@gmail.com

            </div>
        )}
}