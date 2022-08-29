import { Task } from '../task';
import { StyledList } from './index.styles';

export const List = ({ tasks, toggleDone, removeTodo, filterSet }) => {
  return (
    <StyledList>
      {filterSet
        ? tasks.map((item) => {
            if (item.done) {
              return (
                <Task
                  removeTodo={removeTodo}
                  toggleDone={toggleDone}
                  task={item}
                  key={item.id}
                />
              );
            }
          })
        : tasks.map((item) => (
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
