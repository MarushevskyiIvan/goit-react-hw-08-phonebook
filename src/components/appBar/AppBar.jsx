import { useAuth } from 'hooks';
import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import { AuthNav } from 'components/authNav/AuthNav';
import { Head } from './AppBarStyled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Head>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Head>
  );
};
