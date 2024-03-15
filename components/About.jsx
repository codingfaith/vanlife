import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

export default function About(){
    return (
        <div className="container">
            <Nav />
            <img src="../img/aboutbg.png" alt="van image" className="about-image"/>
            <Footer />
        </div>
    )
}