// pages/expertDetail/expertDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personList: [
      {
        title: '威海市威鹰芳香生物工程股份有限公司1威海市威鹰芳香生物工程股份有限公司1',
        tag: '服务公司',
        organ: '威海市威鹰芳香生物工程股份有限公司',
        special: '在电动汽车核心技术方面具备了一整套关键零部件的研发能力，再锂电池管理系统、整车控制器、充电设备、电机控制器等方面都初步形成了批量生产能力。',
        detail: '公司自成立之前便酝酿新能源纯电动汽车新技术、新产品的开发与研究，现在已经批量应用于市场，在电动汽车核心技术方面具备了一整套关键零部件的研发能力，再锂电池管理系统、整车控制器、充电设备、电机控制器等方面都初步形成了批量生产能力。我公司已经申请多项专利。掌握了电动汽车系统的核心技术、标定技术和试验验证技术。在当前经济环境下，我司将为依托在新能源、新技术方',
        gain: '',
        address: '环翠区',
      },
      {
        title: '威海市威鹰芳香生物工程股份有限公司2',
        tag: '服务公司',
        organ: '威海市威鹰芳香生物工程股份有限公司',
        special: '在电动汽车核心技术方面具备了一整套关键零部件的研发能力，再锂电池管理系统、整车控制器、充电设备、电机控制器等方面都初步形成了批量生产能力。',
        detail: '公司自成立之前便酝酿新能源纯电动汽车新技术、新产品的开发与研究，现在已经批量应用于市场，在电动汽车核心技术方面具备了一整套关键零部件的研发能力，再锂电池管理系统、整车控制器、充电设备、电机控制器等方面都初步形成了批量生产能力。我公司已经申请多项专利。掌握了电动汽车系统的核心技术、标定技术和试验验证技术。在当前经济环境下，我司将为依托在新能源、新技术方',
        gain: '',
        address:'环翠区',
      },
      {
        title: '威海市威鹰芳香生物工程股份有限公司3',
        tag: '服务公司',
        organ: '威海市威鹰芳香生物工程股份有限公司',
        special: '在电动汽车核心技术方面具备了一整套关键零部件的研发能力，再锂电池管理系统、整车控制器、充电设备、电机控制器等方面都初步形成了批量生产能力。',
        detail: '公司自成立之前便酝酿新能源纯电动汽车新技术、新产品的开发与研究，现在已经批量应用于市场，在电动汽车核心技术方面具备了一整套关键零部件的研发能力，再锂电池管理系统、整车控制器、充电设备、电机控制器等方面都初步形成了批量生产能力。我公司已经申请多项专利。掌握了电动汽车系统的核心技术、标定技术和试验验证技术。在当前经济环境下，我司将为依托在新能源、新技术方',
        gain: '',
        address: '环翠区',
      },
    ],
    currentIndex: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  change(e) {
    console.log(e);
    if (e.detail.source == 'touch') {
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