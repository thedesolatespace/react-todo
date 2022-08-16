import { StyledTask } from './index.styles';

export const Task = ({ task, toggleDone, removeTodo }) => {
  return (
    <StyledTask
      className={task.done ? 'done' : ''}
      onContextMenu={(e) => {
        e.preventDefault();
        removeTodo(task.id);
      }}
      onClick={() => {
        toggleDone(task.id);
      }}
      id={task.id}
    >
      {task.text}
    </StyledTask>
  );
};
