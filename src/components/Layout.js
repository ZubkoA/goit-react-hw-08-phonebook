import { Navigation } from './Navigation/Navigation';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
        {/* <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
