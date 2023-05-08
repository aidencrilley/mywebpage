import React from 'react';
import Navbar from "./Navbar";
import meandmom from "./images/meandmom.jpg";

function About() {
  return (
    <div className="About">
      <Navbar />
      
        <h1>$ whoami</h1>
        <div className="container">
          <div className="image">
            <img src={meandmom} id="profpic" alt="Mom and I"/>
          </div>
          <div id="about">
          <blockquote>
            <p id="whoami">
              My name is Aiden Crilley and I am from Port Washington, New York. I am a senior computer science at the University of Delaware.
              Upon graduation I will be working as a software engineer.
              I am a huge New York Rangers fan and I enjoy watching baseball occassionally as well.
            </p>
          </blockquote>
          </div>
        </div>
     
    </div>
  );
}

export default About;
