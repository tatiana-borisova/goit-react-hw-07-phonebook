import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <p className={s.filter}>
      <label className={s.label}>
        Find contacts
        <input
          className={s.input}
          type="text"
          placeholder="Enter name or number"
          value={value}
          onChange={e =>
            dispatch(actions.onChangeFilter(e.currentTarget.value))
          }
        ></input>
      </label>
    </p>
  );
};

export default Filter;
