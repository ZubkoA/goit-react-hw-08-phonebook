import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* //треба буде зробити щоб перемикалось */}
        {/* <li>
          <UserMenu />
        </li> */}
        <li>
          <AuthNav />
        </li>
      </ul>
    </nav>
  );
};
