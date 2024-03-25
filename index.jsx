import React from "react"
import Home from "./pages/Home"
import Vans from "./pages/Vans"
import About from "./pages/About"
import ReactDom from "react-dom/client"
import VanDetail from "./pages/VanDetail"
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VanDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
ReactDom.createRoot(document.getElementById('root')).render(<App />)