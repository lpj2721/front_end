import fetch from 'dva/fetch';
import {message} from 'antd'
import { browserHistory } from 'dva/router';

function checkStatus(response) {
  if (response.status === 401) {
    console.log(401);
    message.warn('会话超时');
      browserHistory.push('/login');
  }
  if (response.status >= 200 && response.status < 300) {
    const token = response.headers.get('access-token');
    if (token) {
      sessionStorage.setItem('access-token', token);
      console.log(sessionStorage.getItem('access-token'), 12);
    }
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request( url, options) {
  console.log(sessionStorage.getItem('access-token'));
  const AuthHeader = {headers:{

    'Access-Token': sessionStorage.getItem('access-token') || ''
  }};
  const response = await fetch(url,{...options,...AuthHeader});
  checkStatus(response);
  const data = await response.json();

  const ret = {
    data,
    headers: {},
  };

  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  }

  return ret;
}
