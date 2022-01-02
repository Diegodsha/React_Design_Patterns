/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';

const WithUser = (ComponentWithUser, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (() => {
        setTimeout(async () => {
          const response = await axios.get(`/users/${userId}`);
          setUser(response.data);
        }, 2000);
      })();
    }, [userId]);
    return <ComponentWithUser {...props} user={user} />;
  };
};

export default WithUser;
