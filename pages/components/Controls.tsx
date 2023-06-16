import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function Controls(props:any){
 
    return (

            <div className = "w-64 md:w-80 mx-auto mt-4 py-3 bg-white grid grid-cols-2 gap-4 border-4 rounded-3xl text-slate-500 font-bold">
                <div 
                    className="my-auto mx-auto transform transition duration-200 hover:opacity-80 hover:scale-125" 
                    onClick = {props.onPlay}
                >
                    {props.isActive? <Image src={'pause.svg'} alt="pause-button" width={30} height={30}/> : <Image src={'play.svg'} alt="play-button" width={30} height={30}/>}
                </div>

                <div className="my-auto mx-auto transform transition duration-200 hover:opacity-80 hover:scale-125" onClick = {props.onReset}><Image src={'restart.svg'} alt="reset-button" width={30} height={30}/></div>
            </div>
     
    
    )

}

