// pages/needFilter/needFilter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filterData: ['周期函数1', '周期函数2','周期函数3'],
    pageBackgroundColor:[],
    pageColor:[],
    selectFilterData: [],

    filterData1: ['周期函数4', '周期函数5周期函数5', '周期函数6'],
    pageBackgroundColor1: [],
    pageColor1: [],
    selectFilterData1: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  changeColor(e){
    console.log(e);
    var index = e.currentTarget.dataset.id;
    var pageBackgroundColor = 'pageBackgroundColor[' + index + ']';
    var pageColor = 'pageColor[' + index + ']';
    var selectFilterData = 'selectFilterData[' + index + ']';
    if (!this.data.selectFilterData[index]){
    this.setData({
      [pageBackgroundColor]: '#f47411',
      [pageColor]:'#fff',
      [selectFilterData]: e.currentTarget.dataset.name,
    })
    }else{
      this.setData({
        [pageBackgroundColor]: '',
        [pageColor]: '',
        [selectFilterData]: '',
      })
    }
    console.log(this.data.selectFilterData)
  },

  goback(){
    
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面

    prevPage.setData({// 这里是需要传递的参数值
      filterData: [...this.data.selectFilterData.filter(o => o !== ''), ...this.data.selectFilterData1.filter(o => o !== '')],
      
      
    })
  

    wx.navigateBack({
      delta: 1
    })

  },

  changeColor1(e) {
    console.log(e);
    var index = e.currentTarget.dataset.id;
    var pageBackgroundColor1 = 'pageBackgroundColor1[' + index + ']';
    var pageColor1 = 'pageColor1[' + index + ']';
    var selectFilterData1 = 'selectFilterData1[' + index + ']';
    if (!this.data.selectFilterData1[index]) {
      this.setData({
        [pageBackgroundColor1]: '#f47411',
        [pageColor1]: '#fff',
        [selectFilterData1]: e.currentTarget.dataset.name,
      })
    } else {
      this.setData({
        [pageBackgroundColor1]: '',
        [pageColor1]: '',
        [selectFilterData1]: '',
      })
    }
    console.log(this.data.selectFilterData)
  },

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