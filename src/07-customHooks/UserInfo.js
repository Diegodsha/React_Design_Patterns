// import useCurrentUser from "./useCurrentUser";
// import useUser from './useUser'
// import useResource from "./useResource";

import axios from 'axios';
import useDataResource from './useDataSource';

const serverResource = (resourceUrl)=> async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
  }

export const UserInfo = ({ userId }) => {
  // const[user ,setUser] = useUser('1')
  // const [user, setUser] = useResource(`/users/${userId}`)

  const [user, setUser] = useDataResource(serverResource(`/users/${userId}`));

  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};
