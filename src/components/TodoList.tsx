import {ITodo} from '../types/data';
import {TodoItem} from "./TodoItem";

interface ITodoListProps {
    items: ITodo[],
    removeToDo: (id: number) => void,
    toggleTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = (props) => {

    const {items, removeToDo, toggleTodo} = props;

    return (
        <>
            {
                items.map(todo => 
                    <TodoItem 
                        key={todo.id} 
                        {...todo} 
                        removeTodo = {removeToDo}
                        toggleTodo = {toggleTodo}
                    />
                )
            }
        </>
    )
}

export {TodoList}