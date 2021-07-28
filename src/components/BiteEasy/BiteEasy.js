import React from 'react'
import "../bootstrap/bootstrap-grid.css"
import "./BiteEasy.css"
import foto11 from "./BIte-easy/Rectangle (16).png"
export default function BiteEasy() {
    return (
        <div className="easy">
        <h3>HOW TO</h3>
        <div className="left">
          <h1>Easy asbite,{<br />}brush,smile  {<br />}repeat</h1>
          <p>Bite down on your Bit 
          {<br />}
          Brush with a wet toothbrush
          {<br />}
          Smile and watch it foam up like magic
          {<br />}
          Repeat twice a day, every day
          {<br />}
          Shop now</p>
        </div>
        <div className="right">
           <img src={foto11} />
        </div>
        </div>
    )
}
