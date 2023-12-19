// import { Outlet } from 'react-router-dom';
// import { Header, Layout, StyledLink } from './AppLayoutStyled';
// import { Suspense } from 'react';
// import { GlobalStyle } from '../../GlobalStale';

// const AppLayout = () => {
//   return (
//     <Layout>
//       <header>
//         <Header>
//           <li>
//             <StyledLink to="/login">Login</StyledLink>
//           </li>
//           <li>
//             <StyledLink to="/register">Register</StyledLink>
//           </li>
//         </Header>
//       </header>
//       <main>
//         <Suspense>
//           <Outlet />
//         </Suspense>
//       </main>

//       <GlobalStyle />
//     </Layout>
//   );
// };

// export default AppLayout;

import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

import { Suspense } from 'react';
import { AppBar } from 'components/appBar/AppBar';

export const AppLayout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
  );
};
