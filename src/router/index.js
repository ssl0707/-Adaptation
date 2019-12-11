import Vue from 'vue'
import Router from 'vue-router'
import ShareList from '@/page/shareProject/ShareList.vue'
import Anhui from '@/page/shareProject/Anhuixhn_yiqi.vue'
import Ningxiajzfp from '@/page/shareProject/Ningxiajzfp_erqi.vue'
import Longjiang from '@/page/shareProject/Longjiangxhn_erqi.vue'
import Ningxiassjn from '@/page/shareProject/Ningxiajzfp_yiqi.vue'
import Shanxi from '@/page/shareProject/Shanxijzfp.vue'
import Sichuan from '@/page/shareProject/Sichuan_ymz.vue'
import ProductList from '@/page/product/ProductList.vue'
import Culture from '@/page/product/Culture.vue'
import Xiaohouniao from '@/page/product/Xiaohouniao.vue'
import BookOnline from '@/page/product/BookOnline.vue'
import Listen from '@/page/product/Listen.vue'
import Xiyanghong from '@/page/product/Xiyanghong.vue'
import Intelligence from '@/page/product/Intelligence.vue'
import Home from '@/page/home/Home'
import Activity from '@/page/activity/Activity'
import Team from '@/page/team/Team'
import Aboutus from '@/page/aboutus/Aboutus'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
                 path: '*',
                 redirect: '/home'
             },
             {
                 path: '/home',
                 name: 'Home',
                 component: Home,
                 meta: {
                     title: '星钥传媒 - 首页'
                 }
             },
             {

                 path: '/activity',
                 name: 'Activity',
                 component: Activity,
                 meta: {
                     title: '星钥传媒 - 推广活动'
                 }
             },
             {
                 path: '/team',
                 name: 'Team',
                 component: Team,
                 meta: {
                     title: '星钥传媒 - 合作伙伴'
                 }
             },
             {
                 path: '/aboutus',
                 name: 'Aboutus',
                 component: Aboutus,
                 meta: {
                     title: '星钥传媒 - 关于我们'
                 }
             },
             {
                 path: '/sharelist',
                 name: 'ShareList',
                 component: ShareList,
                 meta: {
                     title: '星钥传媒 - 品牌项目'
                 }
             },
             {
                 path: '/anhui',
                 name: 'anhui',
                 component: Anhui,
                 meta: {
                     title: '星钥传媒 - 安徽小候鸟守护计划'
                 }
             },
             {
                 path: '/ningxiajzfp',
                 name: 'ningxiajzfp',
                 component: Ningxiajzfp,
                 meta: {
                     title: '星钥传媒 - 塞上江南多媒体资源库'
                 }
             },
             {
                 path: '/longjiang',
                 name: 'longjiang',
                 component: Longjiang,
                 meta: {
                     title: '星钥传媒 - 龙江小候鸟守护'
                 }
             },
             {
                 path: '/ningxiassjn',
                 name: 'ningxiassjn',
                 component: Ningxiassjn,
                 meta: {
                     title: '星钥传媒 - 塞上江南多媒体资源库'
                 }
             },
             {
                 path: '/shanxi',
                 name: 'shanxi',
                 component: Shanxi,
                 meta: {
                     title: '星钥传媒 - 陕西I守护多媒体资源库'
                 }
             },
             {
                 path: '/sichuan',
                 name: 'sichuan',
                 component: Sichuan,
                 meta: {
                     title: '星钥传媒 - 四川夜明珠多媒体资源库'
                 }
             },
             {
                 path: '/productlist',
                 name: 'productList',
                 component: ProductList,
                 meta: {
                     title: '星钥传媒 - 产品展示'
                 }
             },
             {
                 path: '/culture',
                 name: 'culture',
                 component: Culture,
                 meta: {
                     title: '星钥传媒 - 民间文化艺术超市'
                 }
             },
             {
                 path: '/xiaohouniao',
                 name: 'xiaohouniao',
                 component: Xiaohouniao,
                 meta: {
                     title: '星钥传媒 - 小候鸟互动学习馆'
                 }
             },
             {
                 path: '/bookOnline',
                 name: 'bookOnline',
                 component: BookOnline,
                 meta: {
                     title: '星钥传媒 - 习书在线'
                 }
             },
             {
                 path: '/listen',
                 name: 'listen',
                 component: Listen,
                 meta: {
                     title: '星钥传媒 - 去听'
                 }
             },
             {
                 path: '/xiyanghong',
                 name: 'xiyanghong',
                 component: Xiyanghong,
                 meta: {
                     title: '星钥传媒 - 夕阳红充电站'
                 }
             },
             {
                 path: '/intelligence',
                 name: 'intelligence',
                 component: Intelligence,
                 meta: {
                     title: '星钥传媒 - 智能文化资源宝'
                 }
             }
    ]
})
