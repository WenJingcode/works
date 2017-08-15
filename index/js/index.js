$(function(){
    var userid = sessionStorage.getItem("userid");
    var openid = sessionStorage.getItem("openid");
    var imgurl = sessionStorage.getItem("imgurl");
    var nikename = sessionStorage.getItem("nikename");

	var hreglist=['web/xiche/html/liststore.html',"web/index/other.html",'web/xiche/html/jing.html','web/xiche/html/quan.html','web/xiche/html/wai.html','','','../../jiayou/liststore.html'];
	//搜索框
	document.getElementById("sreachinput").onclick=function(){
			location.href = "web/index/html/sosoinput.html";
	};

    $("#navlist li").click(function(){
        var i =  $(this).index();
        var txt = $(this).find("span").text();
        switch(i){
            case 0: window.location.href = hreglist[0]+"?num="+i+"&datakey=3";break;
            case 1: window.location.href = hreglist[2]+"?num="+i+"&datakey=2";break;
            case 2: window.location.href = hreglist[3]+"?num="+i+"&datakey=1";break;
            case 3: window.location.href = hreglist[4]+"?num="+i+"&datakey=0";break;
            default:window.location.href = hreglist[1]+"?title="+encodeURI(txt);break;
        }
 
    });


    //我的位置
    var mex = localStorage.getItem("ux");
    var mey = localStorage.getItem("uy");
    var me = [mex,mey];
	//洗车
    // $("#navlist li.xc").click(function(){
     //    //window.location.href = "../../xiche/html/liststore.html";
     //    updateStatus2Show(mex,mey);
	// });
    // function updateStatus2Show(mex,mey){
     //    $.post("../../xiche/html/liststore.html","mex="+mex+"&mey="+mey);
    // }				//ajax url

	//特价商品
    getChanping();
	function getChanping(){
		// $.ajax({
		// 	url:"http://caimeng.wuliu.52funnet.com/GoodsAction!getzhiding",
			// type:'GET',
			// dataType:"json",
			// success:function(data){
			// 	var cpobjlist = data.list;
			// 	console.log(cpobjlist);
			// 	for(var i=0; i<cpobjlist.length;i++){
			//
			// 		}
			//
			// },
			// error:function(data){
			// 	alert("服务器出错");
			// }
		// })
	}
	  function showCP(obj){

	  /*   vat d1 = ""
		 <div class='showchanp'>
			<div class='innerwarp'>
				<div class='wrapimg'></div>
			</div>
			<div class='Ustxt'>
			     <span class='tit'>
			     	 <b>全洗特价</b>
			    	 <mark>100000km</mark>
			     </span>
				<span class='stroe'>仔仔洗车</span>
				<p class='stroe'> 彩盟价格：23元</p>
				<span class='stip'>
					可支持卡卷支付
					<mark>洗车卷：2张</mark>
				</span>

			</div>
		</div>*/

	  }
   // getImg();
//	下方广告位
	function getImg(obj){
	  	var im='<div class="leftad"><a href=""><img src="" alt=""></a></div><div class="rightad"><div class="rightadtop"><a href=""><img src="" alt=""></a></div><div class="rightadcenter"><a href=""><img src="" alt=""></a><a href=""><img src="" alt=""></a></div></div>';
	  	$('.adlist').append(im);
	}
});

