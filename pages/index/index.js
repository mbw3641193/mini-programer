//index.js
//获取应用实例


Page({
  data: {
    background: ['../../images/index-png_16.png', '../../images/index-png_16.png', '../../images/index-png_16.png'],
    needData:[
      {
        title:'铝合金车轮轻铝合金车轮轻量技术量技术',
        price:20,
        year:2,
        label: ['金属材料', '铸造工艺', '铸造工艺', '铸造工艺']
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
      }
    ]
    
    
  },
  //事件处理函数
  gotoUrl: function(e) {
    
    var src =  e.currentTarget.dataset.src;
    wx.navigateTo({
      url: src
    })
  },
  onLoad: function () {
    
  },
  
})
