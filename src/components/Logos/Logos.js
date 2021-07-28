import React,{useState} from 'react'
import logo1 from "./Bite-logos/Rectangle (1).png"
import logo2 from "./Bite-logos/Rectangle (2).png"
import logo3 from "./Bite-logos/Rectangle (3).png"
import logo4 from "./Bite-logos/Rectangle (4).png"
import logo5 from "./Bite-logos/Rectangle (5).png"
import logo6 from "./Bite-logos/Rectangle (6).png"
import logo7 from "./Bite-logos/Rectangle (7).png"
import logo8 from "./Bite-logos/Rectangle (8).png"
import logo9 from "./Bite-logos/Rectangle (9).png"
import "../bootstrap/bootstrap-grid.css"
import "./Logos.css"
export default function Logos() {
    const [images,setImages] = useState([logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9])
    return (
        <div className="logos">
           <div className="logo container">
              {images.map((img,index) => {
                  return(
                      <div className="logos-img">
                         <img src={img} /> 
                      </div>
                  )
              })}
           </div>    
        </div>
    )
}
