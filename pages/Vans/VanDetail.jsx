import React from "react"
import Nav from "../Nav/Header"
import Footer from "../Nav/Footer"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function VanDetail(){
    const params = useParams()
    const [van, setVan] = React.useState(null)
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params])
    return  (
        <>
            {van ? 
            (<div className="van-body">
                <Link to="/vans" className="back">← Back to all vans</Link>
                <img src={van.imageUrl} alt={`${van.name} van`} className="selectedVan"/>
                <span className={`van-type type ${van.type}`}>{van.type}</span><br /><br />
                <p className="van-name">{van.name}</p><br />
                <p><span className="van-price">${van.price}</span>/day</p><br />
                <p>{van.description}</p><br />
                <button className="rent-button">Rent this van</button>
            </div>): <h3>Loading...</h3>}
        </>
    )
}