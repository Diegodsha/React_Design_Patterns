import React, { useEffect, useState } from 'react';

const DataSource = ({getDataFunc= ()=>{}, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setResource(data);
    })();
  }, [getDataFunc]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

export default DataSource;
