function Item({ item }) {
  return (
    <div className='item'>
      <q>{item.quote}</q>
      <strong> -{item.author}</strong>
    </div>
  );
}

export default Item;
