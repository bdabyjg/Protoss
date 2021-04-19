// pages/home/home.js

import {Home} from 'home-model.js';
var home = new Home();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad:function(){
    this._loadData();
  },
  _loadData:function(){
    var id = 1;
    home.getBannerData(id,(res)=>{
      this.setData({
        'bannerArr':res.items,
      })
      // console.log(res)
    });

    home.getThemeData((res)=>{
      // console.log(res);
      this.setData({
        'themeArr': res,
      })
    });

    home.getProductsData((data)=>{
      // console.log(data)
      this.setData({
        productsArr: data
      })
    })
  
  },//处理异步结果接受的方法
 
  onProductItemTap:function(event){
    //从base这个基类把getDataSet引入并调用，而base从Home里引入了
    var id = home.getDataSet(event,'id');  //id是自己写的变量名，是data-id横线后面的部分，可以换成别的，所以要加单引号作为string
    wx.navigateTo({
      url: "../product/product?id="+id,
    });
  },
  onThemeItemTap:function(event){
    var id = home.getDataSet(event,'id');
    var name = home.getDataSet(event,'name');
    wx.navigateTo({
      url: "../theme/theme?id="+id + '&name=' + name,
    });
  }


})