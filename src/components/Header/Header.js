import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import "./Header.css"
import logo1 from "./BIte-header/Vector-header1.png"
import logo2 from "./BIte-header/Vector-header2.png"
import "../bootstrap/bootstrap-grid.css"

export default function Header(props) {
 
   
    const {onDeleteLikeAll,onDeleteAddAll,burger1,burger2,burger3,burgerGo,lef,fortop,Top,addThingLike,newState,rig2,goTora2,rig,goTora,likeState,onDeleteAdd,onDeleteLike,allPrice2,allPrice,count,count2} = props
    const leftRight = lef ? "0" :  "-330px"
    const topss = Top ? "90px" :"-200px"
    const goToRIght = rig ? "20px" : "-350px"
    const goToRIght2 = rig2 ? "20px" : "-350px"

    return (
        <div className="header">
            <div className="login" style={{top:topss }}>
               <input type="text" placeholder="login" />
               <input type="password" placeholder="password" />
               <button>Sing In</button>
            </div>
             <div className="addBlocks"  id="addddds"   style={{right:goToRIght}}>
             <strong>Add {allPrice2} $</strong>
             <button className="DelAll" onClick={onDeleteAddAll}>Delete All</button>
                {newState.map((item, index) => {
                    return (
                        <div className="item">
                        
                        <h1>{item.category}</h1>
                           <div className="item-img">
                               <img src={item.image} />
                           </div>
                           <p>{item.title} </p>
                           <h2>{item.price} $</h2>
                           <button className="shop-btn del del1" onClick={() => onDeleteAdd(item)} key={index}>X</button>       
                        </div>
                    )
                })}
             </div>
             <div className="likeBlocks" id="likkks"  style={{right:goToRIght2}} >
             <strong>Like {allPrice} $</strong>
             <button className="DelAll" onClick={onDeleteLikeAll}>Delete All</button>
                {likeState.map((item,index) => {
                    return (
                        <div className="item">
                      
                        <h1>{item.category}</h1>
                           <div className="item-img">
                               <img src={item.image} />
                           </div>
                           <p>{item.title} </p>
                           <h2>{item.price} $</h2>
                           <button id="plus"onClick={() => addThingLike(item)} key={index} >+</button>
                           <button className="shop-btn del del1" onClick={() => onDeleteLike(item)} key={index}>X</button>
                        </div>
                    )
                })}
             </div>
        <div className="likes"></div>
        <div className="add-homs"></div>
            <div className="container header-header">
               <div className="header-left">
                   <div className="burger" onClick={burgerGo}>
                      <div className='burger-top'></div>
                      <div className='burger-'></div>
                      <div className='burger-bottom'></div>
                   </div>
                   <ul className="dis-fl" style={{left: leftRight}}>
                      <li>
                          <Link onClick={burger1} exact  to="/">All</Link>
                      </li>
                      <li>
                          <Link onClick={burger2} exact  to="/like">Like product</Link>
                      </li>
                      <li>
                          <Link onClick={burger3} exact  to="/add">Shop Product</Link>
                      </li>
                   </ul>
               </div>
               <div  className="header-center">
                  <h1>Bite</h1>
               </div>
               <div  className="header-right">
                  <div className="carsina" >
                 
                     <img src={logo1} onClick={goTora} />
                     <small>{count}</small>
                  </div>
                  <div className="carsina " onClick={fortop} >
                     <img src={logo2} />
                  </div>
                  <div className="ico" onClick={goTora2} >
                  <i class="far fa-heart"></i>
                  <small>{count2}</small>
                  </div>
               </div> 
           </div>
           <div className="header-content">
               <h1>Toothpaste, reinvented</h1>
               <p>The only plastic-free and clean way to replace the paste you've used your whole life.</p>
               <button className="header-button">shop now</button>
           </div>
        </div>
    )
}
