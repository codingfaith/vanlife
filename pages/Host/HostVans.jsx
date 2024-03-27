import React from "react"
import "../../server2"

export default function Van(){
    const [vans, setVans] = React.useState([])
    
    React.useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[])

    const vanElements = vans.map(van =>
        <div className="host-van" key={van.name}>
            <img src={van.imageUrl} className="thumbnail" alt={`${van.name} image`}/>
            <div className="host-van-text">
                <h4>{van.name}</h4>
                <p className="price">${van.price}/day</p>
            </div>
        </div> 
        
    )
    return (
        <div className="hostVan-body">
            { vanElements }
        </div>
    )
}