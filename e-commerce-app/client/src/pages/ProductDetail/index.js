import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';
import { Box, Text, Button } from '@chakra-ui/react';

import { fetchProduct } from '../../api';

function ProductDetail() {
  const { productId } = useParams();

  const { isLoading, error, data } = useQuery(['product', productId], () =>
    fetchProduct(productId)
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const images = data.photos.map((url) => ({ original: url }));

  return (
    <div>
      <Button colorSchema='pink' variant='solid'>
        Add to basket
      </Button>
      <Text as='h2' fontSize='2xl'>
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
      <p>{data.description}</p>
      <Box margin='10'>
        <ImageGallery items={images}></ImageGallery>
      </Box>
    </div>
  );
}

export default ProductDetail;
