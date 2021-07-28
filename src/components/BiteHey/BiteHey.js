import React,{useState} from 'react'
import "./BiteHey.css"
import "../bootstrap/bootstrap-grid.css"

export default function BiteHey() {
    const arr2 = [
        {
            title:"Easiest and most effective whitener I’ve tried",
            about:"My teeth are very prone to being yellow from medications, and the only whitening that would really do anything was Smile Sciences. This Bite..."
        },
        {
            title:"Easiest and most effective whitener I’ve tried",
            about:"My teeth are very prone to being yellow from medications, and the only whitening that would really do anything was Smile Sciences. This Bite..."
        },
        {
            title:"Easiest and most effective whitener I’ve tried",
            about:"My teeth are very prone to being yellow from medications, and the only whitening that would really do anything was Smile Sciences. This Bite..."
        },
    ]
    const [movenment, setMovement] = useState(0)
   

    //   setInterval(function(){ 
    //     if(movenment > -200 ){
       
    //       return setMovement(movenment - 100 )
    //     }else {
    //       return setMovement(0)
    //     };

    //      }, 2000);
      const movenmen = movenment + "%"
    return (
        <div className="BiteHey container">

             <div className="bite-text">
                 <h1>Hey. You make us smile, too!</h1>
                 <p>We believe in oral care products that are better for you, and the planet. Every product we make is thoughtfully formulated to keep you smiling bright.</p>
                 <button>See more reviews</button>
            </div>

            
            <div className="slid-arr2">


                    <div className="sllid"  style={{left:movenmen}}>
                            {
                                  arr2.map((arr,index) => {
                                      return(
                                          <div className="name-slid">
                                             <h1>{arr.title}</h1> 
                                             <p>{arr.about}</p>
                                          </div>
                                     )
                                })
                            }
                    </div>



            </div>
      
        </div>
    )
}
