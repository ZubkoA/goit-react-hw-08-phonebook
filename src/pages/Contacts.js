import React, { useEffect } from 'react';
import Header from 'components/Header';
import AddContacts from 'components/AddContacts/AddContacts';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk } from 'redux/auth/thunk';

const Contacts = () => {
  const { profile, access_token } = useSelector(s => s.users.profile);
  console.log(profile);
  const dispatch = useDispatch();

  useEffect(() => {
    access_token && dispatchEvent(getProfileThunk());
  }, [access_token, dispatch]);
  return (
    <div>
      {profile && <title>{profile.name} contacts</title>}
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
