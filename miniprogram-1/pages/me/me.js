// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      name: "Oliver-xuan",
      avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
      do:10,
      help:12,
      allM:388
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

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

})