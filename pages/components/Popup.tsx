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
    let defaultSetting = {
        podomoro: 25,
        short: 5,
        long: 10,
        theme: "sakura"
    }

    useEffect(() => {
        let value;
        // Get the value from local storage if it exists
        value = localStorage.getItem("settings") || "err"
        if(value !== "err"){
            defaultSetting.theme = JSON.parse(value).theme;
        }else{
          console.log("empty")
        }
    }, [])

    const [setting, setSetting] = useState<Settings>(defaultSetting)

    const getFromLocalStorage = () => {
        let value;
        // Get the value from local storage if it exists
        value = localStorage.getItem("settings") || "err"
        if(value !== "err"){
      
            let themeDef = JSON.parse(value).theme;
            props.setBg(themeDef);  
            return value;
           
        }else{
          console.log("empty")
        }
      }

      


    const addToLocalStorage =  (settings:Settings) => {
        localStorage.setItem('settings', JSON.stringify(settings));
        getFromLocalStorage();
    }

    
    const timerChange = (type:string, value:any) => {
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
       
        
    }

    const themeChange = (theme:string) => {
        const tmp = setting;
        tmp.theme = theme;
        setSetting(tmp);
    }

    const closePopup = () => {
        props.setIsOpen(false);
        addToLocalStorage(setting)
        window.location.reload();
    }


    return (
        <div className = {`absolute top-40 bg-gray-900 rounded-3xl mx-5 md:h-1/2 lg:w-1/3 ${props.isOpen ? "block" : "hidden"}`}>
            <div className="bg-wrapper-2 bg-black opacity-50">

            </div>
            <div className = "grid grid-cols-12">
                <div className = "col-span-4 z-20">
                    <div className = "grid grid-rows-3 gap-4 mt-5 ml-8 mr-3 py-2">
                        <p className = "pb-2 font-bold border-b-2">General</p>
                        <p className = "pb-2">Timers</p>
                        <p className = "pb-2">Audio</p>
                    </div>
                </div>

                <div className = "col-span-8 mt-5 ml-4 mr-8 z-20 py-2">
                    <p className = "pb-2 font-bold">Select theme</p>
                    
                    <Nav setBg = {themeChange}/>

                    <p className = "pt-6 pb-2 font-bold">Timer </p>
                    <div className = "grid grid-cols-3 gap-2">
                        <input className = "rounded-md bg-gray-800 px-2 py-1 font-bold" type="number" max="60" onChange = {e => timerChange('podomoro', e.target.value)}></input>
                        <input className = "rounded-md bg-gray-800 px-2 py-1 font-bold" type="number" max="60" onChange = {e => timerChange('short', e.target.value)}></input>
                        <input className = "rounded-md bg-gray-800 px-2 py-1 font-bold" type="number" max="60" onChange = {e => timerChange('long', e.target.value)}></input>            
                    </div>
                </div>
                <button className = "absolute top-5 right-5" onClick = {() => props.setIsOpen(false)}>X</button>
                <div className = "absolute bottom-10 right-10 font-slate-100 font-bold">
                    <Option text = "Save Changes" onClick = {closePopup} />
                </div>
            </div>
        </div>
    )
}