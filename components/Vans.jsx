import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"
import "../server"

export default function Vans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])
  
    const vanElements = vans.map(van=>
        <div key={van.id} className="van">
            <img src={van.imageUrl} alt={`van ${van.id}`} className="vanImg"/>
            <p className="label"><span>{van.name}</span><span>${van.price}</span></p>
            <span className="pay">/day</span>
            <span className="van-type type" style={{background:van.type === "simple" ? "#E17654" : (van.type === "rugged" ? "#115E59" : "#161616") }}>{van.type}</span>
        </div>)
    return (
        <div className="container">
            <Nav />
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
            <Footer/>  
        </div>
    )
}