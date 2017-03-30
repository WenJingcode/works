<template>
  <div id="app">
      <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">豆瓣电影</a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav ">
                  <li><router-link to="/hot">正在热映<span class="sr-only">(current)</span></router-link></li>
                  <li><router-link to="/will">即将上映</router-link></li>
                  <li><router-link to="/top">Top250</router-link></li>
              </ul>
              <form class="navbar-form navbar-right hidden-xs">
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="请输入电影信息">
                  </div>
                  <button type="submit" class="btn btn-default">搜索</button>
              </form>
          </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
  </nav>
      <div style="margin-top: 50px;" class="container">
          <transition enter-active-class="animated bounceInLeft" leave-active-class="animated zoomOutRight">
              <router-view></router-view>
          </transition>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
    .container{
        width: 95%;
        height: auto;
        margin:0 auto;
    }
    .navbar-collapse{
        height: 130px;
    }

</style>
