/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const WithEditableResource =
  (Component, resourcePath, resourceName) => (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [Data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChangeData = (e) => {
      setData({ ...Data, [e.target.name]: e.target.value });
    };

    const onSaveData = async () => {
      const response = await axios.post(resourcePath, {
        [resourceName]: Data,
      });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onResetData = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: Data,
      [`onChange${capitalize(resourceName)}`]: onChangeData,
      [`onSave${capitalize(resourceName)}`]: onSaveData,
      [`onReset${capitalize(resourceName)}`]: onResetData,
    };

    return <Component {...props} {...resourceProps} />;
  };

export default WithEditableResource;
