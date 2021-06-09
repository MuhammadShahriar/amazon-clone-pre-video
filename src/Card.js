import React from 'react'
import './Card.css'

function Card({img, title}) {
    return (
        <div className = "card">
            <h2>{title}</h2>
            <img 
                src = {img}
                alt = ""
            />

        </div>
    )
}

export default Card
