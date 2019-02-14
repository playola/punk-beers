import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  width: 200px;
  position: relative;
  margin: 5px 0 10px 0;
`;

export const InputField = styled.input`${({ theme }) => css`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid ${theme.primary};
  border-radius: 3px;
  font-size: 16px;
  color: ${theme.primary};
  transition: all .3s ease;

  &:focus {
    outline: none;
    border: 2px solid ${theme.primary};
  }

  &:-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`}`;

export const FloatingLabel = styled.label`${({ theme }) => css`
  position: absolute;
  pointer-events: none;
  left: 11px;
  top: 17px;
  font-size: 16px;
  color: ${theme.primary};
  transition: all .3s ease;

  ${InputField}:focus + & {
    font-size: 12px;
    padding: 0 5px;
    top: -8px;
    background-color: ${theme.white};
  }

  ${InputField}:valid + & {
    font-size: 12px;
    padding: 0 5px;
    top: -8px;
    background-color: ${theme.white};
  }
`}`;
