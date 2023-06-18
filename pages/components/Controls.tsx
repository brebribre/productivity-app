import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Controls(props:any){
 
    return (

            <div className = "opacity-80 w-48 mx-auto mt-4 py-3 bg-white grid grid-cols-2 gap-4 border-0 rounded-3xl text-slate-500 font-bold md:w-80 md:py-3">
                <div 
                    className="my-auto mx-auto transform transition duration-200 hover:opacity-80 hover:scale-125" 
                    onClick = {props.onPlay}
                >
                    {props.isActive? <Image src={'pause.svg'} className="md:w-10" alt="pause-button" width={20} height={20}/> : <Image src={'play.svg'} alt="play-button" className="md:w-10" width={20} height={20}/>}
                </div>

                <div className=" my-auto mx-auto transform transition duration-200 hover:opacity-80 hover:scale-125" onClick = {props.onReset}><Image src={'restart.svg'} className="md:w-10" alt="reset-button" width={20} height={20}/></div>
            </div>
     
    
    )

}

