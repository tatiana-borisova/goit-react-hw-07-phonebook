import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.onSubmitHandler]: (state, { payload }) =>
    checkingExistingContacts(state, payload),
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.onChangeFilter]: (_, { payload }) => payload,
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

export default combineReducers({
  items,
  filter,
});
