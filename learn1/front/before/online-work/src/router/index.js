import Vue from 'vue';
import Router from 'vue-router';

// 组件
import Login from '@/views/Login';
import BackHome from '@/views/BackHome';
import MemberList from '@/views/Member/MemberList'
import MemberLevel from '@/views/Member/MemberLevel'
import NotFound from '@/views/NotFound'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            name: 'Login',
            path: '/login',
            component: Login
        },
        {
            name: 'Index',
            path: '/',
            component: Login
        },
        {
            name: 'BackHome',
            path: '/backHome/:userName',
            component: BackHome,
            children: [{
                    name: 'MemberLevel',
                    path: '/member/level/:id',
                    component: MemberLevel,
                    props: true
                },
                {
                    name: 'MemberList',
                    path: '/member/list',
                    component: MemberList
                },
            ]
        },
        {
            name: "BackLogin",
            path: '/goLogin/:userName',
            redirect: "/login/:userName"
        },
        {
            name: "Logout",
            path: '/logout',
            component: Login
        },
        {
            name: "ToBackHome",
            path: '/gobackHome/:userName',
            redirect: "/backHome/:userName"
        },
        {
            name: "NotFound",
            path: '*',
            component: NotFound
        },
    ]
})