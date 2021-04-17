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
    });

    home.getThemeData((res)=>{
      // console.log(res);
      this.setData({
        'themeArr': res,
      })
    });

    home.getProductsData((data)=>{
      console.log(data)
      this.setData({
        productsArr: data
      })
    })
  
  },//处理异步结果接受的方法



})