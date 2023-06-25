import { Layout } from './Layout';
// import Header from './Header';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import AddContacts from './AddContacts/AddContacts';
import { Toaster } from 'react-hot-toast';

import { Routes, Route } from 'react-router';
import Contacts from 'pages/Contacts';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import Register from 'pages/Register';

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<Contacts />} />
        </Route>
      </Routes>
    </>

    // <div className={css.container}>
    //   <Toaster />
    //   <Header title="Phonebook" />
    //   <AddContacts />
    //   <Filter />
    //   <Header titleContacts="Contacts" />
    //   <ContactList />
    // </div>
  );
};

export default App;
