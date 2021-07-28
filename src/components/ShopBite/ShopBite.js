import React from 'react'
import "../bootstrap/bootstrap-grid.css"
import "./ShopBiite.css"
import foto7 from "./Bite-shop/Rectangle (14).png"
import foto8 from "./Bite-shop/Rectangle (24).png"

export default function ShopBite() {
    return (
        <div className="shop-bite">
        <button className="shop-after"> Shop all products</button>
            <div className="shops">
               <div className="sh-left">
               <div className='sh-l-img'><img src={foto7} /></div>
               
                  <h3>Meet Lindsay and learn more about Bite</h3>
                  <button>learn more</button>
               </div>
               <div className="sh-right">
                  <div className="rig-img">
                     <img src={foto8}/>
                  </div>
                  <h3>"The Most Creative People in Business 2020"</h3>
                  <div className="shopsBlock">
                     <div className="sh-block all"></div>
                     <div className="sh-block"></div>
                     <div className="sh-block"></div>
                     <div className="sh-block"></div>
                     <div className="sh-block"></div>
                     <div className="sh-block"></div>
                     <div className="sh-block"></div>
                     <div className="sh-block"></div>
                  </div>
                  <p>Get started — from $7.50/month</p>
               </div>
            </div>
        </div>
    )
}
