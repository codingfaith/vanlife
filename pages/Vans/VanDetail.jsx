import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"

export default function VanDetail(){

    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    const search = location.state ? location.state.search : ""
    const typeString = location.state.type ? location.state.type : "all"

    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    },[params])

    return  (
        <>
            {van ? 
            (<div className="van-body">
                <Link to={`/vans/${search}`} className="back">← Back to {typeString} vans </Link>
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