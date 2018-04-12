// pages/post/post.js
var API = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postDetail:[],
    postReply:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options.id=1;
    this.getPostDetail(options.id)
    this.getPostReply(options.id)
  },
  getPostDetail:function(postId){
    var that =this;
    wx.request({
      url: API.getPostDetail({
        id:postId
      }),
      success:function(res){
        console.log(res);
        that.setData({
          'postDetail':res.data[0]
        })
      }
    })
  },
  getPostReply:function(postId){
    var that = this;
    wx.request({
      url: API.getPostReply({
        topic_id:postId,
        page:1
      }),
      success:function(res){
        console.log(res);
        that.setData({
          postReply:res.data
        });
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