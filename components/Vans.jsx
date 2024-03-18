import React from "react"
import Nav from "./Nav"
import "../server"

export default function Vans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])

    return (
        <div className="container">
            <Nav />
            <h3>Explore our van options</h3>
            <div className="vansFilters">
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <span className="clear">Clear filters</span>
            </div>
            <div className="vansCont">
                <div className="van">
                    {
                        vans.map(van=>van.name)
                    }
                </div>
            </div>
        </div>
    )
}