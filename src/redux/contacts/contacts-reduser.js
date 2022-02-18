import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  onSubmitHandlerRequest,
  onSubmitHandlerSuccess,
  onSubmitHandlerError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  onChangeFilter,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [onSubmitHandlerSuccess]: (state, { payload }) =>
    checkingExistingContacts(state, payload),
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [onChangeFilter]: (_, { payload }) => payload,
});

const checkingExistingContacts = (state, value) => {
  const isNameHere = state.find(
    contact => contact.name.toLowerCase() === value.name.toLowerCase(),
  );

  const isNumberHere = state.find(
    contact => contact.number.toLowerCase() === value.number.toLowerCase(),
  );

  return isNameHere || isNumberHere
    ? alert(
        `${isNameHere ? value.name : ''} ${
          isNumberHere ? value.number : ''
        } is already in contacts`,
      )
    : [...state, value];
};

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [onSubmitHandlerRequest]: () => true,
  [onSubmitHandlerSuccess]: () => false,
  [onSubmitHandlerError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
