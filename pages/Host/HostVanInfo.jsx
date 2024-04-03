import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){
    const { currentVan } = useOutletContext()
    return (
        <>
            <p><span className="bold">Name: </span>{currentVan.name}</p><br />
            <span className="bold">Category: </span>{currentVan.type}<br /><br />
            <p><span className="bold">Description: </span>{currentVan.description}</p><br /> 
        </>
    )
}