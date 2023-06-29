import React from 'react';
import { useState } from 'react';


export default function Input(props:any){
    const [todo, setTodo] = useState("");
    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className = "flex border-b-4 mt-6">
           
                <input value={todo} type="text" onChange={(e) => {
                    setTodo(e.target.value)
                }} 
                placeholder = "Your todo here" 
                className = "flex-auto w-64 pl-2 border-0  tracking-wide font-semibold lg:text-2xl py-2 bg-transparent outline-0 text-white"/>

                <button className = "flex-auto py-2 font-bold text-2xl transform transition duration-200 hover:opacity-80 hover:scale-150" onClick = {()=>{
                    setTodo("")
                    props.addTodos(todo)
                } 
                }
                >
                    +
                </button>
            
            
        </div>
        </form>
    )
}