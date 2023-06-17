import React from 'react';
import { useState } from 'react';


export default function Todo(props:any){
    const [isChecked, setIsChecked] = useState(props.initialCheck);

    const onComplete = () => {
        setIsChecked(!isChecked)
        props.checkFunc(props.id)
    }

    return (
        <div className = "flex border-b-2 mt-6">
            <input 
                type="checkbox" 
                className="flex-auto m-2 rounded-xl" 
                onClick = {onComplete}
                checked = {isChecked}
            />

            <p 
                className = {`flex-auto w-48 py-2 px-2 break-words ${isChecked ? "line-through" : ""}`} 
            >
                {props.text}
            </p>

            <button 
                className = "flex-auto py-2"
                onClick={() => {
                    props.delFunc(props.id)
                }}
            >
                X
            </button>
        </div>
    )
}