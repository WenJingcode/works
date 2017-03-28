<template>
  <div class="yoga">
    <div class="header">
      <div class="nav">
        <div class="navWrap">
          <img src="./img/png01.png" width="25" height="20" alt="">
          <ul>
            <li><a href="#">设为首页</a></li>
            <li><a href="#">加入收藏</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <div class="banNav">
          <ul id="nav">
            <li class="current">首页</li>
            <li>菩心简介</li>
            <li>团队介绍</li>
            <li>场所概况</li>
            <li>瑜伽设备</li>
            <li>课程安排</li>
            <li>论坛</li>
            <li>招贤纳士</li>
            <li>合作伙伴</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bulletin">
      <span class="title">网站公告:</span>
      <span>{{msg}}</span>
    </div>
    <div class="footer">
      <div class="introduce">
        <ul>
          <li>
            <div class="introTitle">
              <div class="titleLeft">
                <h2>菩心简介</h2>
              </div>
              <div class="titleRight">
                <img src="./img/footerR.png" alt="">
                <span>more</span>
                <i> > </i>
              </div>
            </div>
            <div class="main">
              <div class="picWrap">
                <img src="./img/pic.png" width="105" height="83" alt="">
              </div>
              <p>{{con}}</p>
            </div>
          </li>
          <li>
            <div class="introTitle">
              <div class="titleLeft">
                <h2>团队介绍</h2>
              </div>
              <div class="titleRight">
                <img src="./img/footerR.png" alt="">
                <span>more</span>
                <i> > </i>
              </div>
            </div>
            <div class="main2">
              <h3><img src="./img/ya.png" alt="">{{text1}}</h3>
              <h3><img src="./img/ya.png" alt="">{{text2}}</h3>
              <h3><img src="./img/ya.png" alt="">{{text3}}</h3>
              <h3><img src="./img/ya.png" alt="">{{text4}}</h3>
            </div>
          </li>
          <li>
            <div class="introTitle">
              <div class="titleLeft">
                <h2>新闻中心</h2>
              </div>
              <div class="titleRight">
                <img src="./img/footerR.png" alt="">
                <span>more</span>
                <i> > </i>
              </div>
            </div>
            <div class="main2">
              <h3><img src="./img/ya.png" alt="">{{text1}}</h3>
              <h3><img src="./img/ya.png" alt="">{{text2}}</h3>
              <h3><img src="./img/ya.png" alt="">{{text3}}</h3>
              <h3><img src="./img/ya.png" alt="">{{text4}}</h3>
            </div>
          </li>
        </ul>
      </div>
      <!--轮播图-->
      <div class="row">
        <span class="arrowLeft" id="left"></span>
        <ul >
          <li class="pic"  v-for="(pic,index) in pics"><img :src="pic" width="134" height="103" alt=""></li>
        </ul>
        <span class="arrowRight" id="right"></span>
      </div>
      <div class="end">
        <span class="first">{{end1}}</span><br>
        <span>{{end2}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'yoga',
  data () {
    return {
        msg: '亚洲瑜伽协会特聘印度籍瑜伽大师。有五年的教学经验，1999年在印MLINA瑜伽中心任教，多次荣获国际瑜伽大赛。亚洲瑜伽协会常务理事，具有丰富的瑜伽教学经验。',
        con: '瑜伽（YOGA）是一个通过提升意识，帮助人类充分发挥潜能的体系。瑜伽姿势运用年在世界多',
        text1: '香港亚洲瑜伽大会精彩难忘瞬间',
        text2: '印度艾杨格学院中国传承班感动瞬间',
        text3: '湖北省第二届瑜伽大赛回顾',
        text4: '受邀国家体育总会“吃动平衡，走向健康，营养均衡”',
        end1: '联系地址： 南京市幕府东路109号（仙人湖度假村） 联系电话：xxxxxxx  zzzzzzz   传真号码：xxxxxxx',
        end2: '中国顶级瑜伽教练权威认证教育机构-瑜伽导师培训基地。由国际瑜伽教育学院主办，颁发国际通用的瑜伽教练资格证书，打造瑜伽专业人才！',
        pics: {
            pic1: '../../static/img/pic01.png',
            pic2: '../../static/img/pic02.png',
            pic3: '../../static/img/pic03.png',
            pic4: '../../static/img/pic04.png',
            pic5: '../../static/img/pic05.png',
            pic6: '../../static/img/pic01.png',
            pic7: '../../static/img/pic02.png'
        }
    }
  },
  mounted(){
      $("#nav li").mouseover(function(){
          $(this).addClass('current').siblings().removeClass("current");
      });

      $('#left').click(function(){
          $('.pic').css({
              'left':'0'
          });
      });
      $('#right').click(function(){
          $('.pic').css({
              'left':'-144px'
          });
      })
  }
}
</script>

