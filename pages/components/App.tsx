import React from 'react';
import Timer from './Timer'
import Controls from './Controls'
import { useState, useEffect } from 'react';
import Nav from './Nav'
import Todos from './Todos'
import Popup from './Popup'
import Head from 'next/head'

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
      <Head>
        <title>doMore.io | Aesthetic Podomoro Timer</title>
        <link rel="shortcut icon" href="restart.svg" />
      </Head>
      <div className = "bg-black h-screen w-full bg-opacity-10 flex flex-col items-center justify-center">
        <div className = "absolute text-center top-5 sm:left-5 sm:text-left ">
          <p className="text-3xl tracking-wide font-bold text-pink-800 italic">doMore.io</p>
          <p className ="text-slate-300 font-semibold text-sm">by Bryan Alvin</p>
        </div>
        <Timer />
        <Todos /> 
      </div>
    </div>
    )

    
}

export default App
