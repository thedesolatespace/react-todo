import { useState } from 'react';
import { Input } from './components/input';
import { List } from './components/list';
import { Title } from './components/title';
import { nanoid } from 'nanoid';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTodo = (text) => {
    const id = nanoid();
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
        <Title />
        <Input addTodo={addTodo} />
        <List removeTodo={removeTodo} toggleDone={toggleDone} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
