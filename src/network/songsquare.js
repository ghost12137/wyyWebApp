import axios from "axios";
import { request } from "./request";

//获取热门歌单标题
export function getSongTitleList() {
  return request({
    url: '/playlist/hot'
  });
}
//获取精品歌单信息
export function getFineWorkList(type, limit, before) {
  //if (typeof (before) == 'undefined')
  return request({
    url: '/top/playlist/highquality',
    method: 'GET',
    params: {
      before,
      limit
    },
  });
}
// 获取热门歌单信息
export function getHotWorkList(cat, limit, offset) {
  return request({
    url: '/top/playlist',
    method: 'GET',
    params: {
      cat,
      limit,
      offset
    },
  });
}