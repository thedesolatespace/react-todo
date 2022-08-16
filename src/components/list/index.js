import { Task } from '../task';
import { StyledList } from './index.styles';

export const List = ({ tasks, toggleDone, removeTodo }) => {
  return (
    <StyledList>
      {tasks.map((item) => (
        <Task
          removeTodo={removeTodo}
          toggleDone={toggleDone}
          task={item}
          key={item.id}
        />
      ))}
    </StyledList>
  );
};
