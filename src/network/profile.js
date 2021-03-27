import { request } from "./request";

//获取用户歌单
export function getUserProfileMessge(uid) {
  return request({
    url: '/user/playlist',
    methods: 'GET',
    params: {
      uid
    },
  });
}