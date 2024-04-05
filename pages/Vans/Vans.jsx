import React from "react"
import { getVans } from "../../api"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans(){
    const [vans, setVans] = React.useState([])
    const [searchParams,setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    React.useEffect(() => {
       async function loadVans(){
            const data = await getVans()
            setVans(data)
       }
       loadVans()
    },[])
  
    // console.log(getVans)
    const filteredVans = typeFilter 
        ? vans.filter(van => van.type.toLowerCase() === typeFilter)
        : vans

    const vanElements = filteredVans.map(van=>
        <div key={van.id} className="van">
            <Link 
                to={`${van.id}`}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
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
                <Link
                    to="?type=simple"
                    className={`van-type simple-type type ${typeFilter === "simple" ? typeFilter:""}`}>Simple</Link>
                <Link
                    to="?type=luxury"
                    className={`van-type luxury-type type ${typeFilter === "luxury" ? typeFilter:""}`}>Luxury</Link>
                <Link
                    to="?type=rugged"
                    className={`van-type rugged-type type ${typeFilter === "rugged" ? typeFilter:""}`}>Rugged</Link>
                <Link
                    to="."className="clear">Clear filters</Link>
            </div>
            <div className="vansCont">
                { vanElements }
            </div>
        </div>
    )
}

{/* <button onClick={()=>{setSearchParams(type:"simple")}}>Simple</button> */}