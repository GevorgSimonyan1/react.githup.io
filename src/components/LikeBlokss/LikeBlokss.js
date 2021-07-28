import React from 'react'
import "./LikeBlocks.css"
import "../bootstrap/bootstrap-grid.css"

export default function LikeBlokss(props) {

    const {likeState,onDeleteLike,count2,allPrice,addThingLikeOther,onDeleteLikeAll} = props
    return (
        <div className="Like-blocks container">
        <h1>All the products you like</h1>
        <h2> All add {allPrice} $</h2>
        <button className="DelAll" onClick={onDeleteLikeAll}>Delete All</button>
    
        <h2>{count2} </h2>
            {
                likeState.map((like,index) => {
                    return(
                        <div className="like">
                        <h1>{like.category}</h1>
                        <div className="like-img" id="like-img">
                           <img src={like.image} />
                        </div>
                        <h2>{like.price} $</h2>
                        <p >{like.title} </p>
                        <p>{like.description}</p>
                        <button className="like-btn" onClick={() => onDeleteLike(like)} key={index}>Delate</button>
                        <button id="plus"onClick={() => addThingLikeOther(like)} key={index} > .  Add  .</button>
                       
                        </div>
                    )
                }) 
            }
        </div>
    )
}
