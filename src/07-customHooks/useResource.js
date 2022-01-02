import axios from 'axios';
import { useEffect, useState } from 'react';

const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return [resource, setResource];
};

export default useResource;
