import oxRequest from './request'


export function getBannerList() {
  return oxRequest.get("/banner", {
    type: 2
  })
}

