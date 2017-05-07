import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  const data = {opr: "fetch", data: {page: page, PAGE_SIZE: PAGE_SIZE}};
  return request('/api/interface', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function remove(id) {
  const data = {opr: "remove", data: {id:id}};
  return request('/api/interface', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function modify(values) {
  const data = {opr: "modify", data: values};
  return request('/api/interface', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function create(values) {
  const data = {opr: "create", data: values};
  return request('/api/interface', {
    method: 'POST',
    body: JSON.stringify(data),

  });
}
