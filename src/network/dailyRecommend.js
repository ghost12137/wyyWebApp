import { request } from "./request";
let timeStamp = (new Date()).valueOf();
//获取每日推荐歌曲
export function getDailyRecommendList() {
  return request({
    url: '/recommend/songs?timestamp=' + timeStamp,
    method: 'POST'
  });
}