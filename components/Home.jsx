import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

export default function Home(){
    return (
        <div className="container">
            <Nav />
            <div className="homepage-body">
                <h3>You got the travel plans, we got the travel vans.</h3><br/>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p><br/>
                <button className="homepage-button">Find your van</button>
            </div>
            <Footer />
        </div>
    )
}