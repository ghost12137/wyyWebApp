// 歌单详情页面的网络请求
import { request } from "./request";

export function getSongOrderMsg(id) {
  return request({
    url: '/playlist/detail',
    method: 'GET',
    params: {
      id
    },
  });
}