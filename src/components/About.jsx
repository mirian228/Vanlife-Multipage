import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <main className="about">
        <img src="./images/image552.png" className="about-image" alt="man on van"></img>
        <h2 className="about-heading">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="about-paragraph">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="about-box">
          <h3 className="about-box-heading">Your destination is waiting. Your van is ready.</h3>
          <Link to="/vans"className="about-box-button">Explore our vans</Link>
        </div>
      </main>
    </div>
  );
}
