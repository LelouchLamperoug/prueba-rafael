import { useCallback, useEffect, useState } from "react";
import { getUrl } from "../service/api";

const useFetch = (endpoint) => {
  const [fetchStatus, setFetchStatus] = useState({
    isLoading: true,
    isError: false,
    error: {},
    data: [],
  });

  const handleFetchCall = useCallback(async () => {
    try {
      setFetchStatus((prev) => ({ ...prev, isError: false, isLoading: true }));
      const apiUrl = getUrl(endpoint);
      const fetchResult = await (await fetch(apiUrl)).json();
      console.log(fetchResult);
      setFetchStatus((prev) => ({
        ...prev,
        data: fetchResult.response.channels,
      }));
    } catch (ex) {
      setFetchStatus((prev) => ({
        ...prev,
        data: [],
        isError: true,
        error: ex,
        isLoading: false,
      }));
    }
  }, [endpoint]);

  useEffect(() => {
    handleFetchCall();
  }, [handleFetchCall]);

  return fetchStatus;
};

export default useFetch;
