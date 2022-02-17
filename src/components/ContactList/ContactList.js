import React from 'react';
import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  return (
    <div className={s.contacts}>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={s.contact}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
