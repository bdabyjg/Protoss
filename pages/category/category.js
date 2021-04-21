import { Category } from 'category-model.js';
var category = new Category();


Page({
    data:{},

    onLoad:function (options){
        this._loadData();
    },

    _loadData:function (){
       category.getCategoryType((categoryData)=>{
           this.setData({
               categoryTypeArr:categoryData,
           });
           console.log(categoryData);
           //一定要在回调函数里再一次进行分类详情方法的调用
           category.getProductsByCategory(categoryData[0].id,(data)=>{

               var dataObj = {
                   products:data,
                   topImgUrl:categoryData[0].img.url,
                   title:categoryData[0].name
               };

               this.setData({
                   categoryProducts:dataObj
               })
           });
       });


    },

    onReady:function (){

    }
})