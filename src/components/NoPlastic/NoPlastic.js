import React from 'react'
import "../bootstrap/bootstrap-grid.css"
import "./NoPlastic.css"
import foto10 from "./Bite-no-/Rectangle (15).png"

export default function NoPlastic() {
    return (
        <div className="no-pastic contaner">
        <h1>No plastic ever</h1>
        <h2>We’ve delivered millions of smiles without a single plastic tube entering a landfill.</h2>
           <div className="no-plastic-all">
               <div className="no-plastic-img">
                    <div className="no-pl-img1">
                       <img src={foto10} />
                    </div>
                    <div className="no-pl-img2">
                       <img src={foto10} />
                    </div>
                    <div className="no-pl-img3">
                       <img src={foto10} />
                    </div>
                    <button className="no-plastic-btn">Why this matters</button>
               </div>              
           </div>         
        </div>
    )
}
