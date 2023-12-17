import { Outlet } from 'react-router-dom';
import { Header, Layout, StyledLink } from './AppLayoutStyled';
import { Suspense } from 'react';
import { GlobalStyle } from '../../GlobalStale';

const AppLayout = () => {
  return (
    <Layout>
      <header>
        <Header>
          <li>
            <StyledLink to="/login">Login</StyledLink>
          </li>
          <li>
            <StyledLink to="/register">Register</StyledLink>
          </li>
        </Header>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </Layout>
  );
};

export default AppLayout;
