import React from 'react';
import { useState } from 'react';


export default function Todo(props:any){
    const [isChecked, setIsChecked] = useState(false);
    const id = props.id;

    return (
        <div className = "flex border-b-2 mt-6">
            <input 
                type="checkbox" 
                className="flex-auto m-2 rounded-xl" 
                onClick = {() => setIsChecked(!isChecked)}
            />

            <p className="flex-auto w-60 py-2 pl-2">{props.text}</p>

            <button 
                className = "flex-auto py-2"
                onClick={() => {
                    props.delFunc(id)
                }}
            >
                X
            </button>
        </div>
    )
}