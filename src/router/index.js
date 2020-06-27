import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import myvue from '@/components/views/myvue'
const message = () =>
    import ('../components/message')
Vue.use(Router) //use插件





const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,

    }, {
        path: '/first',
        name: 'First',
        component: First,
        children: [{
                path: 'news',
                component: () =>
                    import ('../components/news')
            },
            {
                path: 'message',
                component: message
            }
        ]
    }, {
        path: '/myvue',
        name: 'myvue',
        component: myvue
    }, {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
            title: 'hello'
        }
    }]
})

//导航守卫 前置守卫 全局守卫
router.beforeEach((to, from, next) => {
    // ${//to and from are Route Object,next() must be called to resolve the hook}
    document.title = to.matched[0].meta.title;
    console.log(to);
    next() //需要调用这个

})

//后置钩子


export default router