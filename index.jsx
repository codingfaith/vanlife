import React from "react"
import Vans from "./components/Vans"
import About from "./components/About"
import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Vans />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}
ReactDom.createRoot(document.getElementById('root')).render(<App />)