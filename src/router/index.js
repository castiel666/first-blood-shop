import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import product from '@/pages/product/product'
import cart from '@/pages/cart/cart'
import news from '@/pages/news/news'
import pay  from '@/pages/pay/pay'
import addedit  from '@/pages/addedit/addedit'
import user from '@/pages/users/user'
import login from '@/pages/users/login'
import chengjiao from '@/pages/product/component/chengjiao'
Vue.use(Router)

export default new Router({
    linkActiveClass:'active',
    mode: 'history', 
    scrollBehavior(to,from,savedposition){
        if(savedposition){
            return savedposition,
            console.log(savedposition)
        } else{
            return {
                x:0,
                y:0
            }
        }
    },
    routes:[
        {
            path:'',
            name:'home',
            component:home,
            meta:{navshow:true}
        },
        {
            path:'/666',
            name:'chengjiao',
            component:chengjiao,

        },
        {
            path:'/product',
            name:'product',
            component:product,
            meta:{index:0,navshow:false}
        },
        {
            path:'/user',
            name:'user',
            component:user,
            meta:{navshow:true ,
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录才能进入的
            },
        },
        {
            path:'/login',
            name:'loginr',
            component:login,
        },
        {
            path:'/cart',
            name:'cart',
            component:cart,
            meta:{navshow:false}
        },
        {
            path:'/pay',
            name:'pay',
            component:pay,
            meta:{navshow:false}
        },
        {
            path:'/news',
            name:'news',
            component:news,
            meta:{navshow:true}
        },
        {
            path:'/addedit',
            name:'addedit',
            component:addedit,
            meta:{navshow:false}
        },

    ]
})
