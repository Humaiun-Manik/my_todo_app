import React, { useEffect, useRef, useState } from 'react';
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
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    const handleDone = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        const updateTodo = todos.map(todo => todo.id === id ? { ...todo, todo: editTodo } : todo);
        setTodos(updateTodo);
        setEdit(false);
    }

    return (
        <form className='todo_single' onSubmit={(e) => handleEdit(e, todo.id)}>
            {
                edit ? (
                    <input
                        ref={inputRef}
                        onChange={(e) => setEditTodo(e.target.value)} className='todo_single-text'
                        value={editTodo}
                    />
                ) : (
                    todo.isDone ? (
                        <s className='todo_single-text'>{todo.todo}</s>
                    ) : (
                        <span className='todo_single-text'>{todo.todo}</span>
                    ))
            }
            <div className='todo_single_items'>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit);
                    }
                }}><AiFillEdit /></span>
                <span onClick={() => handleDone(todo.id)} className="icon"><MdDone /></span>
                <span onClick={() => handleDelete(todo.id)} className="icon"><AiFillDelete /></span>
            </div>
        </form>
    );
};

export default SingleTodo
