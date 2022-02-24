import React from 'react';
import { Todo } from './model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    return (
        <form className='todo_single'>
            <span className='todo_single-text'>{todo.todo}
                <div className="icon"><AiFillEdit /></div>
                <div className="icon"><MdDone /></div>
                <div className="icon"><AiFillDelete /></div>
            </span>
        </form>
    )
}

export default SingleTodo
