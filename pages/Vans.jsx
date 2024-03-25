import React from "react"
import Nav from "./Header"
import Footer from "./Footer"
import "../server"
import { Link } from "react-router-dom"

export default function Vans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])
  
    const vanElements = vans.map(van=>
        <div key={van.id} className="van">
            <Link 
                to={`/vans/${van.id}`}
                aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
            >
                <img src={van.imageUrl} alt={`${van.name} van`} className="vanImg"/>
                <p className="label"><span>{van.name}</span><span>${van.price}</span></p>
                <span className="pay">/day</span>
                <span className={`van-type type ${van.type}`}>{van.type}</span>
            </Link>
        </div>)
    return (
        <div className="vans-body">
            <h3>Explore our van options</h3>
            <div className="vansFilters">
                <button className="van-type">Simple</button>
                <button className="van-type">Luxury</button>
                <button className="van-type">Rugged</button>
                <span className="clear">Clear filters</span>
            </div>
            <div className="vansCont">
                { vanElements }
            </div>
        </div>
    )
}