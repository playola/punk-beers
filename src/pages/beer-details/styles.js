import styled, { css } from 'styled-components';

export const BeerDetailsWrapper = styled.div`
  padding: 0 20px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorWrapper = styled.div`
  text-align: center;
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const BackButton = styled.div`${({ theme }) => css`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${theme.primary};
  border: 1px solid ${theme.primary};
  border-radius: 3px;
  margin-right: 40px;

  &:hover {
    background-color: ${theme.secondary};
  }
`}`;
