import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 44px;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
