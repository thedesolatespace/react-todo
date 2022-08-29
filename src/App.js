import { useState } from 'react';
import { Input } from './components/input/Input';
import { List } from './components/list/List';
import { StyledTitle } from './components/title/Title.styles';
//import { nanoid } from 'nanoid';

function App() {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState(0);

  const filterTodo = (value) => {
    console.log('filter', +value + 1);
    setFilter(+value);
  };

  const addTodo = (text) => {
    const id = Date.now();
    const newTask = { id, text, done: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const removeTodo = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
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
          tasks={tasks}
        />
      </div>
    </div>
  );
}

export default App;
