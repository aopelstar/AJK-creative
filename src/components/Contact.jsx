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

    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }

    submit(){
        let body = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            content: this.state.content
        }

        let promise = axios.get("http://localhost:3030/send")
        promise.then(() => {
            alert("Email Sent!")
        })
    }

    
    render(){
        return(
            <div className="contact-body">
            <div className="prelude">Thanks for visiting AndrewKeeleCreative.com!
            If you would like to contact me, please feel free to send
            and email and I'll get back to you as soon as possible!</div>
                <input id="name" type="text" onChange={(event) => this.handleChange("name", event.target.value)} placeholder="Name" />
                <input id="email" type="text" onChange={(event) => this.handleChange("email", event.target.value)} placeholder="Email" />
                <input id="subject" type="text" onChange={(event) => this.handleChange("subject", event.target.value)} placeholder="Subject" />
        <textarea id="content" cols="40" rows="5" onChange={(event) => this.handleChange("content", event.target.value)} placeholder="Content"></textarea>
        <button onClick={() => this.submit()}>Submit</button>
            </div>)
    }
}