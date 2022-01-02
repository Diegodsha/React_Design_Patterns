/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WithEditableUser = (Component, userId) => (props) => {
  const [originalUser, setOriginalUser] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setOriginalUser(response.data);
      setUser(response.data);
    })();
  }, []);

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]:e.target.value });
  };

  const onSaveUser = async () => {
    const response = await axios.post(`/users/${userId}`, {
      user,
    });
    setOriginalUser(response.data);
    setUser(response.data);
  };

  const onResetUser= ()=>{
      setUser(originalUser)
  }

  return (
    <Component
      {...props}
      user={user}
      onChangeUser={onChangeUser}
      onSaveUser={onSaveUser}
      onResetUser={onResetUser}
    />
  );
};

export default WithEditableUser;
