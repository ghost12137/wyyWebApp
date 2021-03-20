import axios from 'axios';
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:9000/', //http://ghost12138.cn1.utools.club/     //http://localhost:9000/
    timeout: 5000,
  });
  //axios拦截器
  //相应拦截器
  instance.interceptors.response.use(response => {
    return response.data;
  }, err => {});
  //发送网络请求
  return instance(config);
}