import React from 'react'
import foto12 from "./Bite-better/Rectangle (17).png"
import foto13 from "./Bite-better/Restange (25).png"
import "./BiteBetter.css"

export default function BIteBetter() {
    return (
        <div className="bite-better">
            <div className="better">
            <img src={foto12}/>
            </div>
            <div className="Bite" id="bite">
            <h1>Better for your wallet, better for our planet</h1>
            <p>Our subscription is the most eco-friendly and affordable way to kick the tube.</p>
            <button>Get started</button>
            <h5>Save 38% — starting from $7.50 per month</h5> 
            </div>
            <div className="better">
               <img src={foto13} />
            </div>
        </div>
    )
}
