import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ListElement from './ListElement';
import { Container, List, ListItem } from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);

  const findFilter = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const contact = findFilter();
  return (
    <Container>
      <List spacing={3}>
        {contact &&
          contact.map(({ name, id, number }) => (
            <ListItem key={id}>
              <ListElement name={name} number={number} id={id} />
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

ContactList.propTypes = {
  contact: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
export default ContactList;
