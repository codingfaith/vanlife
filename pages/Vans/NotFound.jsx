import React from "react"
import { Link } from "react-router-dom"

export default function NotFound(){
    return (
        <div className="not-found-body">
            <h1>Sorry, page not found :(</h1>
            <Link to="/" className="not-found">Return to home</Link>
        </div>
    )
}