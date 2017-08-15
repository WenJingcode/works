function setLocation(){
    var map, geolocation;
    //加载地图，调用浏览器定位服务
    map = new AMap.Map('container', {});
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            useNative:true
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        geolocation.getCityInfo(oncitys);
        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });
   
  }
   
 //解析定位结果
    function onComplete(data) {
        localStorage.setItem("ux",data.position.getLng());
        localStorage.setItem("uy",data.position.getLat());
    }
    //解析定位错误信息
    function onError(data) {
      //document.getElementById('selectedCityInfo').innerHTML = '点我定位';
    }
    //解析城市定位
    function oncitys(status,data){
    	if(status == 'complete'){
	    	document.getElementById('selectedCityInfo').innerHTML = data.city;
    	}
    }
