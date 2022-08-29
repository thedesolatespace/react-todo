import { Fragment, useState } from 'react';
import {
  StyledButon,
  StyledFilter,
  StyledInput,
  StyledTextInput,
} from './index.styles';

export const Input = ({ addTodo, filterTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = () => {
    if (value.trim()) {
      addTodo(value);
    }
    setValue('');
  };
  return (
    <Fragment>
      <p>
        Left click to mark as completed
        <br />
        Right click to delete the ToDo
      </p>
      <StyledInput
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(value);
        }}
      >
        <StyledTextInput
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your TODO..."
        />
        <StyledFilter
          defaultValue={false}
          onChange={(e) => filterTodo(e.target.value)}
        >
          <option value={0}>ALL</option>
          <option value={1}>COMPLETED</option>
        </StyledFilter>
        <StyledButon>ADD TODO</StyledButon>
      </StyledInput>
    </Fragment>
  );
};
