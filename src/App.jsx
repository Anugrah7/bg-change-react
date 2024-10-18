import { useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  const[background,setBackground] = useState('#ffffff');

  const randomcolor = ()=>{
    const letter = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
      color += letter[Math.floor(Math.random()*16)];
    }
    console.log(color);
    return color
    
  }

  const changeBg = ()=>{
    setBackground(randomcolor())
  }

  return (
    <>
     <div  className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: `${background}`}}>
            <button  onClick={changeBg} className="p-3  rounded mainButton">Click Here</button>
        </div>
    </>
  )
}

export default App
