import { useEffect, useState } from 'react';

const useDataResource = (getResource) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await getResource()
      setResource(result);
    })();
  }, [getResource]);

  return [resource, setResource];
};

export default useDataResource;
