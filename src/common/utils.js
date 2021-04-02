//公共的方法
//调整播放量的量级
export function adjustCount(count) {
  if (count >= 1.0E+8) {
    return Math.floor(count / 1.0E+8) + '亿';
  } else if (count >= 1.0E+4) {
    return Math.floor(count / 1.0E+4) + '万';
  } else return count;
}