<template>
    <div>
        <h2>正在热映的电影</h2>
        <loading v-show="seen"></loading>
        <div v-show="!seen">
            <div v-for="movie in movies" class="bor col-lg-4 col-lg-2" >
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#">
                            <img class="media-object" :src="movie.images.small" alt="图片">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{movie.title}}</h4><br>
                        <span>类型:<span v-for="gen in movie.genres">{{gen+' '}} </span></span><br>
                        <span>导演:<span v-for="dir in movie.directors">{{dir.name+''}}</span></span><br>
                        <span>主演:<span v-for="cast in movie.casts">{{cast.name+' '}} </span></span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'hot',
        data () {
            return {
                movies:[],
                seen:true
            }
        },
        mounted(){
            this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters',{
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
        width: 25%;
        height: 122px;
        padding:10px;
        display:inline-block;
        text-align: left;
        overflow: hidden;
    }
</style>