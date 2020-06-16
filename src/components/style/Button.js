import styled from '@emotion/styled';

const Button = styled.button`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  line-height: 1.5;
  height: calc(1.5em + 1rem + 8px);
  border-radius: 0.25rem;
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: #0069d9;
    border-color: #0062cc;
  }
  &:active {
    background-color: #0062cc;
    border-color: #005cbf;
  }
`;

export default Button;
