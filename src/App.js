import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Puff } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getLoading } from './redux/contacts/contacts-selectors';
import { fetchContacts } from './redux/contacts/contacts-operations';
import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        {isLoadingContacts && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Puff color="#7dcdff" />
          </div>
        )}
        {!isLoadingContacts && <ContactList />}
      </Section>
    </div>
  );
};

export default App;
