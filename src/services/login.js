/**
 * Created by WL on 2017/5/2.
 */
import request from '../utils/request';

export function sign(values) {
  return request('/api/login', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
