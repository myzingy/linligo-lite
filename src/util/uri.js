export default {
    isProduction:function(){
        return process.env.NODE_ENV === 'production';
    },
    cgi:function(uri=""){
        var base_url=this.isProduction()?"https://linli.vking.wang/api":"http://www.linligo.com/api";
        if(typeof uri =='string') return base_url.replace('api','')+uri;
        base_url+='/'+uri.act;
        console.log('isProduction',this.isProduction(),base_url);
        return base_url;
    },
    user:{act:'user',code:'10000',type:'GET',timeout:0},
    refreshToken:{act:'wxuser/refreshToken',code:'10001',type:'POST',timeout:0},
    miniLogin:{act:'wxuser/miniLogin',code:'10002',type:'GET',timeout:0},
    setPhoneNumber:{act:'wxuser/setPhoneNumber',code:'10003',type:'GET',timeout:0},
}