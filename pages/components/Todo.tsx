import React from 'react';
import { useState } from 'react';
import Image from 'next/image'

export default function Todo(props:any){
    const [isChecked, setIsChecked] = useState(props.initialCheck);
    


    const onComplete = () => {
        setIsChecked(!isChecked)
        
        props.checkFunc(props.id)
    }

    return (
        <div className = "flex border-b-2 mt-6 my-auto">
            <input 
                type="checkbox" 
                className="flex-auto m-2 h-7 transform transition duration-200 hover:opacity-80 hover:scale-125" 
                onClick = {onComplete}
                checked = {isChecked}
            />

            <p 
                className = {`flex-auto w-48 py-2 pl-2 font-bold text-md lg:text-2xl break-words ${isChecked ? "line-through" : ""}`} 
            >
                {props.text}
            </p>

          
            <Image src={'close.svg'} alt="pause-button" width={10} height={10}
            className = " flex-auto h-8 my-auto font-bold transform transition duration-200 hover:opacity-80 hover:scale-150"
            onClick={() => {
                props.delFunc(props.id)
            }}
            />
        </div>
    )
}