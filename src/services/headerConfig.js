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


export function check(id) {
  const data = {opr: "check", data: id};
  return request('/api/headerConfig', {
    method: 'POST',
    body: JSON.stringify(data),

  });
}
