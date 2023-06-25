import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardWrapper = styled.li`
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const CoctailName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
