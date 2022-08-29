import { StyledDate, StyledTask, StyledTaskText } from './index.styles';

export const Task = ({ task, toggleDone, removeTodo }) => {
  return (
    <StyledTask
      onContextMenu={(e) => {
        e.preventDefault();
        removeTodo(task.id);
      }}
      onClick={() => {
        toggleDone(task.id);
      }}
      id={task.id}
    >
      <StyledTaskText className={task.done ? 'done' : ''}>
        {task.text}
      </StyledTaskText>

      <StyledDate>{new Date(task.id).toLocaleDateString()}</StyledDate>
    </StyledTask>
  );
};
