import React from 'react';
import './App.css';
import BiteEasy from './components/BiteEasy/BiteEasy';
import BiteMeet from './components/BiteMeet/BiteMeet';
import Header from './components/Header/Header';
import Logos from './components/Logos/Logos';
import NoPlastic from './components/NoPlastic/NoPlastic';
import ShopBite from './components/ShopBite/ShopBite';
import Slider from './components/Slider/Slider';
import {useEffect,useState} from 'react'
import axios from 'axios';
import BIteBetter from './components/BIteBetter/BIteBetter';
import BiteFot from './components/BiteFot/BiteFot';
import BiteOne from './components/BIteOne/BiteOne';
import BiteHey from './components/BiteHey/BiteHey';
import Footer from "./components/Footer/Footer"
import LikeBlokss from './components/LikeBlokss/LikeBlokss';
import AddBlokss from './components/AddBlockss/AddBlockss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {

  const [state, setstate] = useState([])
  const [movenment, setMovement] = useState(0)
  const [Top, setTop] = useState(false)
  const [newState, setnewState] = useState([])
  const [likeState, setlekeState] = useState([])
  const [rig, setrig] = useState(false)
  const [rig2, setrig2] = useState(false)
  const [allPrice,setAllPrice] = useState(0)
  const [allPrice2,setAllPrice2] = useState(0)
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)

    useEffect(() => {
       axios.get("https://fakestoreapi.com/products").then((res) => {
           const response = res.data

           return[
               setstate(response)
           ]
           
       })
    }, [])

const rightGo = () => {
  if(movenment < 0 ){
    return setMovement(movenment + 100 )
  }if(movenment >= 0 ) {
    return setMovement(-1900 )
  }
}

const leftGo = () => {
  if(movenment > -1900 ){
    return setMovement(movenment - 100 )
  }else {
    return setMovement(0)
  }
}
function fortop(){
  setLef (false)
  setrig(false)
  setrig2(false)
  setTop(!Top)

 
}
function goTora(){
  setLef (false)
  setTop(false)

  setrig2(false)
   setrig(!rig)
  
   
  }
  function goTora2(){
    setLef (false)
    setTop(false)
    setrig(false)
  
     setrig2(!rig2)
    
     
    }
  function likeThing(even){
    
 
    setlekeState((id) => {
  
            let arr2 = [ ...likeState,
            ...state.filter(arrs => arrs.id === even.id)]
            return (arr2)
    })
    setCount2(count2 +1)
  
    setAllPrice(()=> {
      likeState.filter(shoes => shoes.price === even.price)
         return (
         
                 
        Math.floor(allPrice )  +   Math.floor(even.price)
         )
  })
  }

function addThing(even){
 
  setnewState((id) => {

          let arr = [ ...newState,
          ...state.filter(arrs => arrs.id === even.id)]
          return (arr)
  })
  setCount(count +1)
  setAllPrice2(()=> {
    newState.filter(shoes => shoes.price === even.price)
       return (
       
        Math.floor(allPrice2 )  +   Math.floor(even.price)
       )
})
}
function addThingLike(even){
 
  setnewState((id) => {

          let arr = [ ...newState,
          ...state.filter(arrs => arrs.id === even.id)]
          return (arr)
  })
  setCount(count +1)
  setAllPrice2(()=> {
    newState.filter(shoes => shoes.price === even.price)
       return (
       
        Math.floor(allPrice2 )  +   Math.floor(even.price)
       )
})
}
function addThingLikeOther(even){
 
  setnewState((id) => {

          let arr = [ ...newState,
          ...state.filter(arrs => arrs.id === even.id)]
          return (arr)
  })
  setCount(count +1)
  setAllPrice2(()=> {
    newState.filter(shoes => shoes.price === even.price)
       return (
       
        Math.floor(allPrice2 )  +   Math.floor(even.price)
       )
})
}

const [lef, setLef] = useState(false)
function burger1 (){
  setLef (!lef)
  setrig2(false)
  setrig(false)
  
}
function burger2 (){
  setLef (!lef)
  setrig2(false)
  setrig(false)
  
}

function burger3 (){
  setLef (!lef)
  setrig2(false)
  setrig(false)

  
}
    
function burgerGo (){
   setLef (!lef)
   setTop(false)
   setrig(false)
   setrig2(false)
}
function onDeleteAdd(even){
  let index =  newState.findIndex(() => newState.index === even.index);
  setnewState(() => {
    return ([
      ...newState.slice(0,index ),...newState.slice(index + 1),
      ])
      
  })
  setCount(count -1)
  setAllPrice2(()=> {
    newState.filter(shoes => shoes.price === even.price)
       return (
        
        Math.floor(allPrice2 )  -    Math.floor( newState[index].price)
       )
})


};
function onDeleteAddAllGo() {
  setrig(false)
}
function onDeleteAddAll(even){

  setnewState(() => {
    return ([
     
      ])
      
  })
  setCount(0)
  setAllPrice2(()=> {
    newState.filter(shoes => shoes.price === even.price)
       return (
        
        0
       )
})
onDeleteAddAllGo()

};
function onDeleteLikeAllGo() {
  setrig2(false)
  console.log("object2")
}
console.log("object")
function onDeleteLikeAll(even){

  setlekeState(() => {
    return ([
     
      ])
      
  })
  setCount2(0)
  setAllPrice(()=> {
    newState.filter(shoes => shoes.price === even.price)
       return (
        
        0
       )
})

onDeleteLikeAllGo()
};

function onDeleteLike(even){
  let index =  likeState.findIndex(() => likeState.index === even.index);
  setlekeState(() => {
    return ([
      ...likeState.slice(0,index),...likeState.slice(index + 1),
      ]);
  })
  setCount2(count2 - 1)
  setAllPrice(()=> {
    likeState.filter(shoes => shoes.price === even.price)
       return (
        Math.floor(allPrice )  -    Math.floor( likeState[index].price)
       )
})
  

};

  return (
    <div className="App">
       <Header onDeleteLikeAll={onDeleteLikeAll} onDeleteAddAll={onDeleteAddAll} burger1={burger1} burger2={burger2} burger3={burger3}  addThingLike={addThingLike} burgerGo={burgerGo} lef={lef}  count={count} count2={count2} allPrice={allPrice} allPrice2={allPrice2} onDeleteAdd={onDeleteAdd} onDeleteLike={onDeleteLike} Top={Top} fortop={fortop} newState={newState} goTora={goTora} rig={rig} goTora2={goTora2} rig2={rig2} likeState={likeState}/>
        <Route exact path="/like">
          <LikeBlokss onDeleteLikeAll={onDeleteLikeAll} addThingLikeOther={addThingLikeOther} allPrice={allPrice} count2={count2} onDeleteLike={onDeleteLike} likeState={likeState}  />
        </Route>
        <Route exact path="/add">
          <AddBlokss onDeleteAddAll={onDeleteAddAll} allPrice2={allPrice2} count={count} onDeleteAdd={onDeleteAdd}   newState={newState}/>
        </Route>
        <Route exact path="/">
          <Logos />
          <BiteMeet />
          <ShopBite />
          <NoPlastic />
          <BiteEasy />
          <Slider  state={state} leftGo={leftGo} rightGo={rightGo} movenment={movenment} addThing={addThing}  likeThing={likeThing} />
          <BIteBetter />
          <BiteFot />
          <BiteOne />
          <BiteHey />
        </Route>
      <Footer />
    </div>
  );
}

export default App;
