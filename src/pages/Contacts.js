// import React, { useEffect } from 'react';
import Header from 'components/Header';
import AddContacts from 'components/AddContacts/AddContacts';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  // const { profile, access_token } = useSelector(s => s.users.profile);
  // console.log(profile);

  // useEffect(() => {
  //   dispatchEvent(getProfileThunk());
  // }, [dispatch]);
  return (
    <div>
      {/* {profile && <title>{profile.name} contacts</title>} */}
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
