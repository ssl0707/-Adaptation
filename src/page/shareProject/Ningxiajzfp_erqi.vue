<template>
    <div class="ningxiajzfp">
        <!-- banner -->
        <div class="banner">
            <img src="../../../static/image/share/banner.png" alt="">
        </div>
        <div class="com-share com-share-container">
            <!-- 项目介绍 -->
            <div class="introduce">
                <div class="com-mobi-showimg introduce-img com-margin-bottom15 com-margin-top15">
                    <img src="../../../static/image/share/ningxiajzfp/topimg.png" alt="" >
                </div>
                <div class="introduce-des">
                    <div class="com-mobi-scale"><img class="share-title margin0" src="../../../static/image/share/titile-jieshao.png" alt=""></div>
                    <div class="des-text">
                        《精准扶贫-塞上江南多媒体资源库（二期）》项目，塞上江南多媒体资源库在一期实施的基础上，致力于推动公共文化扶贫网络建设，拓展更新文化资源。使资源分类清晰，内容更加全面、多元化，为广大群众提供的优质资源内容包括技能培养、法律知识普及、养生保健、党政、留守儿童再教育等资源，通过视频、图片、文字等多种方式展示，更好的满足群众需求。
                    </div>
                    <a target="_blank" href="http://jzfpk.nxdcn.cn:8089/web/home" class="com-pc-link com-share-link">项目体验</a>
                </div>
                <img src="../../../static/image/share/ningxiajzfp/topimg.png" alt="" class="com-pc-showimg introduce-img">
            </div>
            <!-- 资源内容 -->
            <div class="resource">
                <div class="text-center com-mobi-scale"><img class="share-title" src="../../../static/image/share/title-neirong.png" alt=""></div>
                <div class="resource-nav flex-space-around">
                    <div v-for="(item, index) in resourceNav" :key="index" class="nav-item text-center">
                        <div :style="`background:url(${item.imgsrc});background-size: 100% auto;`" class="resource-icon"></div>
                        <p>{{item.title}}</p>
                    </div>
                </div>
            </div>
            <!-- 推广活动 -->
            <div class="activity">
                <div class="text-center com-mobi-scale"><img class="share-title" src="../../../static/image/share/title-activity.png" alt=""></div>
                <div>
                    <p class="activity-sub-title text-center">公共数字文化工程  助力宁夏精准扶贫</p>
                    <div class="activity-show">
                        <div v-for="(activity, index) in activityList" :key="index" class="activity-item">
                            <img :src="activity.imgsrc" alt="" class="activity-img">
                            <p class="activity-des">{{activity.title}}</p>
                        </div>
                    </div>
                </div>
                <!-- 媒体报道 -->
                <div class="media">
                    <p class="media-title">媒体报道：</p>
                    <p class="media-content">20 家网络媒体，3家报社，3家新媒体，3个电视台</p>
                    <p class="media-content">电视媒体：宁夏电视台，隆德电视台，海原电视台</p>
                    <p class="media-content">报纸媒体：宁夏法治报，华兴时报，新消息报</p>
                    <p class="media-content">新媒体：宁夏日报微信客户端，宁夏新闻网客户端，掌上宁夏客户端</p>
                    <p class="media-content">网络媒体：网易新闻，搜狐新闻，腾讯新闻，新浪新闻，一点资讯，今日头条，文化中国网，吴忠网，宁夏电视新闻网，每日宁夏报，银川时讯，固原网，银川热线，银川信息港，宁夏信息港，宁夏之窗，宁夏热线，凤凰网商业频道，环球网，央广网。</p>
                </div>
                <div class="news-wrap flex-space-between com-activity-wrap">
                    <div v-for="(news, index) in activityArr" :key="index" class="news-img">
                        <img :src="news" alt="" >
                    </div>
                </div>
            </div>
            <a target="_blank" href="http://jzfpk.nxdcn.cn:8089/wap/home" class="com-mobi-link">项目体验</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ningxiajzfp',
        data () {
            return {
                resourceNav: [ // 导航列表
                    { title: '特色资源', imgsrc: '../../../static/image/share/ningxiajzfp/icon-tese.png', url: '/home' },
                    { title: '养殖种植', imgsrc: '../../../static/image/share/ningxiajzfp/icon-yangzhi.png', url: '/home' },
                    { title: '技能培训', imgsrc: '../../../static/image/share/ningxiajzfp/icon-jineng.png', url: '/home' },
                    { title: '法律讲堂', imgsrc: '../../../static/image/share/ningxiajzfp/icon-law.png', url: '/home' },
                    { title: '养生保健', imgsrc: '../../../static/image/share/ningxiajzfp/icon-yangsheng.png', url: '/home' },
                    { title: '少儿资源', imgsrc: '../../../static/image/share/ningxiajzfp/icon-shaoer.png', url: '/home' },
                    { title: '电子书', imgsrc: '../../../static/image/share/ningxiajzfp/icon-ebook.png', url: '/home' },
                    { title: '图画书', imgsrc: '../../../static/image/share/ningxiajzfp/icon-pbook.png', url: '/home' }
                ],
                activityList: [ // 活动图片列表
                    { title: '金融知识讲座活动', imgsrc: '../../../static/image/share/ningxiajzfp/activity-1.png' },
                    { title: '电子商务讲座活动', imgsrc: '../../../static/image/share/ningxiajzfp/activity-2.png' },
                    { title: '医疗健康知识讲座活动（直播）', imgsrc: '../../../static/image/share/ningxiajzfp/activity-3.png' },
                    { title: '种植、养殖技术培训', imgsrc: '../../../static/image/share/ningxiajzfp/activity-4.png' },
                    { title: '儿童诗词演讲活动', imgsrc: '../../../static/image/share/ningxiajzfp/activity-5.png' }
                ],
                activityArr: [ // 新闻报道图片数组
                    '../../../static/image/share/ningxiajzfp/news-1.png',
                    '../../../static/image/share/ningxiajzfp/news-2.png',
                    '../../../static/image/share/ningxiajzfp/news-3.png',
                    '../../../static/image/share/ningxiajzfp/news-4.png',
                    '../../../static/image/share/ningxiajzfp/news-5.png',
                    '../../../static/image/share/ningxiajzfp/news-6.png'
                ]
            }
        }
    }
</script>

<style scoped>
@import '../../../static/css/shareProject/ningxiajzfp.css';
</style>
