//构建请求基类

import { Config } from '../utils/config.js'


class Base{
    constructor(){
        this.baseRequestUrl = Config.restUrl;

    };
    request(params){
        var url = this.baseRequestUrl + params.url;
        if(!params.type){
            params.type = 'GET';
        }
        wx.request({
            url:url,
            data:params.data,
            method:params.type,
            header:{
                'content-type':'application/json',
                'token':wx.getStorageSync('token'),
            },
            success:function(res){
                // if(params.sCallBack){
                //     params.sCallBack(res);
                // } 这种写法和下面的写法是相同的
                params.sCallBack&&params.sCallBack(res.data);

            },//接受成功的回调结果,s表示success
            fail:function(err){
                console.log(err);
            }
        })
    }
}

export {Base};