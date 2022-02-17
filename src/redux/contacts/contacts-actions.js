import { createAction } from '@reduxjs/toolkit';

const onSubmitHandler = createAction('contacts/submit');

const deleteContact = createAction('contacts/delete');

const onChangeFilter = createAction('contacts/changeFilter');

const actions = { onSubmitHandler, deleteContact, onChangeFilter };

export default actions;
