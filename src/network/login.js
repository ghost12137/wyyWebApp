import {request} from './request';

let timeStamp = (new Date()).valueOf();
//登陆
export function login(params) {
  return request({
    url: '/login/cellphone?timestamp=' + timeStamp,
    method: 'POST',
    data: params,
  });
}
//退出
export function logOut() {
  return request({
    url: '/logout?timestamp='+ timeStamp,
    method: 'POST'
  });
}