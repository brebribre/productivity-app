import React from 'react'
import Nav from './Nav'
import Option from './Option'
import { useState } from 'react';
interface Settings {
    podomoro: number;
    short: number;
    long: number;
    theme: string;
}

export default function Popup(props:any){
    const defaultSetting = {
        podomoro : 25,
        short : 5,
        long: 25,
        theme: "sakura"
    }

    const [setting, setSetting] = useState<Settings>(defaultSetting)


    const addToLocalStorage =  (settings:Settings) => {
        localStorage.setItem('settings', JSON.stringify(settings));
    }

    const timerChange = (type:string, value:any) => {
      
        if(type === 'podomoro'){
            defaultSetting.podomoro = Number(value)
        }
        else if(type === 'short'){
            defaultSetting.short = Number(value)
        }
        else if(type === 'long'){
            defaultSetting.long = Number(value)
        }

        setSetting(defaultSetting);
        addToLocalStorage(defaultSetting);
        
    }

    const themeChange = (theme:string) => {
        defaultSetting.theme = theme;
        setSetting(defaultSetting);
        addToLocalStorage(defaultSetting);
    }


    return (
        <div className = {`absolute rounded-3xl mx-auto my-auto bg-gray-900 w-2/3 h-1/2 ${props.isOpen ? "block" : "hidden"}`}>
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
                    
                    <Nav setBg = {props.setBg}/>

                    <p className = "pt-6 pb-2 font-bold">Timer </p>
                    <div className = "grid grid-cols-3 gap-2">
                        <input className = "rounded-md bg-gray-800 px-2 py-1 font-bold" type="number" max="60" onChange = {e => timerChange('podomoro', e.target.value)}></input>
                        <input className = "rounded-md bg-gray-800 px-2 py-1 font-bold" type="number" max="60" onChange = {e => timerChange('short', e.target.value)}></input>
                        <input className = "rounded-md bg-gray-800 px-2 py-1 font-bold" type="number" max="60" onChange = {e => timerChange('long', e.target.value)}></input>            
                    </div>
                </div>


                <button className = "absolute top-5 right-5 font-slate-100 font-bold z-50 transform transition duration-100 hover:scale-125" onClick = {() => props.setIsOpen(false)}>
                    X
                </button>

                <div className = "absolute bottom-10 right-10 font-slate-100 font-bold">
                    <Option text = "Save changes"/>
                </div>
            </div>
        </div>
    )
}