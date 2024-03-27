import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Nav(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline"
    }
    return (
        <div className="navbar">
            <Link to="/"className="logo">#VANLIFE</Link>
            <div className="navlinks">
                <NavLink 
                    to="/host"
                    style={({isActive})=>isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({isActive})=>isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    style={({isActive})=>isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
            </div>
        </div>
    )
}