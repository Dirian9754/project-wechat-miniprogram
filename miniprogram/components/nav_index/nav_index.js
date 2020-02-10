const db = wx.cloud.database()
Component({

  properties: {
    menuList: Array,
    bannerList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    allMenu: [],
    menuList: [],
    bannerList: [],
    recommendList: [
      {
        img: 'https://m.360buyimg.com/babel/s180x180_jfs/t1/6470/27/3945/118495/5bdac42aE04b61c95/5c6e65a37691c602.jpg!q70.dpg',
        describe: '阿燕姐樱桃阿燕姐樱桃',
        price: 19.9
      },
      {
        img: 'https://m.360buyimg.com/babel/s345x345_jfs/t1/90606/9/4046/637730/5de484dbE424ae3d1/c576ce7e7e2835cd.jpg!q70.dpg',
        describe: '元盛 黑椒调理牛排套餐750g/套(5片) 牛肉 生鲜礼盒',
        price: 64
      },
      {
        img: 'https://m.360buyimg.com/babel/s345x345_jfs/t1/80292/10/7963/447267/5d5ded40E865d5cca/68dc54cb445cb940.jpg!q70.dpg',
        describe: '贝贝南瓜  2.5kg 栗香小南瓜 年货礼盒 板栗小南瓜 新鲜蔬菜',
        price: 42.9
      }, 
      {
        img: 'https://m.360buyimg.com/babel/s180x180_jfs/t1/6470/27/3945/118495/5bdac42aE04b61c95/5c6e65a37691c602.jpg!q70.dpg',
        describe: '阿燕姐樱桃阿燕姐樱桃',
        price: 19.9
      },
      {
        img: 'https://m.360buyimg.com/babel/s345x345_jfs/t1/90606/9/4046/637730/5de484dbE424ae3d1/c576ce7e7e2835cd.jpg!q70.dpg',
        describe: '元盛 黑椒调理牛排套餐750g/套(5片) 牛肉 生鲜礼盒',
        price: 64
      },
      {
        img: 'https://m.360buyimg.com/babel/s345x345_jfs/t1/80292/10/7963/447267/5d5ded40E865d5cca/68dc54cb445cb940.jpg!q70.dpg',
        describe: '贝贝南瓜  2.5kg 栗香小南瓜 年货礼盒 板栗小南瓜 新鲜蔬菜',
        price: 42.9
      }, 
    ],
    columnData: {
      banner: "https://m.360buyimg.com/babel/s1125x450_jfs/t1/85736/40/9481/195288/5e0df686Ee770948e/a7ff883aaa554802.jpg!q70.dpg",
      goodsList: [
        {
          img: "https://m.360buyimg.com/babel/jfs/t1/87973/24/9367/165788/5e0df4b0E19394d0a/b74b30f87bddf505.jpg!q70.dpg",
          title: "迪士尼米奇系列 阳光橙",
          describe: "新鲜水果现摘 精选大果",
          specs: "5kg/份",
          nowPrice: "139",
          oldPrice: "89"
        },
        {
          img: "https://m.360buyimg.com/babel/jfs/t1/110595/19/3133/155690/5e0df481Edbf38b21/12bc6d1d893b87de.jpg!q70.dpg",
          title: "迪士尼米奇系列 阳光苹果 ",
          describe: "新鲜水果现摘 精选大果",
          specs: "15个/份",
          nowPrice: "89.9",
          oldPrice: "69.9"
        },
        {
          img: "https://m.360buyimg.com/babel/jfs/t1/102619/13/9208/153029/5e0df493E9e8437de/44037dd510b43731.jpg!q70.dpg",
          title: "欧迪士尼米奇系列 阿克苏苹果 ",
          describe: "新鲜水果现摘 精选大果",
          specs: "15个/份",
          nowPrice: "99.9",
          oldPrice: "79.9"
        }
      ]
    }
  },

  methods: {
    // 添加菜单
    addMenu: function() {
      if (this.data.menuList.length === 10) {
        this.setData({
          menuList: this.data.allMenu
        })
      } else {
        this.setData({
          menuList: [...this.data.allMenu].splice(0, 10)
        })
      }
    }
  },

  lifetimes: {
    attached: function () {
      
      // 在组件实例进入页面节点树时执行
      // 初始化菜单
      db.collection('menu').get().then(res => {
        this.setData({
          allMenu: [...res.data],
          menuList: res.data.splice(0, 10)
        })
      })
      // 轮播图
      db.collection('banners').get().then(res => {
        this.setData({
          bannerList: res.data
        })
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    }
  }
})