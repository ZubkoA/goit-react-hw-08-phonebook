import { Button, Container, Spacer, Text, Flex } from '@chakra-ui/react';
import { useAuth } from 'components/hook';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogOut() {
    dispatch(logOut());
    navigate('/');
  }
  return (
    <Container mt={4}>
      <Flex alignItems="center">
        <Text fontSize="18px" as="b">
          Welcome, {user.name}
        </Text>
        <Spacer />
        <Button
          colorScheme="gray"
          size="md"
          type="button"
          onClick={handleLogOut}
        >
          Logout
        </Button>
      </Flex>
    </Container>
  );
};
