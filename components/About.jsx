import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

export default function About(){
    return (
        <div className="container">
            <Nav />
            <img src="../img/homebg.png" alt="van image" className="about-image"/>
            <div className="about-body">
                <h3>Don't squeeze in a sedan when you could relax in a van.</h3><br />
                <p>Our mission is to enliven your roadtrip with the perfect travel van rental. Our vans are recertified before each
                    trip to ensure your travel plans can go off without a hitch. (Hitch costs extra😉)
                </p><br />
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p><br />
                <div className="explore">
                    <h4>Your destination is waiting.</h4>
                    <h4>Your van is ready.</h4><br />
                    <button className="explore-button">Explore our vans</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}