<style scoped>

/*头部*/
.nav{
  width: 100%;
  height: 40px;
  background-color: #456548;
  position: relative;
}
.navWrap{
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  height: 100%;
  align-items: center;
}
.navWrap ul{
  display: flex;
  flex-direction: row;
  height: 12px;
  margin-right: 180px;
}
.navWrap ul li{
  padding-right: 9px;
  padding-left: 9px;
  line-height: 12px;
  border-right: 1px solid #FFFFFF;
}
.navWrap ul li a{
  color: #FFFFFF;
  font-size:12px;
}
.navWrap ul li:last-child{
  padding-right: 0;
  border-right: none;
}
/*banner*/
.banner{
  width: 100%;
  height: 575px;
  background:url("./img/banner.png")no-repeat;
  -webkit-background-size:100% 575px;
  background-size:100% 575px;
  position: relative;
}
.banNav{
  position: absolute;
  top:83px ;
  left:493px;
}
.banner ul{
  display: flex;
  flex-direction: row;
}
.banner ul li{
  width: 75px;
  height: 33px;
  text-align: center;
  line-height: 33px;
  color: #365238;
  cursor: pointer;
}
.banner ul .current{
  background-color: #255920;
  color: #fff;
}
/*公告*/
.bulletin{
  width: 100%;
  height: 45px;
  padding-left: 160px;
  padding-right: 160px;
  box-sizing: border-box;
}
.bulletin span{
  font-size: 12px;
  line-height: 45px;
  color: #7a7a7a;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.bulletin  .title{
  font-size: 15px;
  color: #38563a;
  margin-right: 15px;
}
/*页脚*/
.footer{
  width: 100%;
  height: 420px;
  background:url('./img/footBG.png')no-repeat;
  -webkit-background-size:100% 420px;
  background-size:100% 420px;
  padding: 20px  160px;
  box-sizing: border-box;
}
.introduce ul{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.introduce ul li{
  width: 33.33%;
  height: 160px;
  padding: 0 25px;
  box-sizing: border-box;
}
.introduce ul li .introTitle{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd8d2;
}
.introduce ul li .titleLeft{
  width: 82px;
  height: 26px;
  background-color: #4ac37b;
  border-radius: 5px 0;
}
.introduce ul li h2{
  text-align: center;
  color: #fff;
  line-height: 26px;
}
.introduce ul li .titleRight{
    display: flex;
  align-items: center;
  cursor: pointer;
}
.introduce ul li .titleRight span{
  margin-left: 20px;
  margin-right: 5px;
  color: #666561;
}
.main{
  display: flex;
  flex-direction: row;
}
  .picWrap{
    width: 106px;
    height: 84px;
    margin-top: 18px;
    border:1px solid #d7d7d7;
  }
.main p{
  margin-top: 19px;
  color: #777777;
  margin-left: 18px;
  margin-right: 15px;
  font-size: 12px;
}
.main2{
  padding-top: 19px;
}
.main2 h3{
  font-size: 12px;
  color: #777777;
  margin-left: 18px;
  margin-right: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 8px;
}
.main2 h3:last-child{
  margin-bottom: 0;
}
  /*轮播图*/
.row{
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.row span{
  display: inline-block;
  width: 35px;
  height: 55px;
  cursor: pointer;
}
.arrowLeft{
  background:url('./img/rL.png')no-repeat;
  -webkit-background-size:35px 55px;
  background-size:29px 54px;
}
.arrowRight{
  background:url('./img/rr.png')no-repeat;
  -webkit-background-size:35px 55px;
  background-size:35px 55px;
}
.row ul{
  display: flex;
  flex-direction: row;
  margin-left: 35px;
  margin-right: 35px;
  overflow: hidden;

}
.row ul li{
  width: 137px;
  height: 107px;
  margin-right: 16px;
  border: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
}
.row ul li:last-child{
  margin-right: 0;
}
/*end*/
.end{
  margin-top: 24px;
  text-align: center;
  color: #255920;
  font-size: 12px;
  margin-bottom: 20px;
}
.first{
  margin-bottom: 16px;
}
</style>
