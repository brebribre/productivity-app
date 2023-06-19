import React from 'react';
import Timer from './Timer'
import Controls from './Controls'
import { useState, useEffect } from 'react';
import Todos from './Todos'
import Popup from './Popup'
import Head from 'next/head'
import Title from './Title'
import Image from 'next/image'

function App(){
    const [isOpen, setIsOpen] = useState(false);
    const [bg, setBg] = useState("sakura");
    const [url, setUrl] = useState("bg-[url('/images/bg1.jpeg')]")

    const getUrl = (bg:string) => {
      if(bg === "sakura"){
        return "bg-[url('/images/bg1.jpeg')]"
      }else if(bg === "sea"){
        return "bg-[url('/images/sea.jpg')]"
      }else if(bg === "forest"){
        return "bg-[url('/images/forest.jpg')]"
      }else{
        return "bg-[url('/images/bg1.jpeg')]"
      }
    }

    const getFromLocalStorage = () => {
      let value;
      // Get the value from local storage if it exists
      value = localStorage.getItem("settings") || "err"
      if(value !== "err"){
          console.log(value)
          let theme = JSON.parse(value).theme;
          setBg(theme);  
          setUrl(getUrl(theme))
          
      }else{
        console.log("empty")
      }
    }

    useEffect(() => {
      getFromLocalStorage();
    }, [])

    const changeBg = (bg:string) => {
      
      if(bg === "sakura"){
        setUrl("bg-[url('/images/bg1.jpeg')]")
      }else if(bg === "sea"){
        setUrl("bg-[url('/images/sea.jpg')]")
      }else if(bg === "forest"){
        setUrl("bg-[url('/images/forest.jpg')]")
      }

      setBg(bg);
    }

    

    const toggleSettings = (visible:boolean) => {
      setIsOpen(visible);
    }
    
    return (
    <div className={'bg-wrapper bg-no-repeat bg-center bg-fixed bg-cover ' + url}>
      <Head>
        <title>podoMore | Aesthetic Podomoro Timer</title>
        <link rel="shortcut icon" href="restart.svg" />
      </Head>
      <div className = "bg-black h-screen w-full bg-opacity-10 flex flex-col items-center justify-center pt-20">
        <Title/>
        <Timer />
        <Todos /> 
        <div className = "absolute top-5 right-5 " onClick = {() => toggleSettings(true)}>
          <Image src={'settings.svg'} className="hover:rotate-45 hover:scale-110 transform transition duration-300 md:w-10" alt="reset-button" width={30} height={30}/>
        </div>
        <Popup 
          isOpen = {isOpen} 
          setIsOpen = {toggleSettings} 
          setBg = {changeBg} 
          />
      </div>
    </div>
    )

    
}

export default App
