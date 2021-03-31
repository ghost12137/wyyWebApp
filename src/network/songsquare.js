import axios from "axios";
import { request } from "./request";

export function getSongTitleList() {
  return request({
    url: '/playlist/hot'
  });
}