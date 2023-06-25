import React from 'react';
import Header from 'components/Header';
import AddContacts from 'components/AddContacts/AddContacts';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div>
      <title>Your contacts</title>
      <div>
        <Header title="Phonebook" />
        {<AddContacts />}
        <Filter />
        <Header titleContacts="Contacts" />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
