import { useQuery } from 'react-query';
import { Grid } from '@chakra-ui/react';

import { fetchProductList } from '../../api';
import Card from '../../components/Card';

function Products() {
  const { isLoading, error, data } = useQuery('products', fetchProductList);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={4}>
      {data.map((item, key) => (
        <Card key={key} item={item} />
      ))}
    </Grid>
  );
}

export default Products;
