import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/thunk';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    navigate('/');
    toast.success('Sign Up successfully');
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" />

        <label>Email</label>
        <input name="email" type="email" />

        <label>Password</label>
        <input name="password" type="password" />

        <button type="submit">Register</button>
        {/* <Link to="/">Welcome</Link> */}
      </form>
    </div>
  );
};

export default RegisterForm;
