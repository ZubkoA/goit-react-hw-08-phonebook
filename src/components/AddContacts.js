import React from 'react';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { addContacts } from 'redux/contactPrivate/operations';

const AddContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contact = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const newContact = { name, number };
  const handleSubmit = e => {
    e.preventDefault();
    contact.some(contact => contact.name === name)
      ? toast({
          title: `Name: ${name} `,
          description: 'You have contact with this name.',
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top-center',
          colorScheme: 'gray',
        })
      : dispatch(addContacts(newContact));
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <FormControl>
        <FormLabel>Name</FormLabel>

        <Input
          type="text"
          placeholder="name"
          name="name"
          mb={2}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          value={name}
          required
        />
        <FormLabel>Number </FormLabel>
        <Input
          type="tel"
          placeholder="phone number"
          name="number"
          mb={2}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={number}
          required
        />
        <Button
          colorScheme="blue"
          size="md"
          type="submit"
          mt={5}
          onClick={handleSubmit}
        >
          Add contact
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddContacts;
