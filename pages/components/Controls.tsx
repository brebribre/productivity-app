import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Controls(props:any){
 
    return (
    <div className = "w-80 lg:w-96 h-11 mt-4 bg-white grid grid-cols-2 gap-4 border-4 rounded-xl text-slate-500 font-bold">
        <div 
            className="my-auto mx-auto transform transition duration-200 hover:opacity-80 hover:scale-110" 
            onClick = {props.onPlay}
        >
            {props.isActive? <Image src={'pause.svg'} alt="pause-button" width={20} height={20}/> : <Image src={'play.svg'} alt="play-button" width={20} height={20}/>}
        </div>

        <div className="my-auto mx-auto transform transition duration-200 hover:opacity-80 hover:scale-110" onClick = {props.onReset}><Image src={'reset.svg'} alt="reset-button" width={20} height={20}/></div>
    </div>
    )

}

