
import { Base } from '../../utils/base.js';

class Home extends Base{
    constructor(){
        super();
    }

getBannerData(id,callBack){
    var params = {
        url:'banner/'+id,
        sCallBack:function(res){
            callBack && callBack(res);
        }
    }
    this.request(params);
}
}
            
        

        // wx.request({
        //     url:'http://z.cn:8020/index.php/api/v1/banner/' + id,//获取banner图的服务器接口
        //     method:'GET',
        //     success:function(res){
        //         // console.log(res);
        //         // return res;
        //         callBack(res);

        //     }//依靠这个回调函数返回一个接收的结果，res代表服务器返回的结果
        // })
    


export{Home};