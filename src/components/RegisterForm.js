import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, email, password };
    dispatch(register(newUser));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Container>
      <FormControl mt={20}>
        <FormLabel>Name</FormLabel>
        <Input
          mb={2}
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="name"
        />

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
          Register
        </Button>
      </FormControl>
    </Container>
  );
};

export default RegisterForm;
