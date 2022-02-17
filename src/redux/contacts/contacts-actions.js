import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const onSubmitHandlerRequest = createAction(
  'contacts/onSubmitHandlerRequest',
);
export const onSubmitHandlerSuccess = createAction(
  'contacts/onSubmitHandlerSuccess',
);
export const onSubmitHandlerError = createAction(
  'contacts/onSubmitHandlerError',
);

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

export const onChangeFilter = createAction('contacts/changeFilter');
