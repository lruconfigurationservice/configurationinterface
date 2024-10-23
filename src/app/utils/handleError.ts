import { AxiosError } from 'axios';
import { signOut } from 'next-auth/react';

/** Method to handle a generic way to handle all errors coming from requests to the APIs */
export const handleError = (error: AxiosError) => {
  if (error.response?.status === 401) {
    if (typeof window !== 'undefined') {
      signOut();
    } else {
      throw new Error('401: Authentication Error');
    }
  }

  // // TODO: Create generic way to handle errors from API
  // trackException(error);

  // if (error.response?.status === 401) {
  //   console.warn('Unauthorized', error.message);
  // } else {
  //   throw error;
  // }
  // console.warn('API failed', error);

  throw error;
};