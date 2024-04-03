import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos(){
    const { currentVan } = useOutletContext()
    return (
        <div className=" flex photos">
            <img src={currentVan.imageUrl} alt={`${currentVan.name} van`} className="host-currentVan-img"/>
        </div>
        
    )
}