import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import Host from "./pages/Host/Dashboard"
import ReactDom from "react-dom/client"
import Income from "./pages/Host/Income"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import VanDetail from "./pages/Vans/VanDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/host" element={<Dashboard />} />
                    <Route path="/vans/:id" element={<VanDetail />} />
                    <Route path="/host/income" element={<Income />} />
                    <Route path="/host/reviews" element={<Reviews />} />  
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
ReactDom.createRoot(document.getElementById('root')).render(<App />)