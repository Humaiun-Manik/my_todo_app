import { useEffect, useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import './App.css';

// to get the data from localStorage
const getLocalTodos = () => {
  let list = localStorage.getItem('todoLists');

  if (list) {
    return JSON.parse(localStorage.getItem('todoLists') || '[]');
  }

}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>(getLocalTodos());

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem('todoLists', JSON.stringify(todos));
  }, [todos])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    };
  };


  return (
    <div className='App'>
      <span className='heading'>My Todo App</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div >
  );
}

export default App;
