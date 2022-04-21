import {
 toLogin,
 toRegister
} from '../../service/user'

// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin:false,
    bar:[
    {
      icon:"user-o",
      mes:"个人信息"
    },
    {
      icon:"location-o",
      mes:"我的地址"
    },
    {
      icon:"user-o",
      mes:"我的发布"
    },
    {
      icon:"user-o",
      mes:"我的帮助"
    }
    ],
    user: {
      id: "0001",
      name: wx.getStorageSync('info').nickName || "未登录",
      avatar: wx.getStorageSync('info').avatarUrl || "/assets/IMG_6774.jpg",
      do:0,
      help:0,
      allM:0
    }
  },
  barClick:function(event){
    const index = event.currentTarget.dataset.index
    console.log(index)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      nbTitle: '我的',
    })
    if(!wx.getStorageSync('token')){
      this.setData({
        user: {
          name:"点击一键登陆，体验完整功能!",
          id:"0",
        avatar: "/assets/IMG_6774.jpg",
          name: wx.getStorageSync('info').nickName || "未登录",
          avatar: wx.getStorageSync('info').avatarUrl || "/assets/IMG_6774.jpg",
          do:0,
          help:0,
          allM:0
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },


  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {
  // },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  onShow() {
    this.getTabBar().init();
    this.check()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  loginClick(){
    // wx.setStorageSync('token', "123")
    //获取用户信息
    if(wx.getStorageSync('user_id')){
      wx.getUserProfile({
        desc: '登陆信息验证',
        success:res=>{
          const app =getApp()
          wx.setStorageSync('info', res.userInfo)
          const id = wx.getStorageSync('user_id')
          const {nickName} = res.userInfo

          toLogin(id,nickName).then(res=>{
            if(res === 230){
              console.log("尝试创建新用户");
              toRegister(id,nickName).then(res=>{
                console.log(nickName+"创建成功！");
                wx.setStorageSync('token', res.token)
              wx.setStorageSync('user_name', res.name)

              if(wx.getStorageSync('token') && wx.getStorageSync('info')){
                console.log(123);
                wx.setStorageSync('user_info', res.result)
                const r = res.result
                console.log(r);
                this.setData({
                  islogin:true,
                  user: {
                    name:r.name,
                    id:r.id,
                    avatar: wx.getStorageSync('info').avatarUrl || "/assets/IMG_6774.jpg",
                    do:r.do,
                    help:r.help,
                    allM:r.allM
                  }
                })
              }
              })
            }else {
              console.log(123);
              wx.setStorageSync('token', res.token)
              wx.setStorageSync('user_name', res.name)

              if(wx.getStorageSync('token') && wx.getStorageSync('info')){
                wx.setStorageSync('user_info', res.result)
                const r = res.result
                console.log(r);
                this.setData({
                  islogin:true,
                  user: {
                    name:r.name,
                    id:r.id,
                    avatar: wx.getStorageSync('info').avatarUrl || "/assets/IMG_6774.jpg",
                    do:r.do,
                    help:r.help,
                    allM:r.allM
                  }
                })
              }
            }
          },err=>{
            console.log(err);
          })
        },
        fail(err){
      console.log(err);
        }
      })
    }else{
      console.log("loginClick error");
      wx.showToast({
        title: '登陆失败',
      })
    }
    
  },
  login(){
    wx.login({
      success:res=>{
        if (res.code) {
          //发起网络请求
         wx.request({
            url: getApp().baseData.baseUrl+"user/openid",
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
  outClick(){
    wx.showModal({
      title:"提示",
       content:"是否退出当前登陆？",
       cancelText:"否",
       confirmText:"是",
      success:res=>{
        if(res.confirm){
          wx.clearStorage({
            success: (res) => {
              console.log("clear Storage 退出成功 ！")
              wx.switchTab({
                url: '/pages/index/index',
              })
            },
          })
        }else{
          console.log("取消退出");
        }
      },
      fail:err=>{
        console.log("继续使用")
      }
    })
    this.login()

  },
  check(){
    if(wx.getStorageSync('info') && wx.getStorageSync('token')){
      console.log("已登陆");
      const r = wx.getStorageSync('user_info')
      this.setData({
        islogin:true,
        user: {
          name:r.name,
          id:r.id,
          avatar: wx.getStorageSync('info').avatarUrl || "/assets/IMG_6774.jpg",
          do:r.do,
          help:r.help,
          allM:r.allM
        }
      })
    }else{
      this.setData({
        islogin:false,
        user: {
          id: "0001",
          name: wx.getStorageSync('info').nickName || "未登录",
          avatar: wx.getStorageSync('info').avatarUrl || "/assets/IMG_6774.jpg",
          do:0,
          help:0,
          allM:0
        }
      })
    }
  },


})