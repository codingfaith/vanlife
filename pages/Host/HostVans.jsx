import React from "react"
import "../../server"
import { NavLink } from "react-router-dom"

export default function Van(){
    const [vans, setVans] = React.useState([])
    
    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])

    const vanElements = vans.map(van =>
        <NavLink to={`/host/vans/${van.id}`} key={`${van.id}`} className="host-van-link">
            <div className="host-van">
                <img src={van.imageUrl} className="thumbnail" alt={`${van.name} image`}/>
                <div className="host-van-text">
                    <h4>{van.name}</h4>
                    <p className="price">${van.price}/day</p>
                </div>
            </div> 
        </NavLink>
    )
    return (
        <div className="hostVan-body">
            { vanElements }
        </div>
    )
}