import React from 'react';
import aboutImage from "../../assets/about/about.jpg";



function About() {
  return (

    <div class="w3-row w3-padding-64" id="about">
    <div class="w3-col m6 w3-padding-large w3-hide-small">

      <img src={aboutImage} class="w3-round w3-image w3-opacity-min align-right" alt="cover" width="600" height="500"  />
      </div>
      <div class="w3-col m6 w3-padding-large">
      <h1 class="w3-center">About</h1><br/>

      <p class="w3-center">Bianca Chami is a soon to be full stack developer. She is currently completing a certificate at the University of Toronto's Full Stack Developer bootcamp. You can follow her on github here: <a href="https://github.com/chamibia"> chamibia</a></p>
      </div>
      </div>



     


  )

}

export default About;





 