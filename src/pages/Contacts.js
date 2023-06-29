// import React, { useEffect } from 'react';
import Header from 'components/Header';
import AddContacts from 'components/AddContacts';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactPrivate/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Header title="Phonebook" />
      {<AddContacts />}
      <Filter />
      <Header titleContacts="Contacts" />
      <ContactList />
    </div>
  );
};

export default Contacts;
