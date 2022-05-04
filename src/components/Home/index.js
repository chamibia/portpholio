import React from 'react'; 
import coverImage from "../../assets/cover/pyramids2.jpg";

export default function Home() {
    return(
        <section>
      <h1 className="introduction">WELCOME</h1>
      <div className="pyramid">
      <img src={coverImage} style={{width:"70%", height:"20%",   borderRadius: "10%"
}} alt="cover" />
      </div>
    </section>
    )
}