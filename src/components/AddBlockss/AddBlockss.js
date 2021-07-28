import React from 'react'
import "./AddBlockss.css"
import "../bootstrap/bootstrap-grid.css"

export default function AddBlokss(props) {

    const {newState,onDeleteAddAll,onDeleteAdd,count,allPrice2} = props
    return (
        <div className="add-blocks container">
        <h1>All the products you buy</h1>
        <h2> All add {allPrice2} $</h2>
        <button className="DelAll" onClick={onDeleteAddAll}>Delete All</button>

    
        <h2>{count} </h2>
            {
                newState.map((add,index) => {
                    return(
                        <div className="add">
                        <h1>{add.category}</h1>
                        <div className="add-img" id="add-img">
                           <img src={add.image} />
                        </div>
                        <h2>{add.price} $</h2>
                        <p >{add.title} </p>
                        <p>{add.description}</p>
                        <button className="add-btn" onClick={() => onDeleteAdd(add)} key={index}>Delate</button>
                    
                       
                        </div>
                    )
                }) 
            }
        </div>
    )
}