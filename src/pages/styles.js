/**
 * Generic styles for the pages.
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageTitle = styled.h1`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.img`
  height: ${({ height }) => height || '50%'};
`;
