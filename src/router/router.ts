import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index',
        component: () => import('../layout/Layout.vue'),
         children: [
        {
            path: 'index',
            component: () => import('../views/Home.vue'),
            name: 'Home'
        }
    ]
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('../views/errorPage/404.vue'),
        meta: {
        title: '404'
        },
        name: '404'
    }
]
const options: RouterOptions = {
 history: createWebHashHistory(),
 routes,
}
// Router是路由對象類型
const router: Router = createRouter(options);
//路由守衛
router.beforeEach((to, from, next) => {
    console.log(from)
    const teacherId: any = localStorage.teacherId;
    const talkId: any = localStorage.talkId;
 const  isLogin: Boolean =localStorage.token? true : false; 
    if(to.path === "/admin" || to.path === "/login"|| to.path === "/index" || to.path==="/teachers" || to.path === "/user_login" || to.path === "/register" || to.path===`/teacher/${teacherId}` || to.path==='/onetoone' || to.path===`/talk/${talkId}`){
        next()
    } else {
     isLogin  ? next() : next("/index") ;
     
    }
})

export default router