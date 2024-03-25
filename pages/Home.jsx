import React from "react"
import Header from "./Nav/Header"
import Footer from "./Nav/Footer"
import { Link } from "react-router-dom"

export default function Home(){
    return (
        <div className="homepage-body">
            <h3>You got the travel plans, we got the travel vans.</h3><br/>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p><br/>
            <Link to="/vans" className="homepage-button">Find your van</Link>
        </div>

    )
}