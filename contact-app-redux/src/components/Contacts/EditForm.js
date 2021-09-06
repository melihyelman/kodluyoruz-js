import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { updateContact } from '../../redux/contactSlice';

function EditForm({ contact }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return;
    dispatch(
      dispatch(updateContact({ id: contact.id, changes: { name, number } }))
    );
    setName('');
    setNumber('');
    history.goBack();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder='number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className='btn'>
          <button type='submit'>Update</button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
