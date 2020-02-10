const db = wx.cloud.database()
let lock = true
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify: [],
    kinds: [],
    enabled: ''
  },

  // 选择分类
  chooseClassify(e) {
    const id = e.currentTarget.dataset.id
    if (lock) {
      lock = false
      db.collection('kinds').where({
        classify_id: id
      }).get().then(res => {
        const classify = this.data.classify
        this.setData({
          kinds: res.data,
          enabled: id
        })
        lock = true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  分类列表
    db.collection('classify').limit(20).get({
      success: res => {
        const classify = res.data
        const enabled = classify[0]._id
        //首项列表
        db.collection('kinds').where({
          classify_id: enabled
        }).get().then(res => {
          this.setData({
            classify,
            kinds: res.data,
            enabled
          })
        })
      }
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