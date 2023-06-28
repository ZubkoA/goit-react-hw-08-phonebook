import { useAuth } from 'components/hook';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  function handleLogOut() {
    dispatch(logOut());
  }
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
