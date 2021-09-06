import React from 'react';
import { useSelector } from 'react-redux';
import { contactSelectors } from '../../redux/contactSlice';
import Item from './Item';

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);

  return (
    <ul className='list'>
      {contacts.map((contact) => (
        <Item item={contact} key={contact.id} />
      ))}
    </ul>
  );
}

export default List;
