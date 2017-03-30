import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './router.config'
import Loading from './components/loading.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.component('loading',Loading);
const router = new VueRouter(routerConfig);

new Vue({
    router,
  el: '#app',
  render: h => h(App)
})
