import {request} from "./request.js";

export function getBanner() {
  return request({
    url: '/banner'
  })
}

export function getPlaylists() {
  return request({
    url: '/related/playlist?id=1'
  })
}