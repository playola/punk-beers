import styled from 'styled-components';

export const BeersPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BeersListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px;
  justify-content: center;
  align-items: center;
`;

export const BeerItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 300px;
  margin: 15px;
  padding: 0 10px;
  box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
