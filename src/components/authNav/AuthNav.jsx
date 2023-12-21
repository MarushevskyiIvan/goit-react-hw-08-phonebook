import { NavLink } from 'react-router-dom';
import { NavLi } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <NavLi>Register</NavLi>
      </NavLink>
      <NavLink to="/login">
        <NavLi>Log In</NavLi>
      </NavLink>
    </div>
  );
};
