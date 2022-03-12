import React from 'react';
import coverImage from "../../assets/cover/pyramids2.jpg"


function About() {
  return (
    <section className="my-5">
      <h1 id="about">B Chami Portfolio</h1>
      <img src={coverImage} className="my-2" style={{width:"100%", height:"20%"}} alt="cover" />
    </section>
  );
}

export default About;