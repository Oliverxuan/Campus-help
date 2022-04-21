Page({
    data: {
        active: 0,
        option1: [
            { text: '全部收货地', value: 0 },
            { text: '#1号楼', value: 1 },
            { text: '#2号楼', value: 2 },
            { text: '#3号楼', value: 3 },
            { text: '#4号楼', value: 4 },
            { text: '#5号楼', value: 5 },
            { text: '#6号楼', value: 6 },
            { text: '#7号楼', value: 7 },
            { text: '#8号楼', value: 8 },
            { text: '#9号楼', value: 9 },
            { text: '#10号楼', value: 10 },
            { text: '#11号楼', value: 11 },
            { text: '#12号楼', value: 12 },
            { text: '#13号楼', value: 13 },
            { text: '#14号楼', value: 14 },
            { text: '#15号楼', value: 15 },
            { text: '#16号楼', value: 16 },
            { text: '#17号楼', value: 17 },
            { text: '#18号楼', value: 18 },
            { text: '#19号楼', value: 19 },
          ],
          option2: [
            { text: '最新排序', value: 'n' },
            { text: '悬赏排序', value: 'm' },
            { text: '时间排序', value: 't' },
          ],
          option3: [
            { text: '全部类型', value: 'all' },
            { text: '快递带取', value: 'express' },
            { text: '校园跑腿', value: 'take' },
            { text: '游戏陪玩', value: 'play' },
            { text: '租借服务', value: 'buy' },
            { text: '代替服务', value: 'peo' },
            { text: '打印服务', value: 'pri' },
            { text: '维修服务', value: 'pri' },
            { text: '其他帮助', value: 'pri' },
          ],
          value1: 0,
          value2: 'n',
          value3:'all',
          rank: [
            { text: '收入排行', value: "mon" },
            { text: '接单排行', value: "get" },
            { text: '土豪排行', value: "ric" },
          ],
          case1: "mon",
      },
    
      onChange(event) {
        wx.showToast({
          title: `切换到标签 ${event.detail.name}`,
          icon: 'none',
        });
      },
    onLoad() {
      this.setData({
        nbTitle: '订单',
      })
    },
    onShow(){
        this.getTabBar().init()
    }
  })