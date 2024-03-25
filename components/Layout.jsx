import React from "react"
import Header from "../pages/Header"
import Footer from "../pages/Footer"
import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
        <div className="container">
            <Header />
            <Outlet />
            <Footer />
        </div>
        
    )
}