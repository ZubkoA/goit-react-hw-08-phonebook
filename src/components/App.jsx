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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hook';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(state => state.users.isRefreshing);
  const { isRefreshing } = useAuth();
  console.log(isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Toaster />
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contact"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contact"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute component={<Contacts />} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      )}
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
