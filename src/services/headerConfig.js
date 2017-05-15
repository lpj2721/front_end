/**
 * Created by WL on 2017/5/11.
 */
import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  const data = {opr: "fetch", data: {page: page, PAGE_SIZE: PAGE_SIZE}};
  return request('/api/headerConfig', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function modify(values) {
  const data = {opr: "modify", data: values};
  return request('/api/headerConfig', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function post(record) {
  console.log(2243433, record);
  const data = {opr: "post", data: {id:record}};
  return request('/api/headerConfig', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
