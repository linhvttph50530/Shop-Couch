import { useEffect, useState } from 'react';

function useAuthen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('Token');
    const userData = localStorage.getItem('User');

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Invalid user data in localStorage');
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  return user; // trả về full object
}

export default useAuthen;
