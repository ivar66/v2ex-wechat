// pages/node/detail.js
var API = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodeDetail : [],
    nodeDetailTopic:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWebNodeDetail(options.id);
    this.getWebNodeTopic(options.node_name);
  },
  // 事件处理函数
  redictDetail: function (e) {
    var id = e.currentTarget.id,
      url = '../post/post?id=' + id;

    wx.navigateTo({
      url: url
    })
  },
  getWebNodeDetail:function(id){
    var that = this;
    wx.request({
      url: API.getWebNodeDetail({
        id:id
      }),
      success:function(res){
        console.log(res);
        that.setData({
          'nodeDetail':res.data
        });
      }
    })
  },
  getWebNodeTopic: function (node_name){
    var that = this;
    wx.request({
      url: API.getWebNodeTopic({
        node_name: node_name
      }),
      success:function(res){
        console.log(res);
        that.setData({
          'nodeDetailTopic':res.data
        });
      }
    })
  }
})