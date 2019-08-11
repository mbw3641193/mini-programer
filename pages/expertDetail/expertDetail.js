// pages/expertDetail/expertDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personList:[
      {
        title:'王涛1',
        tag:'高技能人才',
        organ:'威海市威鹰芳香生物工程股份有限公司',
        special: ['威海市威鹰芳香生物工程股份有限公司', '薰衣草种植和繁育技术', '玫瑰花低温加工技术','植物精油提炼技术'],
        detail:'玫瑰花低温烘干装置等14项实用新',
        gain:''
      },
      {
        title: '王涛2',
        tag: '高技能人才',
        organ: '威海市威鹰芳香生物工程股份有限公司',
        special: ['威海市威鹰芳香生物工程股份有限公司', '薰衣草种植和繁育技术', '玫瑰花低温加工技术', '植物精油提炼技术'],
        detail: '玫瑰花低温烘干装置等14项实用新',
        gain: ''
      },
      {
        title: '王涛3',
        tag: '高技能人才',
        organ: '威海市威鹰芳香生物工程股份有限公司',
        special: ['威海市威鹰芳香生物工程股份有限公司', '薰衣草种植和繁育技术', '玫瑰花低温加工技术', '植物精油提炼技术'],
        detail: '玫瑰花低温烘干装置等14项实用新',
        gain: ''
      },
    ],
    currentIndex:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  change(e){
    console.log(e);
    if (e.detail.source == 'touch'){
      console.log('current-----' + e.detail.current);
    }
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