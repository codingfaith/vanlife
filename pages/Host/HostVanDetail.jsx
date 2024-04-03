import React from "react"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"

export default function HostVanDetail(){

    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    },[id])

    const activeStyles = {
        color: "#FF8C38",
        fontWeight: "bold",
        textDecoration: "underline"
    }
    
    return(
        <>
            {currentVan  ? 
            (<div className="host-van-body">
                <Link 
                    to=".." 
                    className="back"
                    relative="path">← Back to all vans</Link>
                <div className="flex"> 
                    <img src={currentVan.imageUrl} alt={`${currentVan.name} van`} className="host-currentVan"/>
                    <div className="details">
                        <span className={`van-type type ${currentVan.type}`}>{currentVan.type}</span><br /><br />
                        <p className="bold">{currentVan.name}</p>
                        <p><span className="van-price">${currentVan.price}</span>/day</p>
                    </div>
                </div>
                <nav className="details-host-nav">
                    <NavLink
                        to="."
                        end
                        style = {({isActive})=>isActive ? activeStyles: null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style = {({isActive})=>isActive ? activeStyles: null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style = {({isActive})=>isActive ? activeStyles: null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{currentVan}} />
            </div>): <h3>Loading...</h3>}
        </>
        
    )
}