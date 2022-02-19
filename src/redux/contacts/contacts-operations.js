import axios from 'axios';
import {
  onSubmitHandlerRequest,
  onSubmitHandlerSuccess,
  onSubmitHandlerError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://61ba064d48df2f0017e5a8a4.mockapi.io/';

// Asynchronous option:
// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const onSubmitHandler = contact => dispatch => {
  dispatch(onSubmitHandlerRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(onSubmitHandlerSuccess(data)))
    .catch(error => dispatch(onSubmitHandlerError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
