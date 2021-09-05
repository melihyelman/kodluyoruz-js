import { Redirect, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { quotesSelector } from '../../redux/quotesSlice';

function QuoteDetail() {
  const { id } = useParams();
  const quote = useSelector((state) =>
    state.quotes.items.find((item) => item.quote_id === Number(id))
  );

  if (!quote) return <Redirect to='/quotes' />;

  return (
    <div>
      <h1>Quote Detail</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
}

export default QuoteDetail;
