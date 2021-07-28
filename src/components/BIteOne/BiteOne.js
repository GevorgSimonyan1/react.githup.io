import React from 'react'
import "./BiteOne.css"
import "../bootstrap/bootstrap-grid.css"
import foto16 from "./Bite-one/Rectangle (21).png"

export default function BiteOne() {
    return (
        <div className="BiteOne container">
        <div className="bite-img">
            <img src={foto16}/>
        </div>
        <h1>One billion toothpaste tubes are thrown out each year </h1>
        <p>We want to end this plastic waste, give you a healthier smile, and build the world's most sustainable oral care company.</p>
        <h4>Sustainability at Bite</h4>
            
        </div>
    )
}
