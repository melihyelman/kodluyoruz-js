import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchText } from '../redux/textSlice';

function Content() {
  const status = useSelector((state) => state.text.status);
  const items = useSelector((state) => state.text.items);

  const [paras, setParas] = useState(2);
  const [format, setFormat] = useState('text');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchText({ paras, format }));
  }, [paras, dispatch, format]);

  return (
    <div className='content'>
      <form>
        <div>
          <span>Paragraphs</span>
          <input
            type='number'
            value={paras}
            onChange={(e) => setParas(parseInt(e.target.value))}
          />
        </div>
        <div>
          <span>Include HTML</span>
          <select
            defaultValue='text'
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value='html'>Yes</option>
            <option value='text'>No </option>
          </select>
        </div>
      </form>
      <div className='output'>
        {status === 'loading'
          ? 'loading...'
          : items.map((item, i) => <p key={i}>{item}</p>)}
      </div>
    </div>
  );
}

export default Content;
