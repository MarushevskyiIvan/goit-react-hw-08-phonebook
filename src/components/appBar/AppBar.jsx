import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import { AuthNav } from 'components/authNav/AuthNav';
import { Head } from './AppBarStyled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Head>
      <Navigation />

      <ul>{isLoggedIn ? <UserMenu /> : <AuthNav />}</ul>
    </Head>
  );
};
