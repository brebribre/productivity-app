import React from 'react';
import { useState, useEffect } from 'react';
import Controls from './Controls'


export default function Timer(){
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState("podomoro");
    
    const [pod, setPod] = useState(25);
    const [short, setShort] = useState(5);
    const [long, setLong] = useState(10);

    
    useEffect(() => {
        let value;
        // Get the value from local storage if it exists
        value = localStorage.getItem("settings") || "err"
        if(value !== "err"){
            console.log(value)
            let podomoroDef = Number(JSON.parse(value).podomoro);
            let shortDef = Number(JSON.parse(value).short);
            let longDef = Number(JSON.parse(value).long);
            setMinutes(podomoroDef)
            setPod(podomoroDef)
            setShort(shortDef)
            setLong(longDef)
        }else{
            console.log("empty")
        }
      }, [])



    const oneDigit = (num:Number) => {
        return num.toString().length === 1
    }

    const resetTimer = () => {
        console.log(mode)
        if(mode === 'podomoro'){
            setMinutes(pod);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'short break'){
            setMinutes(short);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'long break'){
            setMinutes(long);
            setSeconds(0);
            setIsActive(false);
        }
        
    }

    const playTimer = () => {
        setIsActive(!isActive);
    }

    const allZero = () => {
        return (seconds === 0 && minutes === 0 )
    }

    const changeMode = (mode:string) => {
        setMode(mode);
        if(mode === 'podomoro'){
            setMinutes(pod);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'short break'){
           
            setMinutes(short);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'long break'){
            setMinutes(long);
            setSeconds(0);
            setIsActive(false);
        }
    }


    useEffect(() => {
        let interval:any = null;

        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);

          if(allZero()){
            setIsActive(false);
          }

          if(seconds === -1){
            if(minutes > 0){
                setMinutes(minutes - 1);
                setSeconds(59);
            }
          }
        } 

        return () => clearInterval(interval);

      }, [isActive, seconds]);

    
    return (
    <div className = "md:w-2/3 xl:w-1/2">
        <div className = "w-80 mb-8 mt-12 gap-2 mx-auto grid grid-cols-3 text-center justify-center md:mb-4 text-sm xl:text-lg lg:w-2/3 xl:w-2/3 md:gap-2">
            <div className = {`border-2 px-2 py-2 rounded-3xl font-semibold transform transition duration-200 hover:bg-white hover:text-black ${mode==='podomoro' ? "bg-white text-black bg-opacity-60 border-0" : "bg-transparent"}`} 
                onClick = {() => {changeMode('podomoro')}}
            >
                podomoro
            </div>
            <div className = {`border-2 py-2 px-2 rounded-3xl font-semibold transform transition duration-200 hover:bg-white hover:text-black ${mode==='short break' ? "bg-white text-black bg-opacity-60 border-0" : "bg-transparent"}`} 
                onClick = {() => {changeMode('short break')}}
            >
                short break 
            </div>
            <div className = {`border-2 py-2 rounded-3xl font-semibold transform transition duration-200 hover:bg-white hover:text-black ${mode==='long break' ? "bg-white text-black bg-opacity-60 border-0" : "bg-transparent"}`} 
                onClick = {() => {changeMode('long break')}}
            >
                long break
            </div>
        </div>

        <div className = "w-80 justify-center mx-auto text-8xl grid grid-cols-11 md:my-4 md:text-9xl md:w-full ">
            <div className ="text-slate-100 font-bold font-orbitron text-right col-span-5">{oneDigit(minutes)? '0'+ minutes : minutes}</div>
            <div className ="text-slate-100 font-bold text-center col-span-1">:</div>
            <div className ="text-slate-100 font-bold font-orbitron text-left col-span-5">{oneDigit(seconds)? '0'+seconds : seconds}</div>
        </div>

        <Controls 
            onPlay = {() => playTimer()}
            onReset = {() => resetTimer()}
            isActive = {isActive}
        />
      
       
     
    </div>
    )

}

