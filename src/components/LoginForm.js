import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logIn } from '../redux/auth/operations';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { type } from '@testing-library/user-event/dist/type';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector(s => s.users.access_token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/contact');
  }, [isAuth, navigate]);

  const handleChange = e => {
    e.target.name === 'email'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
    dispatch(logIn(user));
    setEmail('');
    setPassword('');
  };
  return (
    <Container>
      <FormControl mt={20}>
        <FormLabel>Email</FormLabel>
        <Input
          mb={2}
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
        />
        <FormLabel>Password</FormLabel>
        <Input
          mb={2}
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />

        <Button
          colorScheme="blue"
          size="md"
          type="submit"
          mt={5}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default LoginForm;
