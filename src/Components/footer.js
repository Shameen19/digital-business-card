import React from "react";
import facebook from "../images/facebook.jpg";
import linkedin from "../images/lin.png";
import git from "../images/github.png";
import insta from "../images/download.png";
export default function Footer(){
    return(
        <footer>
            <div className="footer">
                <a className="link" href="https://www.facebook.com/shameen.shahid.3"><img src={facebook} 
                alt="facebook"
                className="fblogo"/></a> 

                <a className="link" href="https://www.linkedin.com/in/shameen-shahid-b349ab239/"><img src={linkedin} 
                alt="linkedin"
                className="linkedin"/></a> 

              <a className="link" href="https://github.com/shameen-hub"><img src={git} 
                alt="github"
                className="github"/></a> 


             <a className="link" href="https://www.instagram.com/shameen1475/"><img src={insta} 
                alt="insta"
                className="instagram"/></a> 
            
            </div>
        </footer>
    )
}