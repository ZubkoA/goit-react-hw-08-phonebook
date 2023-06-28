import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactReducer';
import { filterReducer } from './filter/filterReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

const persistConfig = {
  key: 'users',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = combineReducers({
  contacts: contactReducer,
  users: persistedReducer,
  filter: filterReducer,
});
