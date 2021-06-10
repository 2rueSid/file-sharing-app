import { useCallback, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import useRouter from './useRouter';

const useGetCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  const cookies = new Cookies();
  const token = cookies.get('token');

  const getCurrentUser = useCallback(async () => {
    await router
      .post('/user', { token })
      .then((res) => {
        const { user } = res.data;
        setCurrentUser(user);
      })
      .catch((e) => {
        console.log('error while getting current user', e);
      });
  }, [token, router]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  return currentUser;
};

export default useGetCurrentUser;
