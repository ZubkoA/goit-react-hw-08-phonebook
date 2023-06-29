import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactPrivate/operations';

const ListElement = ({ number, name, id }) => {
  const dispatch = useDispatch();
  return (
    <Flex alignItems="center">
      <Box p="4">
        <Text fontSize="18px" as="i">
          {name}: {number}
        </Text>
      </Box>
      <Spacer />
      <Box p="4">
        <Button
          colorScheme="teal"
          size="md"
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </Box>
    </Flex>
  );
};

export default ListElement;
