import {useEffect, useReducer} from 'react';
import authData from '../utils/authData';
import {apiReducer, initialState} from './reducer';

const parseError = (str: string) => {
  try {
    const json = JSON.parse(str);
    return json.message;
  } catch (e) {
    return str || 'Oops! Something went wrong';
  }
};

export const useFetch = (url: string, initialData: Array<any> = []) => {
  const token = authData.getToken();

  const [data, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    dispatch({type: 'DATA_FETCH_START'});

    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'x-auth-token': token,
        'Content-Type': 'application/json',
      }),
    })
      .then(async response => {
        if (!response.ok) {
          const error = await response.text();
          throw {
            status: response.status,
            error: parseError(error),
          };
        }
        return response.json();
      })
      .then(json => {
        dispatch({type: 'DATA_FETCH_SUCCESS', payload: json});
      })
      .catch(error => {
        dispatch({type: 'DATA_FETCH_FAILURE', payload: error});
      });
  }, [token, url, initialData]);

  return data;
};

export const useSubmit = async (
  url: string,
  body: any,
  type: string = 'POST',
) => {
  const token = authData.getToken();

  return fetch(url, {
    method: type,
    headers: new Headers({
      'x-auth-token': token,
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(body),
  }).then(async response => {
    if (!response.ok) {
      const error = await response.text();
      console.log('Error is', error);
      const parsedErr = JSON.parse(error);
      if (parsedErr.device_id && parsedErr.user_id) {
        throw {
          status: response.status,
          message: parseError(error),
          device_id: parsedErr.device_id,
          user_id: parsedErr.user_id,
        };
      }
      if (parsedErr.email) {
        throw {
          status: response.status,
          message: parseError(error),
          email: parsedErr?.email,
        };
      }
      throw {
        status: response.status,
        message: parseError(error),
      };
    }

    const result = await response.json();

    if (result.success !== undefined && !result.success) {
      throw result;
    }
    return result;
  });
};

export default null;
