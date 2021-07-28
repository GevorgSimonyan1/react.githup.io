
import "./Slider.css"

export default function Slider(props) {
    const{state,rightGo,leftGo,movenment,likeThing,addThing,forAddBocks} = props
 const movenmen = movenment + "%"
return (  
            <div className="slidr">
            <div className="rig" onClick={rightGo}>right</div>
              <div className="slider" id="slider">
          
                     <div className="slider-blocks" style={{left:movenmen}}>
                     {
                       state.map((arr,index) => {
                             return (
                                 <div className="slid" id="slid" >
                                 <h1>{arr.category}</h1>
                                    <div className="slid-img" id="slid-img">
                                       <img src={arr.image} />
                                    </div>
                                    <h2>{arr.price} $</h2>
                                    <p className="">{arr.title} </p>
                                    <p className="desq">{arr.description}</p>
                                    <div className="btn-group" id="btn-group">
                                       <div className="like"   onClick={() => likeThing(arr)}  key={index} ><i class="fas fa-heart"></i></div>
                                       <button className="add"    onClick={() => addThing(arr)}  key={index} >Add</button>
                                      
                                    </div>
                                 </div>
                                
                             )
                         })
                     }
                     
                     </div>
                
              </div>
              <div className="lef" onClick={leftGo}>left</div>
        </div>
    )
}

