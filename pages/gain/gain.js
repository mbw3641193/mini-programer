// pages/need/need.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadData: [],
    loadingText: '加载中...',
    arr: [],
    filterData: [],
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

    ],
    inputValue: '',
  },
  // select(e){
  //   console.log(e.currentTarget.dataset.num);
  //   this.setData({
  //     currentTab: e.currentTarget.dataset.num
  //   })

  // },
  // filter(e) {
  //   console.log(e.currentTarget.dataset.num);
  //   this.setData({
  //     currentStatus: e.currentTarget.dataset.num
  //   })

  // },
  // filterChoice(e) {
  //   var choiceK = "choice["+this.data.currentStatus+"]";
  //   console.log(e.currentTarget.dataset.num);
  //   this.setData({
  //     [choiceK]: e.currentTarget.dataset.num
  //   })
  //   console.log(this.data.choice);
  //   this.setData({
  //     filterBool: true
  //   })

  // },
  // changefilterBool(){
  //   console.log(this.data.filterBool)
  //   this.setData({
  //     filterBool: !this.data.filterBool
  //   })
  // },
  // closefilter(){
  //   this.setData({
  //     filterBool: true
  //   })
  // },
  gotoUrl: function (e) {

    var src = e.currentTarget.dataset.src;
    wx.navigateTo({
      url: src
    })
  },
  removeFilter(e) {
    console.log(e.currentTarget.dataset.id);
    this.setData({
      filterData: this.data.filterData.filter((o, i) => i !== e.currentTarget.dataset.id)
    })
    console.log(this.data.filterData)
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  gotoDetail() {
    wx.navigateTo({
      url: '../needFilter/needFilter',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    console.log(this.data.selectFilterData);
    this.setData({
      loadData: this.data.needData
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
  onReachBottom: function () {
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
  onShareAppMessage: function () {

  }
})