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
    <div>
        <div className = "grid grid-cols-3 gap-4 text-center mb-4">
            <div className = {`border-2 py-1 rounded-xl font-semibold transform transition duration-200 hover:bg-white hover:text-black ${mode==='short' ? "bg-white text-black bg-opacity-60 border-0" : "bg-transparent"}`} 
                onClick = {() => {changeMode('short')}}
            >
                short
            </div>
            <div className = {`border-2 py-1 rounded-xl font-semibold transform transition duration-200 hover:bg-white hover:text-black ${mode==='medium' ? "bg-white text-black bg-opacity-60 border-0" : "bg-transparent"}`} 
                onClick = {() => {changeMode('medium')}}
            >
                medium
            </div>
            <div className = {`border-2 py-1 rounded-xl font-semibold transform transition duration-200 hover:bg-white hover:text-black ${mode==='long' ? "bg-white text-black bg-opacity-60 border-0" : "bg-transparent"}`} 
                onClick = {() => {changeMode('long')}}
            >
                long
            </div>
        </div>

        <div className = "w-80 grid grid-cols-3 lg:w-96 h-28 items-center bg-slate-200 bg-opacity-50 border-0 rounded-xl sm:w-80">
            <div className ="text-slate-100 text-6xl font-light text-right">{oneDigit(minutes)? '0'+ minutes : minutes}</div>
            <div className ="text-slate-100 text-6xl font-bold text-center">:</div>
            <div className ="text-slate-100 text-6xl font-light text-left">{oneDigit(seconds)? '0'+seconds : seconds}</div>
        </div>

        <Controls 
            onPlay = {() => playTimer()}
            onReset = {() => resetTimer()}
            isActive = {isActive}
        />
      
       
     
    </div>
    )

}

