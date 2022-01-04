import oxRequest from './request'


export function getBannerList() {
  return oxRequest.get("/banner", {
    type: 2
  })
}

export function getSongRecommend() {
  return oxRequest.get("/personalized")
}

/**
 * 获取榜单 0 飙升 1 热门 2 新歌 3 原创
 * @param {} idx 
 */
export function getTopList(idx) {
  return oxRequest.get("/top/list", {
    idx
  })
}

export function getSongMenuTags() {
  return oxRequest.get("/playlist/hot")
}

/**
 * 请求歌单数据
 * @param {*} cat 类别
 * @param {*} limit 个数
 */
export function getSongMenu(cat = "全部", limit=6) {
  return oxRequest.get("/top/playlist", {
    cat,
    limit
  })
}

/**
 * 歌单详情
 * @param {} id 歌单id 
 */


