import React from "react"
import Header from "../pages/Nav/Header"
import Footer from "../pages/Nav/Footer"
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