import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import ReactDom from "react-dom/client"
import Income from "./pages/Host/Income"
import Layout from "./components/Layout"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import Dashboard from "./pages/Host/Dashboard"
import VanDetail from "./pages/Vans/VanDetail"
import HostLayout from "./components/HostLayout"
import HostVanDetail from "./pages/Host/HostVanDetail"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import NotFound from "./pages/Vans/NotFound"
import "./server"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans/:id" element={<VanDetail />} />

                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="vans/:id" element={<HostVanDetail />}>
                            <Route index element={<HostVanInfo />} />
                            <Route path="pricing" element={<HostVanPricing />}/>
                            <Route path="photos" element={<HostVanPhotos />}/>
                        </Route>   
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
ReactDom.createRoot(document.getElementById('root')).render(<App />)