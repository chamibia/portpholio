import React from 'react';
import aboutImage from "../../assets/about/about.jpg";



function About() {
  return (
    <div>
      <h1 id="about">B CHAMI</h1>
      <div>
      <img src={aboutImage} className="my-2" style={{width:"100%", height:"20%"}} alt="cover" />
      </div>
      <p> Bianca Chami is a soon to be full stack developer. She is currently completing a certificate at the University of Toronto's Full Stack Developer bootcamp. You can follow her on github here: <a href="https://github.com/chamibia"> chamibia</a></p>

    </div>
  )

}

export default About;





 