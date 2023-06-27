import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AuthNav = () => {
  // const { access_token: isAuth, profile } = useSelector(state => state.users);
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
      {/* {isAuth ? (
        <NavLink to="/login">Log In</NavLink>
      ) : (
        <NavLink to="/">Log Out</NavLink>
      )} */}
    </div>
  );
};
