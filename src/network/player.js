import { request } from "./request";
//获取分类详情
export function getCateList() {
  return request({
    url: '/dj/catelist',
  });
}
//获取具体分类推荐
export function getCateItemList(type) {
  return request({
    url: '/dj/recommend/type',
    method: 'GET',
    params: {
      type
    },
  });
}