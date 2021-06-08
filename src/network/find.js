import {request} from "./request.js";

export function getBanner() {
  return request({
    url: '/banner'
  })
}

export function getResult() {
  return request({
    url: '/personalized?limit=30'
  })
}

export function getData() {
  return request({
    url: '/homepage/dragon/ball'
  })
}