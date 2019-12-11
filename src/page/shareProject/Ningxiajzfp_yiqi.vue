<template>
    <div class="ningxiassjn">
        <!-- banner -->
        <div class="banner">
            <img src="../../../static/image/share/banner.png" alt="">
        </div>
        <div class="com-share com-share-container">
            <!-- 项目介绍 -->
            <div class="introduce">
                <div class="com-mobi-showimg introduce-img com-margin-top15">
                    <img src="../../../static/image/share/ningxiassjn/topimg.png" alt="" >
                </div>
                <div class="introduce-des">
                    <div class="com-mobi-scale"><img class="share-title margin0" src="../../../static/image/share/titile-jieshao.png" alt=""></div>
                    <div class="des-text">
                        精准扶贫——塞上江南多媒体资源库旨在推动公共文化扶贫网络建设，整合文化资源。为广大群众量身定制打造了一套精准扶贫必不可少的集技能培训、法律知识以及留守儿童再教育等内容。该平台通过视频、图片、文字多种展示方式于一体的综合性学习平台。该平台结合网络学习的先进理念及信息化技术手段，致力于为当地不同群众提供个性化、智能化的在线学习体验。
                    </div>
                    <a target="_blank" href="http://jzfp.nxdcn.cn:8090/ningxia/" class="com-pc-link com-share-link">项目体验</a>
                </div>
                <img src="../../../static/image/share/ningxiassjn/topimg.png" alt="" class="com-pc-showimg introduce-img">
            </div>
            <!-- 资源内容 -->
            <div class="mobi-resource">
                <div class="text-center com-mobi-scale"><img class="share-title" src="../../../static/image/share/title-neirong.png" alt=""></div>
                <div class="resource-img">
                    <span class="resource-des resource-des-a">特色资源</span>
                    <span class="resource-des resource-des-b">养殖种植</span>
                    <span class="resource-des resource-des-c">技能培训</span>
                    <span class="resource-des resource-des-d">法律讲堂</span>
                    <span class="resource-des resource-des-e">养生保健</span>
                    <span class="resource-des resource-des-f">少儿资源</span>
                    <span class="resource-des resource-des-g">电子书</span>
                    <span class="resource-des resource-des-h">图画书</span>
                </div>
            </div>
            <!-- 推广活动 -->
            <div>
                <div class="text-center com-mobi-scale"><img class="share-title" src="../../../static/image/share/title-activity.png" alt=""></div>
                <div class="activity-wrap flex-space-between com-activity-wrap">
                    <div v-for="(item, index) in activityList" :key="index" class="activity-item text-center">
                        <p class="activity-item-title">{{item.title}}</p>
                        <img :src="item.imgsrc" alt="" class="activity-item-img">
                    </div>
                </div>
            </div>
            <a target="_blank" href="http://jzfp.nxdcn.cn:8090/ningxia/" class="com-mobi-link">项目体验</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ningxiassjn',
        data () {
            return {
                activityList: [ // 活动图片列表
                    { title: '体验奇幻世界，畅想未来生活-360°球幕电影体验活动', imgsrc: '../../../static/image/share/ningxiassjn/activity-1.png' },
                    { title: '种植养殖技术培训活动', imgsrc: '../../../static/image/share/ningxiassjn/activity-2.png' },
                    { title: '法律知识普及活动', imgsrc: '../../../static/image/share/ningxiassjn/activity-3.png' },
                    { title: '“舞动世界”广场舞培训活动', imgsrc: '../../../static/image/share/ningxiassjn/activity-4.png' }
                ]
            }
        }
    }
</script>

<style scoped>
@import '../../../static/css/shareProject/ningxiassjn.css';
</style>
