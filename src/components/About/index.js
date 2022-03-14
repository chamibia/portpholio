import React from 'react';
import aboutImage from "../../assets/about/about.jpg";



function About() {
  return (

    <div className="w3-row w3-padding-64" id="about">
    <div className="w3-col m6 w3-padding-large w3-hide-small">

      <img src={aboutImage} className="w3-round w3-image w3-opacity-min align-right bianca" alt="cover" width="600" height="500" />
      </div>
      <div className="w3-col m6 w3-padding-large">
      <h1 className="w3-center changing">About</h1><br/>

      <p className="w3-center changing">Bianca Chami is a soon to be full stack developer. She is currently completing a certificate at the University of Toronto's Full Stack Developer bootcamp. You can follow her on github here: <a href="https://github.com/chamibia"> chamibia</a></p>
      </div>
      </div>



     


  )

}

export default About;





 