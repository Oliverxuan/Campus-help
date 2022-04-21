import oxRequest from './request'


export function toLogin(openid,name) {
  return oxRequest.post("/user/login", {
      openid:openid,
      name:name
  })
}
export function toRegister(openid,name) {
  return oxRequest.post("/user/register", {
      openid:openid,
      name:name
  })
}

