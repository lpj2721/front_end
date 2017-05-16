/**
 * Created by WL on 2017/5/16.
 */
import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch({ page }) {
  const data = {opr: "fetch", data: {page: page, PAGE_SIZE: PAGE_SIZE}};
  return request('/api/outcome', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
export function search({ page }) {
  const data = {opr: "search", data: {page: page, PAGE_SIZE: PAGE_SIZE}};
  return request('/api/outcome', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
