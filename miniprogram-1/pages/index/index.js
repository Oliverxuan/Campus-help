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
    bannerList: [],
    location: "四川大学",
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

    // 3.请求热门歌单
    this.getBannerList()


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