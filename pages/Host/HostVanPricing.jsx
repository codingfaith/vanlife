import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const { currentVan } = useOutletContext()
    return (
        <p><span className="van-price">${currentVan.price}.00</span>/day</p>
    )
}