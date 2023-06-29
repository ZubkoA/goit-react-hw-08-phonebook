import { createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContacts.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContacts.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [addContacts.fulfilled](state, { payload }) {
      console.log(payload);
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === payload.id);
      state.items.splice(index, 1);
    },
    // [logOut.fulfilled](state) {
    //   state.items = [];
    //   state.error = null;
    //   state.isLoading = false;
    // },
  },
});

export const contactReducer = contactSlice.reducer;
