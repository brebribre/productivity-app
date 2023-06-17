import React from 'react';
import { useState } from 'react';


export default function Input(props:any){
    const [todo, setTodo] = useState("");

    return (
        <div className = "flex border-b-4 mt-6">
            <input value={todo} type="text" onChange={(e) => {
                setTodo(e.target.value)
            }} 
            placeholder = "Your todo here" 
            className = "flex-auto w-60 pl-2 tracking-wide py-2 bg-transparent outline-0 "/>

            <button className = "flex-auto py-2 font-bold" onClick = {()=>{
                setTodo("")
                props.addTodos(todo)
            } 
            }
            >
                +
            </button>
        </div>
    )
}