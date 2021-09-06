import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { contactSelectors, removeAllContact } from '../../redux/contactSlice';
import Item from './Item';

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeAllContact());
    }
  };

  return (
    <>
      {total > 1 && (
        <div className='deleteAll' onClick={handleDeleteAll}>
          Delete All
        </div>
      )}
      <ul className='list'>
        {contacts.map((contact) => (
          <Item item={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
}

export default List;
