/*
 * @Author: yz
 * @Date: 2022-05-05 16:13:01
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\router\modules\6-alert.js
 * 
 */
let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue") //二级菜单专属

export default {
    path: '/alert',
    name: 'alert',
    redirect: {
        name: "base-alert"
    },
    component: layout,
    meta: {
        title: '弹窗',
        icon: "program-code",
    },
    children: [{
            path: 'base',
            name: 'base-alert',
            component: () => import( /* webpackChunkName: "alert-base" */ "@/views/6-alert/1-base-alert.vue"),
            meta: {
                title: '基础弹窗',
                icon: "program-code",
            }
        },
        {
            path: 'msgAlert',
            name: 'msg-alert',
            component: () => import( /* webpackChunkName: "alert-msg" */ "@/views/6-alert/2-msg-list.vue"),
            meta: {
                title: '消息弹窗',
                icon: "program-code",
            }
        },
        {
            path: 'mountedAlert',
            name: 'mounted-alert',
            component: () => import( /* webpackChunkName: "mounted-alert" */ "@/views/6-alert/3-mounted-alert.vue"),
            meta: {
                title: '自动弹窗',
                icon: "program-code",
            }
        },
    ]
}
