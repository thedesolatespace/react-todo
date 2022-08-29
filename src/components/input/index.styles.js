import styled from 'styled-components';

export const StyledInput = styled.form`
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
  //justify-content: start;
  margin-top: 3px;
`;
export const StyledTextInput = styled.input`
  //margin-top: 3px;
  width: 80%;
  padding: 10px;
  border-radius: 10px 0px 0px 10px;
  margin-bottom: 10px;
  background: #fcf8e8;
`;
export const StyledButon = styled.button`
  font-weight: 700;
  font-size: 20px;
  width: 100%;
  padding: 10px;
  background: #df7861;
  border-radius: 20px;
`;
export const StyledFilter = styled.select`
  border-color: transparent;
  border: none;
  outline: none;
  background: #fcf8e8;
  border-radius: 0px 10px 10px 0px;
  margin-bottom: 10px;
  text-transform: uppercase;
  width: 20%;
`;
