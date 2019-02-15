import styled from 'styled-components';

const Button = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  outline: none;
  border: none;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default Button;
