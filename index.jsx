import React from "react"
import Home from "./components/Home"
import Vans from "./components/Vans"
import About from "./components/About"
import ReactDom from "react-dom/client"
import VanDetail from "./components/VanDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VanDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
ReactDom.createRoot(document.getElementById('root')).render(<App />)