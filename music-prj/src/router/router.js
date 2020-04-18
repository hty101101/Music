import Vue from 'vue'
import VueRouter from 'vue-router'
import RecMusic from '../components/RecMusic/RecMusic.vue'
import Hot from '../components/Hot/Hot.vue'
import Search from '../components/Search/Search.vue'


Vue.use(VueRouter)

const router=new VueRouter({
    linkActiveClass:'active',
    routes:[
        {path:'/',redirect:'/recmusic'},
        {path:'/Recmusic',component:RecMusic},
        {path:'/Hot',component:Hot},
        {path:'/Search',component:Search},
        
    ]
})

export default router