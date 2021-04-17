
import { Base } from '../../utils/base.js';

class Home extends Base{
    constructor(){
        super();
    }

getBannerData(id,callback){
    var params = {
        url:'banner/'+id,
        sCallback:function(res){
            callback && callback(res);
        }
    }
    this.request(params);
}

// 首页主题
getThemeData(callback){
    var params = {
        url:'theme?ids=1,2,3',
        sCallback:function(data){
            callback && callback(data);
        }
    }
    this.request(params);
}
}
    


export{Home};