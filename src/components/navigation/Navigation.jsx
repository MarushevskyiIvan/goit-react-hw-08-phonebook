import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NavLi } from 'components/authNav/AuthNavStyled';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <ul>
        <NavLink to="/">
          <NavLi>Home</NavLi>
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts">
            <NavLi>Contacts</NavLi>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};
