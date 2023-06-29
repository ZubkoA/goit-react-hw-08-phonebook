import { Navigation } from './Navigation';
import { Outlet } from 'react-router';

import { useSelector } from 'react-redux';

export const Layout = () => {
  // const { isLoggedIn } = useAuth;

  const isLoggedIn = useSelector(state => state.users.isLoggedIn);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
