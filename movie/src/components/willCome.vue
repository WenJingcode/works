<template>
    <div>
        <h2>即将上映的电影</h2>
        <loading v-show="seen"></loading>
        <div class="border" v-show="!seen">
            <div v-for="movie in movies" class="bor">
                <div class="media">
                    <a href="#">
                        <img class="media-object" :src="movie.images.large" alt="图片">
                    </a>
                    <div class="media-body text-center" style="margin-top: 10px;">
                        <h4 class="text-center" >{{movie.title+' '}}<span class="badge">{{movie.rating.average}}</span></h4>

                        <!--<span class="media-heading" v-for="gen in movie.genres">{{gen+' '}}</span>-->
                        <!--<h4 class="media-heading" v-for="dir in movie.directors">导演:{{dir.name}}</h4>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'will',
        data () {
            return {
                movies:[],
                seen:true
            }
        },
        mounted(){
            this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon',{
                    emaluteJSON:true
                }
            ).then(function(res){
                console.log(res.data);
                this.seen=false;
                this.movies=res.data.subjects;
            },function(res){
                console.log('失败');
            });
        }
    }
</script>
<style scoped>
    .bor{
        padding:10px;
        width: 25%;
        height:auto;
        display:inline-block;
        text-align: center;
        overflow: hidden;
        margin-right: -1px;
        margin-bottom: -6px;
    }
</style>