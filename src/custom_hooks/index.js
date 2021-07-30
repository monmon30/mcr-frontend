import axios from "axios";

export const useFetch = async url => {
  let loading = false;
  let response = null;
  let isError = false;
  let data = null;

  try {
    loading = true;
    response = await axios.get(url);
    data = response.data.data;
  } catch (e) {
    isError = true;
    console.error(e);
  } finally {
    loading = false;
  }

  return { response, isError, data, loading };
};

export const usePost = async (url, form) => {
  let loading = false;
  let response = null;
  let isError = false;
  let data = null;

  try {
    loading = true;
    response = await axios.post(url, form);
    data = await response.data;
  } catch (e) {
    isError = true;
    console.error(e);
  } finally {
    loading = false;
  }

  return { response, isError, data, loading };
};
