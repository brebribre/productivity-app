import React from 'react';
import { useState, useEffect } from 'react';
import Controls from './Controls'


export default function Timer(){
    const [minutes, setMinutes] = useState(15);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [mode, setMode] = useState("podomoro");
    

    const oneDigit = (num:Number) => {
        return num.toString().length === 1
    }

    const resetTimer = () => {
        console.log(mode)
        if(mode === 'podomoro'){
            setMinutes(25);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'short break'){
            setMinutes(5);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'long break'){
            setMinutes(10);
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
            setMinutes(25);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'short break'){
            setMinutes(5);
            setSeconds(0);
            setIsActive(false);
        }else if(mode === 'long break'){
            setMinutes(10);
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
    <div>
        <div className = "w-80 mb-8 gap-2 mx-auto grid grid-cols-3 text-center justify-center md:mb-4 text-sm md:text-lg md:w-full md:gap-2">
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

        <div className = "w-80 justify-center mx-auto text-7xl grid grid-cols-3 md:my-4 md:text-9xl md:w-96 ">
            <div className ="text-slate-100 font-bold font-orbitron text-right">{oneDigit(minutes)? '0'+ minutes : minutes}</div>
            <div className ="text-slate-100 font-bold text-center">:</div>
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

