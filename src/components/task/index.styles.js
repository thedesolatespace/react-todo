import styled from 'styled-components';

export const StyledTask = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #666;
  outline: 5px solid #e9e2c7;
  padding: 10px 5px;
  background: #e9e2c7;
  &:first-child {
    margin-top: 20px;
  }
`;
export const StyledDate = styled.p`
  text-align: right;
  word-break: keep-all;
`;
export const StyledTaskText = styled.p`
  padding-right: 20px;
`;
