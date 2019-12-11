// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'swiper/dist/css/swiper.min.css';
import '../static/css/common/common.css'
import '../src/assets/css/common.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
router.beforeEach((to, from, next) => {
    // to来自  from  去哪
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
