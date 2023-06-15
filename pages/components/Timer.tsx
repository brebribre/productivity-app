import React from 'react';
import { useState, useEffect } from 'react';
import Controls from './Controls'


export default function Timer(){
    const [minutes, setMinutes] = useState(15);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState("short");


    const oneDigit = (num:Number) => {
        return num.toString().length === 1
    }

    const resetTimer = () => {
        if(mode === 'short'){
            setMinutes(15);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'medium'){
            setMinutes(25);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'long'){
            setMinutes(50);
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

        if(mode === 'short'){
            setMinutes(15);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'medium'){
            setMinutes(25);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'long'){
            setMinutes(50);
            setSeconds(0);
            setIsActive(false);
        }

        console.log(mode)
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
    <div className = "">
        <div className = "px-4 w-96 mx-auto grid grid-cols-3 gap-3 text-center justify-center mb-4 text-1xl md:text-2xl">
            <div className = {`border-2 py-2 rounded-xl font-semibold transform transition duration-200 hover:bg-white hover:text-black ${mode==='short' ? "bg-white text-black bg-opacity-60 border-0" : "bg-transparent"}`} 
                onClick = {() => {changeMode('short')}}
            >
                short
            </div>
            <div className = {`border-2 py-2 rounded-xl font-semibold transform transition duration-200 hover:bg-white hover:text-black ${mode==='medium' ? "bg-white text-black bg-opacity-60 border-0" : "bg-transparent"}`} 
                onClick = {() => {changeMode('medium')}}
            >
                medium 
            </div>
            <div className = {`border-2 py-2 rounded-xl font-semibold transform transition duration-200 hover:bg-white hover:text-black ${mode==='long' ? "bg-white text-black bg-opacity-60 border-0" : "bg-transparent"}`} 
                onClick = {() => {changeMode('long')}}
            >
                long
            </div>
        </div>

        <div className = "w-80 md:w-96 grid grid-cols-3 h-28 my-4 md:my-12 text-center mx-auto text-8xl md:text-9xl ">
            <div className ="text-slate-100 font-bold  font-orbitron">{oneDigit(minutes)? '0'+ minutes : minutes}</div>
            <div className ="text-slate-100 font-bold ">:</div>
            <div className ="text-slate-100 font-bold font-orbitron">{oneDigit(seconds)? '0'+seconds : seconds}</div>
        </div>

        <Controls 
            onPlay = {() => playTimer()}
            onReset = {() => resetTimer()}
            isActive = {isActive}
        />
      
       
     
    </div>
    )

}

