Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'home-o',
				text: "大厅",
				url: '/pages/index/index'
			},
			{
				icon: 'logistics',
				text: '帮帮',
				url: '/pages/help/help',
				info:10
			},
			{
				icon: 'smile-comment-o',
				text: '资讯',
				url: '/pages/mes/mes',
				info:9
			},
			{
				icon: 'user-o',
				text: '我的',
				url: '/pages/me/me',
				info:0
			}
		]
	},

	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
