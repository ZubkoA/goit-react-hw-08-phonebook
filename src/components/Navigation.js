import { Container, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  return (
    <Container
      color="black"
      fontWeight="semibold"
      pt={15}
      pb={15}
      mb={20}
      bgGradient="linear( blue.100 30%, yellow.100 50%)"
    >
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <NavLink to="/">Home</NavLink>

        {isLoggedIn && <NavLink to="/contact">Contacts</NavLink>}
      </Flex>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};
