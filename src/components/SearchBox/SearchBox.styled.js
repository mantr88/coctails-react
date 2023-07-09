import styled from 'styled-components';

export const FormBox = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 2px solid #ff6347;
  border-radius: 4px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #ffa07a;
  border: 1px solid #ffa07a;
  border-radius: 4px;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #ff4500;
    color: #ffffff;
  }
`;

export const Span = styled.span`
  margin-left: 10px;
`;
