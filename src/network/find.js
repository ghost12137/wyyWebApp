import {request} from './request';
//获取首页-发现信息
export function getFindMultiData() {
  return request({
    url: '/homepage/block/page'
  });
}
//获取首页-圆形图标
export function getFindCircleData() {
  return request({
    url: '/homepage/dragon/ball'
  });
}