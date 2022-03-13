import React from 'react'; 
import coverImage from "../../assets/cover/pyramids2.jpg";

export default function Home() {
    return(
        <section>
      <h1 className="introduction">Web developer with project coordination experience from a design and charity background. Earning a certificate in Full Stack Web Development from the University of Toronto Coding Boot Camp. Innovative problem solver who is passionate about approaching programming challenges from different angels and collaborating with others to create meaningful web applications. Strengths in creativity, teamwork, and building projects from ideation to execution.</h1>
      <div className="pyramid">
      <img src={coverImage} className="my-2" style={{width:"70%", height:"20%"}} alt="cover" />
      </div>
    </section>
    )
}