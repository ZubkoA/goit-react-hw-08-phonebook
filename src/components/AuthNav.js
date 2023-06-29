import { NavLink } from 'react-router-dom';
import { Flex, Spacer, Container, Square, Link } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Container color="black" fontWeight="bold" pt={15} pb={15}>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Spacer />

        <Square w="100px">
          {' '}
          <NavLink to="/register">Register</NavLink>
        </Square>
        <Square w="100px">
          <NavLink to="/login">Log In</NavLink>
        </Square>
      </Flex>
    </Container>
  );
};
