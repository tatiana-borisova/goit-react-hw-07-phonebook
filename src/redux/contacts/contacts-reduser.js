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
  [onSubmitHandlerSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [onChangeFilter]: (_, { payload }) => payload,
});

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

const error = createReducer(null, {
  [fetchContactsError]: error => console.log(error),
  [onSubmitHandlerError]: error => console.log(error),
  [deleteContactError]: error => console.log(error),
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
