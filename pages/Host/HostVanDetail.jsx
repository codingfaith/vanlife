import React from "react"
import { Link, useParams } from "react-router-dom"

export default function HostVanDetail(){

    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
        .then(res => res.json())
        .then(data => setCurrentVan(data.vans))
    },[id])
    
    return(
        <>
            {currentVan  ? 
            (<div className="host-van-body">
                <Link to="/host/vans" className="back">← Back to all vans</Link>
                <div className="flex"> 
                    <img src={currentVan.imageUrl} alt={`${currentVan.name} van`} className="host-currentVan"/>
                    <div className="details">
                        <span className={`van-type type ${currentVan.type}`}>{currentVan.type}</span><br /><br />
                        <p className="bold">{currentVan.name}</p>
                        <p><span className="van-price">${currentVan.price}</span>/day</p>
                    </div>
                </div>
                <p><span className="bold">Name: </span>{currentVan.name}</p><br />
                <span className="bold">Category: </span>{currentVan.type}<br /><br />
                <p><span className="bold">Description: </span>{currentVan.description}</p><br />
            </div>): <h3>Loading...</h3>}
        </>
        
    )
}