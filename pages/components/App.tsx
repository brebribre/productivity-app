import React from 'react';
import Timer from './Timer'
import Controls from './Controls'
import { useState, useEffect } from 'react';
import Nav from './Nav'
import Todos from './Todos'
import Popup from './Popup'

function App(){
    const [bg, setBg] = useState("sakura");
    const [url, setUrl] = useState("bg-[url('/images/bg1.jpeg')]")

    const changeBg = (bg:string) => {
      if(bg === "sakura"){
        setUrl("bg-[url('/images/bg1.jpeg')]")
      }else if(bg === "sea"){
        setUrl("bg-[url('/images/sea.jpg')]")
      }else if(bg === "forest"){
        setUrl("bg-[url('/images/forest.jpg')]")
      }
      console.log(bg);
      setBg(bg);
    }
    
    return (
    <div className={'bg-wrapper bg-no-repeat bg-center bg-fixed bg-cover ' + url}>
      <div className = "bg-black h-screen w-full bg-opacity-20 flex flex-col items-center justify-center">

        <Timer />
        <Todos /> 
      </div>
    </div>
    )

    
}

export default App
