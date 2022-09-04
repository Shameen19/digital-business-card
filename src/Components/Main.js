import React from "react";
import email from "../images/emailme.jpg"

export default function Main(){
    return(
        <div className="container">
            <h1>Shameen Shahid</h1>
            <h3 >Web Developer</h3>
            <h4>Content Writer</h4>
            <div className="Email">
                <img src={email} 
                alt="email"
                className="emaillogo"/>
                <a className="link" href="https://mail.google.com/mail/u/0/#inbox">Email</a> 
                </div>
            <h2>About</h2>
            <p className="paragraph">Hi,Shameen HERE.I am a front-end web developer hailing from Islamabad, Pakistan.
            Currently enrolled in BSCS at COMSATS University.I am a Content Writer.</p>
            <h2>Interest</h2>
            <p className="paragraph">Hi,Shameen HERE.I am a front-end web developer hailing from Islamabad, Pakistan.
            Currently enrolled in BSCS at COMSATS University.I am a Content Writer.</p>
        </div>
    )
}