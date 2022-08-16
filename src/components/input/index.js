import { useState } from 'react';
import { StyledButon, StyledInput } from './index.styles';

export const Input = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = () => {
    if (value) {
      addTodo(value);
    }
    setValue('');
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(value);
      }}
    >
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your TODO..."
      />
      <StyledButon>ADD TODO</StyledButon>
    </form>
  );
};
