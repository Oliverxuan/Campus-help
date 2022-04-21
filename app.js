App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //获取用户特征 openid
    this.login()

  
    //token判断
    this.checkToken()

  },
  login(){
    wx.login({
      success:res=>{
        if (res.code) {
          //发起网络请求
         wx.request({
            url: this.baseData.baseUrl+"user/openid",
            method:"POST",
            data: {
              code: res.code,
              appid:"wxab3f12fb22c35a38",
              secret:"2cd00cd403e74acfd6267649177017e1"
            },
            success(res){
              wx.setStorageSync('user_id', res.data.openid)
              wx.setStorageSync('user_key', res.data.session_key)
            }
          })
        } else {
          console.log('获取失败！' + res.errMsg)
        }
      }
    })

  },
  checkToken(){
    if(wx.getStorageSync('token')){
      console.log("Token success!");
      
    }else{
      console.log("fail!");
     wx.showModal({
       title:"提示",
       content:"请登陆后使用哦",
       cancelText:"游客体验",
       confirmText:"现在登陆",
       success(res){
         if(res.confirm){
           console.log("尝试登陆");
           wx.switchTab({
             url: '/pages/me/me',
           })
         }else{
           console.log("游客模式");
         }
       }
     })
    }
  },

  baseData:{
    localUrl:"http://127.0.0.1:6300",
    baseUrl:"http://127.0.0.1:6300/campus/",
    onlineUrl:"http://121.5.114.161:6901/wx",
    testUrl:"http://127.0.0.1:6300/campus/user/login",
    user:{},
    islogin:false
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
