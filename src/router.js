import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/',    component: () => import('./view/home/index.vue') },
        {path: '/index', component: () => import('./view/home/index.vue')},
        {
            path: '/river', component: () => import('./view/affair/affair-river.vue'), children: [
                {
                    path: '/river/allclear',
                    component: () => import('./view/affair/api/allclear.vue')
                },
                {
                    path: '/river/pig',
                    component: () => import('./view/affair/api/pig.vue')
                },
                {
                    path: '/river/sewage',
                    component: () => import('./view/affair/api/sewage.vue')
                },
            ]
        },
        {path: '/river/task',component: () => import('./view/affair/affairChildren/task.vue')},
        {path: '/river/eventAn',component: () => import('./view/affair/affairChildren/eventAn.vue')},
        {path: '/river/assess',component: () => import('./view/affair/affairChildren/assess.vue')},

        {path:'/organize',component: () => import('./view/organize/organize-info.vue')},
        // {path: '/river/asess',component: () =>('./view/affair/affairChildren/')}

        {path:'/file',component: () => import('./view/file/file-data.vue'), children: [
            {
                path:'/file/guidang',
                component: () => import('./view/file/api/guidang.vue')
            },
            {
                path:'/file/falv',
                component: () => import('./view/file/api/falv.vue')
            },
            {
                path:'/file/yihe',
                component: () => import('./view/file/api/yihe.vue')
            },
            {
                path:'/file/fangan',
                component: () => import('./view/file/api/fangan.vue')
            },
            {
                path:'/file/zhuangtai',
                component: () => import('./view/file/api/zhuangtai.vue')
            }
        ] },
        {path:'/work',component: () => import('./view/work/work-tai.vue'), children:[
            {
                path:'/work/banli' ,
                component: () => import('./view/work/api/banli.vue')
            },
            {
                path:'/work/areaEvent' ,
                component: () => import('./view/work/api/areaEvent.vue')
            }
        ]},

        {path:'/info',  component: () => import('./view/info/info-new.vue')},
        {path:'/monitor',  component: () => import('./view/monitor/monitor-video.vue')}


















        // { path: '/customer/list',       component: () => import('./views/customer/list.vue') },
        // { path: '/customer/vip-list',   component: () => import('./views/customer/vipcard/vip-list.vue') },
        // { path: '/order/list',          component: () => import('./views/order/list.vue') },
        // { path: '/goods/list',          component: () => import('./views/goods/list.vue') },
        // { path: '/home/counter',        component: () => import('./views/home/counter/home.vue') },
        // { path: '/home/system/setup',   component: () => import('./views/home/system/setup.vue') },
        // { path: '/home/system/passwd',  component: () => import('./views/home/system/passwd.vue') },
        // { path: '/home/system/myinfo',  component: () => import('./views/home/system/myinfo.vue') },
    ]
})
