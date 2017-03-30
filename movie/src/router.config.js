import Hot from './components/hot-ing.vue'
import Will from './components/willCome.vue'
import Top from './components/top.vue'

export default{
    routes:[
        {path:'/hot',component:Hot},
        {path:'/will',component:Will},
        {path:'/top',component:Top},
        {path:'*',redirect:'/hot'}
    ]
}
