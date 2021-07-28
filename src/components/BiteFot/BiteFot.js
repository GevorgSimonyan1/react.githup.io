import React,{useState} from 'react'
import "./BiteFot.css"
import "../bootstrap/bootstrap-grid.css"
import foto13 from "./Bite-fot/Rectangle (18).png"
import foto14 from "./Bite-fot/Rectangle (19).png"
import foto15 from "./Bite-fot/Rectangle (20).png"

export default function BiteFot() {
    const [state, setstate] = useState([
        {
         img:foto13,
         title:"Choose your flavor",
         about:"Choose from Fresh Mint or Activated Charcoal with Fresh Mint."
        },
        {
            img:foto14,
            title:"Get a refill every 4 months",
            about:"We send you fresh Bits every 4 months so you never run out of bits."
           },
           {
            img:foto15,
            title:"Pause or cancel anytime",
            about:"Going on vacation? You can adjust, postpone, or cancel your subscription at any time, hassle-free."
           },
    ])
    return (
        <div className="bite-fot container">

        {state.map((shop,index) =>{
            return (
            <div className="fot">
               <div className="fot-img">
                  <img src={shop.img} />
               </div>
               <h1>{shop.title}</h1>
               <p>{shop.about}</p>
            </div>
            )
        })}
           
        </div>
    )
}
