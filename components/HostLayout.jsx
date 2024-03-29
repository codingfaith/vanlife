import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout(){
    const activeStyles = {
        color: "#FF8C38",
        fontWeight: "bold",
        textDecoration: "underline"
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                    to="/host"
                    end
                    style={({isActive})=>isActive ? activeStyles : null}
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/host/income"
                    style={({isActive})=>isActive ? activeStyles : null}
                >
                    Income
                </NavLink>
                <NavLink 
                    to="/host/vans"
                    style={({isActive})=>isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="/host/reviews"
                    style={({isActive})=>isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}