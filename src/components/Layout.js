import { Navigation } from './Navigation/Navigation';
import { Outlet } from 'react-router';
import { useAuth } from 'components/hook';
import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const Layout = () => {
  // const { isLoggedIn } = useAuth;

  const isLoggedIn = useSelector(state => state.users.isLoggedIn);

  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
