import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts/contacts-actions';
import s from './Contact.module.css';

const Contact = ({ data }) => {
  const { name, number, id } = data;
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <span className={s.name}>{name}:</span>
      <a className={s.number} href={`tel:${number}`}>
        {number}
      </a>
      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(actions.deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
