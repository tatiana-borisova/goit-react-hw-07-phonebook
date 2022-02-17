import Section from './components/Section';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const App = () => (
  <>
    <Section title="Phonebook">
      <Form />
    </Section>
    <Section title="Contacts">
      <Filter />
      <ContactList />
    </Section>
  </>
);

export default App;
