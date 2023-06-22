import React from 'react'
import Nav from './Nav'
import Option from './Option'
import { useState, useEffect } from 'react';
interface Settings {
    podomoro: number;
    short: number;
    long: number;
    theme: string;
}

export default function Popup(props:any){
    const defaultSetting = {
        podomoro:15,
        short:10,
        long:5,
        theme:"sakura"
    }
    useEffect(() => {
        let value;
        // Get the value from local storage if it exists
        value = localStorage.getItem("settings") || "err"
        if(value !== "err"){
            setSetting(JSON.parse(value));
        }else{
          console.log("empty")
       
        }
    }, [])

    const [setting, setSetting] = useState<Settings>(defaultSetting);
    const [displayWarning, setDisplayWarning] = useState(false);

    const getFromLocalStorage = () => {
        let value;
        // Get the value from local storage if it exists
        value = localStorage.getItem("settings") || "err"
        if(value !== "err"){
            return value;    
        }else{
          console.log("empty")
        }
      }

    const addToLocalStorage =  (settings:Settings) => {
        localStorage.setItem('settings', JSON.stringify(settings));
        console.log(getFromLocalStorage())
    }

    
    const timerChange = (type:string, value:number) => {
        if(!isNaN(value) && Number(value) <= 120 && Number(value) >= 0){
            const tmp = setting;
            console.log(tmp)
            if(type === 'podomoro'){
                tmp.podomoro = Number(value)
                
            }
            else if(type === 'short'){
                tmp.short = Number(value)
            }
            else if(type === 'long'){
                tmp.long = Number(value)
            }

            setSetting(tmp);
            setDisplayWarning(false)
        }else{
            console.log("invalid number")
            setDisplayWarning(true)
        }
        
    }

    const themeChange = (theme:string) => {
        const tmp = setting;
        tmp.theme = theme;
        console.log("tmp:" + tmp)
        addToLocalStorage(setting)
    }

    const resetSettings = () => {
        localStorage.clear();
        window.location.reload();
    }

    const closePopup = () => {
        props.setIsOpen(false);
        addToLocalStorage(setting)
        window.location.reload();
    }


    return (
        <div className = {`absolute top-40 bg-gray-900 rounded-3xl h-2/3 w-80 sm:w-2/3 md:h-2/3 lg:w-1/3 ${props.isOpen ? "block" : "hidden"}`}>
            <div className="bg-wrapper-2 bg-black opacity-50">
            </div>
            <div className = "grid grid-cols-12">
                <div className = "col-span-4 z-20">
                    <div className = "grid grid-rows-3 gap-4 mt-5 ml-8 mr-3 py-2">
                        <p className = "pb-2 font-bold border-b-2">General</p>
               
                    </div>
                </div>

                <div className = "col-span-8 mt-5 mx-8 z-20 py-2">
                    <p className = "pb-2 font-bold">Select theme</p>
                   
                    <select name="Choose Sound" className = "border-2 px-2 text-center mb-2 text-sm py-1 rounded-2xl font-semibold transform transition duration-200 hover:bg-white hover:text-black bg-transparent" onChange = {e => themeChange(e.target.value)}>
                        <option value="sakura">Sakura</option>
                        <option value="sea">Sea</option>
                        <option value="forest">Forest</option>
                    </select>
                  

                    <p className = "pb-2 font-bold mt-5">Timer </p>
                    <div className = "grid grid-cols-3 gap-2">       
                        <p className = "mb-1 ml-1 text-gray-400 font-light text-sm">pod</p>
                        <p className = "mb-1 ml-1 text-gray-400 font-light text-sm">short </p>
                        <p className = "mb-1 ml-1 text-gray-400 font-light text-sm">long </p>
                    </div>
                    <div className = "grid grid-cols-3 gap-2">       
                        <input  className = "rounded-md bg-gray-800 px-2 py-1 font-bold" maxLength ={2} type="number"  onChange = {e => timerChange('podomoro', Number(e.target.value))}></input>
                        <input className = "rounded-md bg-gray-800 px-2 py-1 font-bold" maxLength ={2} type="number"  onChange = {e => timerChange('short', Number(e.target.value))}></input>
                        <input  className = "rounded-md bg-gray-800 px-2 py-1 font-bold" maxLength ={2} type="number"  onChange = {e => timerChange('long', Number(e.target.value))}></input>     
                               
                    </div>
                    <p className = {`text-red-600 text-sm mt-1  ${displayWarning ? "block" : "hidden"}`}>Invalid number! Must be between 0 and 120.</p>
                </div>
                <button className = "absolute top-5 right-5" onClick = {() => props.setIsOpen(false)}>X</button>
                <div className = "absolute gap-2 bottom-10 right-5 font-slate-100 font-bold flex">
                    <Option text = "Reset" onClick = {resetSettings} />
                    <Option text = "Save Changes" onClick = {closePopup} valid = {displayWarning}/>
                </div>
            </div>
        </div>
    )
}