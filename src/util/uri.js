export default {
    isProduction:function(){
        let flag=process.env.NODE_ENV != 'dev';
        if(flag){
            //console.log=function(){};
        }
        console.log('process.env.NODE_ENV',process.env.NODE_ENV);
        return flag
    },
    cgi:function(uri="",data={}){
        var base_url=this.isProduction()?"https://009.vking.wang/api":"http://www.linligo.com/api";
        if(typeof uri =='string') return base_url.replace('api','')+uri;
        base_url+='/'+uri.act;
        console.log('isProduction',this.isProduction(),base_url);
        if(base_url.indexOf('{')>-1){
            base_url=base_url.replace(/\{([^\}]+)\}/g,function($0,$1){
                console.log('replace',arguments);
                return data[$1] || "";
            });
        }
        base_url=base_url.replace(/\/+$/,'');
        return base_url;
    },
    user:{act:'wxuser',code:'10000',type:'GET',timeout:0},
    refreshToken:{act:'wxuser/refreshToken',code:'10001',type:'POST',timeout:0},
    miniLogin:{act:'wxuser/miniLogin',code:'10002',type:'POST',timeout:0,silence:false},
    setPhoneNumber:{act:'wxuser/setPhoneNumber',code:'10003',type:'POST',timeout:0,silence:false},
    setShareOpenid:{act:'wxuser/setShareOpenid',code:'10004',type:'POST',timeout:0,silence:true},

    purchaseCreate:{act:'activity',code:'11000',type:'POST',timeout:0},
    purchase:{act:'activity/{id}',code:'11001',type:'GET',timeout:0},
    purchaseMyOrder:{act:'activity/myOrder/{act_id}',code:'11002',type:'GET',timeout:0},
    purchaseMyOrderSet:{act:'activity/myOrder',code:'11003',type:'POST',timeout:0,silence:true},
    purchaseMyOrderDel:{act:'activity/myOrder/{item_id}',code:'11004',type:'DELETE',timeout:0},

    activityPurchase:{act:'activityPurchase',code:'12000',type:'POST',timeout:0},
    activityPurchaseList:{act:'activityPurchase/{act_id}',code:'12001',type:'GET',timeout:0},
    activityPurchaseUpdate:{act:'activityPurchase/{id}',code:'12000',type:'PUT',timeout:0},

    activityOrders:{act:'activityOrders/{act_id}',code:'12000',type:'GET',timeout:0},
    activityOrdersSet:{act:'activityOrders/{order_id}',code:'12000',type:'PUT',timeout:0},

    itemName:{act:'itemName/{name}',code:'12000',type:'GET',timeout:0,silence:true},
}