// import React, { useState, useEffect } from "react";

// import { Loading } from "../constants/data";

// const withDataFetching =
//   (url, transformData = (data) => data) =>
//   (WrappedComponent) => {
//     const HOC = (props) => {
//       const [data, setData] = useState([]);
//       const [loading, setLoading] = useState(true);
//       const [error, setError] = useState(null);

//       useEffect(() => {
//         fetch(url)
//           .then((response) => response.text())
//           .then((data) => {
//             try {
//               const transformedData = transformData(data);
//               setData(transformedData);
//             } catch (error) {
//               setError(error);
//             } finally {
//               setLoading(false);
//             }
//           })
//           .catch((error) => {
//             setError(error);
//             setLoading(false);
//           });
//       }, [url, transformData]);

//       if (loading) return <Loading />;
//       if (error) return <p>Error loading data: {error.message}</p>;

//       return <WrappedComponent data={data} {...props} />;
//     };

//     return HOC;
//   };

// export default withDataFetching;

import React, { useState, useEffect, useRef } from "react";
import { Loading } from "../constants/data";

const cache = {};

const withDataFetching =
  (url, transformData = (data) => data) =>
  (WrappedComponent) => {
    const HOC = (props) => {
      const [data, setData] = useState(cache[url] || []);
      const [loading, setLoading] = useState(!cache[url]);
      const [error, setError] = useState(null);
      const hasFetched = useRef(false); // Prevent multiple fetches

      useEffect(() => {
        if (!hasFetched.current && !cache[url]) {
          fetch(url)
            .then((response) => response.text())
            .then((data) => {
              try {
                const transformedData = transformData(data);
                cache[url] = transformedData; // Store in cache
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
          hasFetched.current = true;
        }
      }, [url, transformData]);

      // if (loading) return <Loading />;
      if (loading) return <></>;
      if (error) return <p>Error loading data: {error.message}</p>;

      return <WrappedComponent data={data} {...props} />;
    };

    return HOC;
  };

export default withDataFetching;
