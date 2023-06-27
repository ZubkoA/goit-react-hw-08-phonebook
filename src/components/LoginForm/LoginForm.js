import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
// import { toast } from 'react-hot-toast';
import { loginThunk } from 'redux/auth/thunk';

const LoginForm = () => {
  const isAuth = useSelector(s => s.users.access_token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/contact');
  }, [isAuth]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    // navigate('/contact');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />

        <label>Password</label>
        <input name="password" type="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
