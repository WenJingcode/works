<template>
    <div class="top">
        <div class="title">
            <h2>top250排行榜</h2>
        </div>
        <loading v-show="seen"></loading>
        <div class="border" v-show="!seen">
            <div v-for="movie in movies" class="bor">
                <div class="tu">
                    <img :src="movie.images.medium" alt="" class="img">
                </div>
                <div class="left">
                    <h3>{{movie.title}}</h3>
                    <span class="badge">{{movie.rating.average}}</span><br>
                    <span v-for="dir in movie.directors">导演:{{dir.name+'  '}}</span>
                    <span>上映年份:{{movie.year}}</span> <br>
                    <span>类型:<span v-for="gen in movie.genres">{{gen+' '}} </span></span><br>
                    <span>主演:<span v-for="cast in movie.casts">{{cast.name+' '}} </span></span>
                </div>
            </div>
            <button type="button" id="myButton" data-loading-text="Loading..." class="btn btn-block" autocomplete="off" @click="more">
                加载更多...
            </button>
            <template>
                <el-table v-loading="loading" :data="tableData" style="width: 100%">

                </el-table>
            </template>
        </div>
        <a href="javascript:void(0)" id="gotop"></a>
    </div>
</template>
<script>
    export default {
        name: 'top',
        data () {
            return {
                movies:[],
                seen:true,
                start:0,
                loading: false
            }
        },
        mounted(){
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?start='+this.start+'&count=10',{
                    emaluteJSON:true
                }
            ).then(function(res){
                console.log(res.data);
                this.seen=false;
                this.movies=res.data.subjects;
            },function(res){
                console.log('失败');
            });
            $('#gotop').click(function() {
                $('body').animate({
                    scrollTop: 0
                }, 500);
            });
            $(window).scroll(function() {
                if ($(window).scrollTop() == 0) {
                    $('#gotop').css("visibility", "hidden");
                } else {
                    $('#gotop').css("visibility", "visible");
                }
            });
            $('#myButton').on('click', function () {
                var $btn = $(this).button('loading');
                // business logic...
                $btn.button('reset');
            });
        },
        methods:{
            more(){
                this.loading=true;
                this.start+=10;
                this.$http.jsonp('https://api.douban.com/v2/movie/top250?start='+this.start+'&count=10',{
                        emaluteJSON:true
                    }
                ).then(function(res){
                    console.log(res.data);
                    this.seen=false;
                    this.loading=false;
                    this.movies=this.movies.concat(res.data.subjects);
                },function(res){
                    console.log('失败');
                });
            }
        }
    }
</script>
<style scoped>
    .top{
        width: 90%;
        margin:0 auto;
    }
    .title{
        width: 85%;
        height: auto;
        border:1px solid #f0ead8;
        margin:0 auto;
        padding-left: 20px;
    }
    .bor{
        width:85%;
        height:150px;
        border:1px solid #f0ead8;
        margin:0 auto;
        margin-top: 10px;
    }

    .img{
        float: left;
    }
    .left{
        margin-left: 140px;
    }
    #myButton{
        margin-bottom: 50px;
        background-color: transparent;
        color: skyblue;
    }
    #gotop{
        display: block;
        width: 50px;
        height: 50px;
        position: fixed;
        right: -12px;
        bottom: 50px;
        background:url("../assets/Top.jpg");
        visibility: hidden;
    }
</style>