const app = getApp()
import {
  getBannerList
} from '../../service/music'

// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin:false,
    bannerList: [],
    location: "四川大学",
    avatar:"/assets/IMG_6774.jpg",
    userName:"user",
    bar: [
      {
        id: 0,
        icon:"free-postage",
        name: "快递代取"
      },
      {
        id: 0,
        icon:"newspaper-o",
        name: "打印服务"
      },
      {
        id: 0,
        icon:"logistics",
        name: "校园跑腿"
      },
      {
        id: 0,
        icon:"smile-o",
        name: "游戏陪玩"
      },
      {
        id: 0,
        icon:"after-sale",
        name: "租借服务"
      },
      {
        id: 0,
        icon:"edit",
        name: "代替服务"
      },
      {
        id: 0,
        icon:"bulb-o",
        name: "维修服务"
      },
      {
        id: 1,
        icon:"bullhorn-o",

        name: "其他帮助"
      }
    ],
    info: 25,
    activeNames: ['1'],
    active:2,
    steps: [
      {
        text: '已确认',
        desc: '等待帮助',
      },
      {
        text: '已开始',
        desc: '已开始帮助',
      },
      {
        text: '已完成',
        desc: '已完成帮助',
      },
      {
        text: '结束订单',
        desc: '互相评价',
      },
    ],
    session_key:"null",
    openid:"null"
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //引入全局变量
    const app = getApp()
   
    // 3.请求热门歌单
    this.getBannerList()

    //判断是否登陆
    this.setData({
      islogin:app.baseData.islogin
    })
  },

  getInfo(){
    const info = wx.getStoraxrgeSync('user')
    console.log(info.data);
  },

  //登陆按钮
  loginClick(){
    wx.switchTab({
      url: '/pages/me/me',
    })
},
outClick(){
  wx.clearStorage({
    success(res){
      console.log(res);
    }
  })

},
check(){
  if(wx.getStorageSync('info') && wx.getStorageSync('token')){
  console.log("check");
    const info = wx.getStorageSync('info')
    const r = wx.getStorageSync('user_info')
    this.setData({
      islogin:true,
      userName:r.name,
      avatar: info.avatarUrl,
    })
  }else{
    this.setData({
      islogin:false,
      userName:"请登录",
      avatar:"/assets/IMG_6774.jpg"
    })
  } 
},

  getBannerList() {
    getBannerList().then(res => {
      this.setData({
        bannerList: res.banners
      })
    })
  },
  onShow() {
    this.getTabBar().init();
    this.check()
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
})