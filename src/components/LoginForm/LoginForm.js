import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { loginThunk } from 'redux/auth/thunk';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.password.value);
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }).unwrap()
    );
    form.reset();
    navigate('/contact');
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
