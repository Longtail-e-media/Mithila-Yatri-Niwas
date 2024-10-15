import React, { useState, useEffect } from "react";

import { Loading } from "../constants/data";

const withDataFetching =
  (url, transformData = (data) => data) =>
  (WrappedComponent) => {
    const HOC = (props) => {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
        fetch(url)
          .then((response) => response.text())
          .then((data) => {
            try {
              const transformedData = transformData(data);
              setData(transformedData);
            } catch (error) {
              setError(error);
            } finally {
              setLoading(false);
            }
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      }, [url, transformData]);

      if (loading) return <Loading />;
      if (error) return <p>Error loading data: {error.message}</p>;

      return <WrappedComponent data={data} {...props} />;
    };

    return HOC;
  };

export default withDataFetching;
