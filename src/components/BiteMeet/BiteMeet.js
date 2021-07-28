import React from 'react'
import"../bootstrap/bootstrap-grid.css"
import "./BiteMeet.css"
import foto1 from "../BiteMeet/Bite-meet/Rectangle (10).png"
import foto2 from "../BiteMeet/Bite-meet/Rectangle (11).png"
import foto3 from "../BiteMeet/Bite-meet/Rectangle (12).png"
import foto4 from "../BiteMeet/Bite-meet/Rectangle (22).png"


export default function BiteMeet() {

    return (
        <div className='bite-meet'>
            <div className="meet container">
                <h2> We make your daily routine more sustainable with products that are plastic-free, cruelty-free and made with clean ingredients.</h2>
                <div className="dannParagrafe">
                   <div className="lr">Plastic-free</div>
                   <div className="center">Clean ingredients</div>
                   <div className="lr">Cruelty-free</div>
                </div>
            </div>
            <div className="meet-blocks">
                <div className='meet-res container'>
                     <div className="meet-btn">
                        <p>Meet the future of oral care.</p>
                        <button>Get Start</button>
                    </div>
                   <div className="meet-left">
                   <img  src={foto4}/>
                        <div className="meet-fon">
                      
                           <div className='meet-aps'>
                             <h3>Toothpaste Bits</h3>
                             <p>From $7.50 / month</p>
                           </div>
                           
                        </div>
                    </div>
                   <div className="meet-center">
                        <div className='meet-aps'>
                            <h3>Mouthwash Bits</h3>
                            <p>From $5.00 / month</p>
                        </div>
          
                   </div>
                   <div className="meet-right">
                   <img  src={foto4}/>
                        <div className="meet-fon">
                        
                            <div className='meet-aps'>
                              <h3>Whitening Gel</h3>
                              <p>From $.00 / month</p>
                            </div>
                  
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
