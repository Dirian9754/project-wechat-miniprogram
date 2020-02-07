// miniprogram/components/nav_index/nav_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [
      { img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      {img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果'},
      { img: 'https://m.360buyimg.com/babel/s120x120_jfs/t1/49107/14/3176/6019/5d0eea59E238562fd/2576bcda7fc37edd.jpg!q70.dpg', text: '水果' }
    ],
    bannerList: [
      {
        img: 'https://m.360buyimg.com/babel/jfs/t1/99528/10/11404/185286/5e33c853E0f1b4bad/0ebc093f29fb23d2.gif'
      },
      {
        img: 'https://m.360buyimg.com/babel/jfs/t1/99528/10/11404/185286/5e33c853E0f1b4bad/0ebc093f29fb23d2.gif'
      },
      {
        img: 'https://m.360buyimg.com/babel/jfs/t1/99528/10/11404/185286/5e33c853E0f1b4bad/0ebc093f29fb23d2.gif'
      }, {
        img: 'https://m.360buyimg.com/babel/jfs/t1/99528/10/11404/185286/5e33c853E0f1b4bad/0ebc093f29fb23d2.gif'
      }
    ],
    recommendList: [
      {
        img: 'https://m.360buyimg.com/babel/s180x180_jfs/t1/6470/27/3945/118495/5bdac42aE04b61c95/5c6e65a37691c602.jpg!q70.dpg',
        describe: '阿燕姐樱桃阿燕姐樱桃',
        price: 19.9
      },
      {
        img: 'https://m.360buyimg.com/babel/s180x180_jfs/t1/6470/27/3945/118495/5bdac42aE04b61c95/5c6e65a37691c602.jpg!q70.dpg',
        describe: '阿燕姐樱桃阿燕姐樱桃',
        price: 19.9
      },
      {
        img: 'https://m.360buyimg.com/babel/s180x180_jfs/t1/6470/27/3945/118495/5bdac42aE04b61c95/5c6e65a37691c602.jpg!q70.dpg',
        describe: '阿燕姐樱桃阿燕姐樱桃',
        price: 19.9
      }, 
      {
        img: 'https://m.360buyimg.com/babel/s180x180_jfs/t1/6470/27/3945/118495/5bdac42aE04b61c95/5c6e65a37691c602.jpg!q70.dpg',
        describe: '阿燕姐樱桃阿燕姐樱桃',
        price: 19.9
      },
      {
        img: 'https://m.360buyimg.com/babel/s180x180_jfs/t1/6470/27/3945/118495/5bdac42aE04b61c95/5c6e65a37691c602.jpg!q70.dpg',
        describe: '阿燕姐樱桃阿燕姐樱桃',
        price: 19.9
      },
      {
        img: 'https://m.360buyimg.com/babel/s180x180_jfs/t1/6470/27/3945/118495/5bdac42aE04b61c95/5c6e65a37691c602.jpg!q70.dpg',
        describe: '阿燕姐樱桃阿燕姐樱桃',
        price: 19.9
      }
    ],
    columnData: {
      banner: "https://m.360buyimg.com/babel/s1065x300_jfs/t1/98526/15/9079/120000/5e0b2505E17f22171/d3323061fb9a4fc9.jpg!q70.dpg",
      goodsList: [
        {
          img: "https://m.360buyimg.com/babel/jfs/t1/106814/22/8566/164162/5e05e2b9E1b17ca2d/dc9941e7ed3ef1e0.png",
          title: "欧德邵 丹东99红颜奶油草莓水果 3斤礼盒装 顺丰空运 ",
          describe: "新鲜水果现摘 精选大果",
          specs: "190g/份",
          nowPrice: "9.9",
          oldPrice: "19.9"
        },
        {
          img: "https://m.360buyimg.com/babel/jfs/t1/106814/22/8566/164162/5e05e2b9E1b17ca2d/dc9941e7ed3ef1e0.png",
          title: "欧德邵 丹东99红颜奶油草莓水果 3斤礼盒装 顺丰空运 ",
          describe: "新鲜水果现摘 精选大果",
          specs: "190g/份",
          nowPrice: "9.9",
          oldPrice: "19.9"
        },
        {
          img: "https://m.360buyimg.com/babel/jfs/t1/106814/22/8566/164162/5e05e2b9E1b17ca2d/dc9941e7ed3ef1e0.png",
          title: "欧德邵 丹东99红颜奶油草莓水果 3斤礼盒装 顺丰空运 ",
          describe: "新鲜水果现摘 精选大果",
          specs: "190g/份",
          nowPrice: "9.9",
          oldPrice: "19.9"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})