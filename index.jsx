import React from "react"
import ReactDom from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

function App(){
    return (
        <h1>Start here</h1>
    )
}
ReactDom.createRoot(document.getElementById('root')).render(<App />)