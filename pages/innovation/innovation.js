// pages/innovation/innovation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadData: [],
    loadingText: '加载中...',
    arr: [],
    needData: [{
        title: '铝合金车轮轻铝合金车轮轻量技术量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      },
      {
        title: '铝合金车轮轻量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      },
      {
        title: '铝合金车轮轻量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      },
      {
        title: '铝合金车轮轻量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      },
      {
        title: '铝合金车轮轻铝合金车轮轻量技术量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      },
      {
        title: '铝合金车轮轻量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      },
      {
        title: '铝合金车轮轻量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      },
      {
        title: '铝合金车轮轻量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      },
      {
        title: '铝合金车轮轻铝合金车轮轻量技术量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      },
      {
        title: '铝合金车轮轻量技术',
        price: 20,
        year: 2,
        label: ['金属材料', '铸造工艺']
      }

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      loadData: this.data.needData
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log(123)
    wx.showNavigationBarLoading();

    setTimeout(() => {
      wx.hideNavigationBarLoading() //完成停止加载
      this.setData({
        loadData: this.data.needData
      })
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    // var that = this;
    console.log(456);
    if (this.data.arr.length < 51) {
      wx.showNavigationBarLoading();

      setTimeout(() => {
        // wx.hideNavigationBarLoading() //完成停止加载
        this.data.arr = this.data.loadData.concat(this.data.needData)
        this.setData({
          loadData: this.data.arr
        })
        wx.hideNavigationBarLoading() //完成停止加载
      }, 1000)
    } else {
      this.setData({
        loadingText: '到底了'
      })
      
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})