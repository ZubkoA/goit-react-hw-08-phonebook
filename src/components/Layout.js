import { Navigation } from './Navigation';
import { Outlet } from 'react-router';

import { useSelector } from 'react-redux';

export const Layout = () => {
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
