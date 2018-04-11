//index.js
//获取应用实例
var Api = require('../../utils/api.js');
const app = getApp()

Page({
  data: {
    hidden: false,
    hot_hidden:false,
    latest:[], 
    hottest:[]   
  },
  onPullDownRefresh: function () {
    this.getLastestTopic();
    this.getHottestTopic();
    console.log('onPullDownRefresh', new Date())
  },
  onLoad: function () {
    var that = this;
    that.getLastestTopic();
    that.getHottestTopic();
  },
  getLastestTopic:function(){
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: Api.getLatestTopic({
        p: 1
      }), 
      success: function (res) {
        console.log(res);
        that.setData({
          latest: res.data
        })
        setTimeout(function () {
          that.setData({
            hidden: true
          })
        }, 300)
      }
      
    })
  },
  getHottestTopic:function(){
    var that = this;
    that.setData({
      hot_hidden: false
    })
    wx.request({
      url: Api.getHottestTopic({
        p:1
      }),
      success:function(res){
        console.log(res);
        that.setData({
          hottest:res.data
        })
        setTimeout(function () {
          that.setData({
            hot_hidden: true
          })
        }, 300)
        
      }
    })
  }
})
