import React from 'react';
import aboutImage from "../../assets/about/about.jpg";



function About() {
  return (

    <div className="w3-row w3-padding-64" id="about">
    <div className="w3-col m6 w3-padding-large w3-hide-small">

      <img src={aboutImage} className="w3-round w3-image w3-opacity-min align-right bianca" alt="cover" width="400" height="500" />
      </div>
      <div className="w3-col m6 w3-padding-large">
      <h1 className="w3-center changing">About</h1><br/>

      <p className="w3-center changing">Bianca Chami is a full stack developer based in Toronto. She recently completed a certificate at the University of Toronto's Full Stack Developer Bootcamp. She previously  held positions coordinating for nonprofit and creative environments. An innovative problem solver who is passionate about approaching programming and design challenges from different angles while learning and collaborating with others to create meaningful web applications. Bianca is a strong team collaborator, communicative, and enjoys building projects from ideation to execution. You can follow her on Github at: <a href="https://github.com/chamibia"> chamibia</a></p>
      </div>
      </div>



     


  )

}

export default About;





 