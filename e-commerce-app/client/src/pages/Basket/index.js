import {
  Alert,
  Box,
  Button,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useBasket } from '../../contexts/BasketContext';

function Basket() {
  const { items, removeFromBasket } = useBasket();

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box p={5}>
      {items.length < 1 && (
        <Alert status='warning'>You have not any items in your basket</Alert>
      )}
      {items.length > 0 && (
        <>
          <List d='flex'>
            {items.map((item) => (
              <ListItem key={item._id} mr={25}>
                <Link to={`/product/${item._id}`}>
                  <Text fontSize={18} mb='3'>
                    {item.title} - {item.price} TL
                  </Text>
                  <Image
                    boxSize='200px'
                    objectFit='cover'
                    m='auto'
                    loading='lazy'
                    src={item.photos[0]}
                    alt='basketitem'
                  />
                </Link>
                <Button
                  mt='4'
                  size='sm'
                  width='full'
                  colorScheme='pink'
                  onClick={() => removeFromBasket(item._id)}
                >
                  Remove from basket
                </Button>
              </ListItem>
            ))}
          </List>
          <Box mt={10}>
            <Text fontSize={22}>Total {total} TL</Text>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Basket;
