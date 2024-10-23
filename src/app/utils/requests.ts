import axios, { AxiosError } from 'axios';
import { handleError } from './handleError';

// axios.defaults.paramsSerializer = {
//     serialize: (params) => qs.stringify(params, { indices: true, allowDots: true }),
//   };
  
//   axios.interceptors.request.use(async (request) => {
//     if (!isHeadersAdded()) {
//       await setHeaders(request);
//     }
//     return request;
//   });
  
  /** Used for sending GET requests
   * @param baseURL The url for the specific API you want to send the request to
   * @param url The appended url for the specific REST controller you want to send the request to
   * @param params can be used for attaching parameters to the request
   * @returns The response from the GET request encapsulated in a {@link AxiosResponse} promise */
  export const getRequest = async <T>(
    baseURL: string,
    url: string,
    params?: unknown,
    withCredentials?: boolean,
    headers?: { [key: string]: string }
  ) => {
    return await axios
      .get<T>(url, {
        baseURL,
        params,
        withCredentials,
        headers,
      })
      .then((x) => x.data)
      .catch((error: AxiosError) => handleError(error));
  };

  /** Used for sending PUT requests
 * @param baseURL The url for the specific API you want to send the request to
 * @param url The appended url for the specific REST controller you want to send the request to
 * @param body the data to attach to the POST request in the form of the ContentType
 * @param params can be used for attaching parameters to the request
 * @returns The response from the PUT request */
export const putRequest = async <T>(baseURL: string, url: string, body: object, params?: unknown) => {
  return await axios
    .put<T>(url, body, {
      baseURL,
      params,
    })
    .then((x) => x.data)
    .catch((error: AxiosError) => handleError(error));
};