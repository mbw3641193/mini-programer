// pages/need/need.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    filterBool : true,
    currentTab:0,
    currentStatus:0,
    choice:new Array(),
    needTitleList: ['食品饮料', '建筑建材', '居家', '鞋包', '服装', '电器', '洗护', '饮食', '鞋包1', '服装1', '电器1', '洗护1', '饮食1'],
    needInnerList:[
      {
        title:'食品饮料',
        desc: ['食品加工', '果蔬类', '食品添加剂', '水产类', '肉类', '食用油', '酿造类', '发酵类', '方便食品', '食品加工', '果蔬类', '食品添加剂', '水产类', '肉类', '食用油', '酿造类', '发酵类', '方便食品', '食品加工', '果蔬类', '食品添加剂', '水产类', '肉类', '食用油', '酿造类', '发酵类', '方便食品', '食品加工', '果蔬类', '食品添加剂', '水产类', '肉类', '食用油', '酿造类', '发酵类', '方便食品']
      },
      {
        title: '建筑建材',
        desc: ['食品加工', '果蔬类', '食品添加剂', '水产类', '肉类', '食用油', '酿造类', '发酵类', '方便食品']
      },
      {
        title: '居家',
        desc: ['食品加工', '果蔬类', '食品添加剂', '水产类', '肉类', '食用油', '酿造类', '发酵类', '方便食品']
      },
      {
        title: '鞋包',
        desc: ['食品加工', '果蔬类', '食品添加剂', '水产类', '肉类', '食用油', '酿造类', '发酵类', '方便食品']
      },
    ],
    filter:[
      {
        title:'发布时间',
        desc: ['全部','近三天','近一周','近一月']
      },
      {
        title: '需求状态',
        desc: ['状态1', '状态2', '状态3', '状态4']
      },
    ]
  },
  select(e){
    console.log(e.currentTarget.dataset.num);
    this.setData({
      currentTab: e.currentTarget.dataset.num
    })
    
  },
  filter(e) {
    console.log(e.currentTarget.dataset.num);
    this.setData({
      currentStatus: e.currentTarget.dataset.num
    })

  },
  filterChoice(e) {
    var choiceK = "choice["+this.data.currentStatus+"]";
    console.log(e.currentTarget.dataset.num);
    this.setData({
      [choiceK]: e.currentTarget.dataset.num
    })
    console.log(this.data.choice);
    this.setData({
      filterBool: true
    })

  },
  changefilterBool(){
    console.log(this.data.filterBool)
    this.setData({
      filterBool: !this.data.filterBool
    })
  },
  closefilter(){
    this.setData({
      filterBool: true
    })
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