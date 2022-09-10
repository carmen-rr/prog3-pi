import React from 'react'
import { Link } from 'react-router-dom'

let objetoLiteral = {
    name: 'Titanic',
    id: 1
}

function Categories (){
    return (
        <>
        <h1>ALL ALBUMS</h1>
        <Link to={`/details/${objetoLiteral.id}`}>Un link a un contenido especifico</Link>
       </>
    )
} 

export default Categories