import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Input } from '../input/Input';
import { List } from '../list/List';
import { StyledTitle } from '../title/Title.styles';

export const TodoBody = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState(0);

  const filterTodo = (value) => {
    setFilter(+value);
  };

  const addTodo = (text) => {
    const id = Date.now();
    const newTask = { id, text, done: false };
    setTodos((prev) => [...prev, newTask]);
    console.log(todos);
  };

  const toggleDone = (id) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <StyledTitle>todo app</StyledTitle>

        <Input filterTodo={filterTodo} addTodo={addTodo} />
        <List
          filterSet={filter}
          removeTodo={removeTodo}
          toggleDone={toggleDone}
          tasks={todos}
        />
      </div>
    </div>
  );
};
