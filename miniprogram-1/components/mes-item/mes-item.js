// components/mes-item/mes-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        mes: {
            name: "Oliver-xuan",
            text: "从图片上看，主要的问题出在文件未找到。通过分析，可以得知miniprogram init是通过复制保存在本地的代码，生成一个组件开发的项目。然而在复制过程中，如果出现文件缺失的情况，项目生成就是报错。",
            pic: [{
                    id: 0,
                    url: "https://img.yzcdn.cn/vant/cat.jpeg"
                },
                {
                    id: 1,
                    url: "https://img.yzcdn.cn/vant/cat.jpeg"
                }

            ],
            time:"2012:22:22:59",
            browse:209
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})