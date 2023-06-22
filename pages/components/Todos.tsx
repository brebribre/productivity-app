import React from 'react';
import Todo from './Todo'
import Input from './Input';
import { useEffect, useState } from "react"
import useSound from 'use-sound';

interface Todos {
    id: number;
    text: string;
    completed: boolean;
}

export default function Todos(){
    const [todos, setTodos] = useState<Todos[]>([]);

    
    useEffect(() => {
        let value;
        // Get the value from local storage if it exists
        value = localStorage.getItem("todos") || "err"
        if(value !== "err"){
            setTodos(JSON.parse(value));
           
        }else{
            setTodos([])
        }
    }, [])

    const addToLocalStorage =  (todos:Todos[]) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const appendToLocalStorage =  (todos:Todos[]) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const addTodos =  (item:string) => {
        if(item !== ''){
            const newItem = {
                id: Date.now(),
                text: item,
                completed: false
            }
            setTodos([...todos, newItem]);
            let tmp = todos;
            tmp = [...todos, newItem]

            appendToLocalStorage(tmp);
        }   
    }

    const checkTodo =  (id:number) => {
        let tmp = todos.map((item) => {
            if(item.id === id){
                item.completed = !item.completed  
            }
    
            return item;
        });
        
        setTodos(tmp);
        addToLocalStorage(tmp);

    }

    const deleteTodo =  (id:number) => {
        let tmp = todos.filter((todo) => todo.id != id);
        setTodos(tmp);
        
        addToLocalStorage(tmp);
        console.log(tmp)
    }

   

    return (
        <div className = "w-64 md:w-80">
            <Input
                addTodos = {addTodos}
            />
            <div className = "h-64 overflow-y-scroll no-scrollbar">
                {todos.map((obj, index) => {
                
                return (
                <Todo 
                    key = {obj.id}
                    id = {obj.id}
                    text = {obj.text}
                    delFunc = {deleteTodo}
                    checkFunc = {checkTodo}
                    initialCheck = {obj.completed}
        
                />
                )
            }  
            )}
            </div> 
        </div>
    )
}