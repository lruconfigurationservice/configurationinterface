import { AxiosError } from 'axios';

/** Method to handle a generic way to handle all errors coming from requests to the APIs */
export const handleError = (error: AxiosError) => {
  console.warn('API failed', error);
  if (error.status === 404) {
      throw new Error('404: appId is probably not correct or a combination of the appId and serverUrl is not correct');
  }

  throw error;
};