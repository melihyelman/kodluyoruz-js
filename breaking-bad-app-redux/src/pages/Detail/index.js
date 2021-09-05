import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';

function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_ENDPOINT}/characters/${id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      {loading && <Loading />}
      {char && (
        <>
          <div>
            <h1>{char.name}</h1>
            <img src={char.img} alt={char.name} style={{ width: '50%' }} />
          </div>
          <pre>{JSON.stringify(char, null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default Detail;
