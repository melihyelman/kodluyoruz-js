import { Box } from '@chakra-ui/react';
import React from 'react';
import Home from './Home';
import Orders from './Orders';
import Products from './Products';
import ProductDetail from './ProductDetail';
import NewProduct from './Products/new';
import styles from './styles.module.css';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

function Admin() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <nav>
        <ul className={styles.adminMenu}>
          <li>
            <Link to={url}>Home</Link>
          </li>
          <li>
            <Link to={`${url}/orders`}>Orders</Link>
          </li>
          <li>
            <Link to={`${url}/products`}>Products</Link>
          </li>
        </ul>
      </nav>
      <Box mt={10}>
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`${path}/orders`} component={Orders} />
          <Route exact path={`${path}/products`} component={Products} />
          <Route exact path={`${path}/products/new`} component={NewProduct} />
          <Route
            path={`${path}/products/:productId`}
            component={ProductDetail}
          />
        </Switch>
      </Box>
    </div>
  );
}

export default Admin;
