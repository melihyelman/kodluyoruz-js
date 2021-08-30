import { Flex, Spinner } from '@chakra-ui/react';
import { useState, useContext, createContext, useEffect } from 'react';
import { fetchMe } from '../api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        setLoggedIn(true);
        setUser(me);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data.user);
    localStorage.setItem('access-token', data.accessToken);
    localStorage.setItem('refresh-token', data.refreshToken);
  };
  const values = {
    loggedIn,
    user,
    login,
  };

  if (loading)
    return (
      <Flex justifyContent='center' alignItems='center' height='100vh'>
        <Spinner
          thickness='4px'
          speed='0.65'
          emptyColor='gray.200'
          size='xl'
          color='red'
        />
      </Flex>
    );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
