import React from 'react';
import Todo from './Todo'
import Input from './Input';
import { useState } from 'react';

interface Todos {
    id: number;
    text: string;
    completed: boolean;
  }

export default function Todos(){
    let [todos, setTodos] = useState<Todos[]>([]);

    const addTodos = (item:string) => {
        if(item !== ''){
            const newItem = {
                id: Date.now(),
                text: item,
                completed: false
            }
  
            setTodos([...todos, newItem]);
           
        }   
    }

    const deleteTodo = (id:number) => {
        setTodos(todos => todos.filter(todo => id != todo.id))
    }

   
    return (
        <div className = "w-64">
            <Input
                onAdd = {addTodos}
            />
            <div className = "h-64 overflow-y-scroll no-scrollbar">
                {todos.map((obj, index) => {
                
                return (
                <Todo 
                    key = {obj.id}
                    id = {obj.id}
                    text = {obj.text}
                    delFunc = {deleteTodo}
                />
                )
            }  
            )}
            </div>
            


      
        </div>
    )
}