import { useState, useEffect, useRef } from "react"
import { TodoList } from "./TodoList";
import { ITodo } from "../types/data";

const App: React.FC = () => {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const addToDo = () => {

        if(value){
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complite: false
            }]);
    
            setValue("");
        }
    }

    const removeToDo = (id: number): void => {
        var result = todos.filter(todo => todo.id !== id);
        setTodos(result);
    }

    const toggleTodo = (id: number): void => {
        const result = todos.map(todo => {
            if (todo.id === id){
                todo.complite = !todo.complite;
            }

            return todo
        })

        setTodos(result);
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) =>{
       if (e.key === "Enter"){
            addToDo();
       }
    }

    useEffect(()=>{
        if (inputRef.current){
            inputRef.current.focus();
        }       
    }, [])

    return (
        <>
            <div>
                <input 
                    type="text" 
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref = {inputRef}
                />
                <button onClick={addToDo}>
                   Add
                </button>
            </div>
            <TodoList items={todos} removeToDo={removeToDo} toggleTodo={toggleTodo}/>
        </>
    )
}

export  {App};