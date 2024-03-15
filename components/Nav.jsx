import React from "react"
import { Link } from "react-router-dom"

export default function Nav(){
    return (
        <div className="navbar">
            <Link to="/">#VANLIFE</Link>
            <div className="navlinks">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </div>
    )
}