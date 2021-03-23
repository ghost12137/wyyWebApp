import {request} from './request';

//登陆
export function login(params) {
  let timeStamp = (new Date()).valueOf();
  return request({
    url: '/login/cellphone?timestamp=' + timeStamp,
    method: 'POST',
    data: params,
  });
}
//退出
export function logOut() {
  return request({
    url: '/logout'
  });
}