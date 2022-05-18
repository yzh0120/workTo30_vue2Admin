/*
 * @Author: yz
 * @Date: 2022-05-05 16:13:01
 * @Description: 
 * @FilePath: \workTo30_vue2Admin\src\router\modules\5-file.js
 * 
 */
let layout = () => import("@/layout/index.vue")
let blank = () => import("@/views/blank.vue") //二级菜单专属

export default {
    path: '/file',
    name: 'file',
    redirect: {
        name: "one-file"
    },
    component: layout,
    meta: {
        title: '封装文件上传',
        icon: "wenjianshangchuan",
    },
    children: [{
            path: 'one',
            name: 'one-file',
            component: () => import( /* webpackChunkName: "file-base" */ "@/views/5-file/1-one-file.vue"),
            meta: {
                title: '单个文件',
                icon: "wenjianshangchuan",
            }
        },
        {
            path: 'fileList',
            name: 'file-List',
            component: () => import( /* webpackChunkName: "file-base" */ "@/views/5-file/2-file-list.vue"),
            meta: {
                title: '多个文件',
                icon: "wenjianshangchuan",
            }
        },
    ]
}
