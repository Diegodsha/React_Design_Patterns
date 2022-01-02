import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserLoader = ({ children, id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${id}`);
      const currentUser = response.data;

      setUser(currentUser);
    })();
  }, [id]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

export default UserLoader;
