$(function(){
  	var wxopenid=sessionStorage.getItem("openid");
    var access_code=getUrlParam('code');
        if (wxopenid==null || wxopenid==""){
            if (access_code==null)  
            {     
                var fromurl=location.href; 
                var url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxffd35de811144d1d&redirect_uri="+encodeURIComponent(fromurl)+"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";  
                location.href=url;  
            }  
            else  
            {     
                $.ajax({
                	url:"http://caimeng.wuliu.52funnet.com/UserAction!getwechat?code="+access_code,
                	dataType:"json",
                	success:function(data){
                		sessionStorage.setItem("userid",data.id);
                		sessionStorage.setItem("openid",data.openid);
				  		sessionStorage.setItem("imgurl",data.imgurl);
				  		sessionStorage.setItem("nikename",data.name);
                	},
                });    
            }  
        }
        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }
  });