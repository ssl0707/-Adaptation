<template>
    <div class="sichuan">
        <!-- banner -->
        <div class="banner">
            <img src="../../../static/image/share/banner.png" alt="">
        </div>
        <div class="sichuan-container">
            <!-- 项目介绍 -->
            <div class="introduce">
                <div class="com-mobi-showimg introduce-img">
                    <div class="introduce-img-back"><img src="../../../static/image/share/sichuan/top-back.png" alt=""></div>
                    <div class="introduce-img-before"><img src="../../../static/image/share/sichuan/top-before.png" alt=""></div>
                </div>
                <div class="com-mobi-scale"><img class="title margin0" src="../../../static/image/share/titile-jieshao.png" alt=""></div>
                <div class="des-text">
                    《四川夜明珠多媒体资源库》项目,汉藏双语版儿童夜明珠智能学习多媒体资源库是专为藏族地区的小朋友量身定制的，资源内容可按照年龄段划分，资源形式有视频、电子书、图画书，通过PC端和移动端的研发使小朋友们可以轻松便捷的使用，资源内容轻松易懂，体现寓教于乐的学习方式，资源采用双语的展现形式，充分满足了儿童们的阅读需求。
                </div>
                <a target="_blank" href="http://ymz.xingyao100.com/" class="com-pc-link com-share-link">项目体验</a>
                <div class="com-pc-showimg introduce-img">
                    <div class="introduce-img-back"><img src="../../../static/image/share/sichuan/top-back.png" alt=""></div>
                    <div class="introduce-img-before"><img src="../../../static/image/share/sichuan/top-before.png" alt=""></div>
                </div>
            </div>
            <!-- 资源内容 -->
            <div>
                <div class="text-center com-mobi-scale"><img class="title share-title" src="../../../static/image/share/title-neirong.png" alt=""></div>
                <div class="resource-sub-wrap flex-space-between">
                    <div class="resource-item resource-item-a">
                        <div class="resource-icon resource-icon-a"></div>
                        <div class="item-content">
                            <p class="resource-sub-title title-a">视频分类</p>
                            <div class="item-ul flex-space-around">
                                <ul>
                                    <li v-for="(itemA,index) in resourceArrA" :key="index">{{itemA}}</li>
                                </ul>
                                <ul>
                                    <li v-for="(itemB,index) in resourceArrB" :key="index">{{itemB}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="resource-item resource-item-b">
                        <div class="resource-icon resource-icon-b"></div>
                        <div class="item-content mobi-item-content">
                            <p class="resource-sub-title title-b">图画书分类</p>
                            <div class="item-ul flex-space-around">
                                <ul>
                                    <li v-for="(itemA,index) in resourceArrA" :key="index">{{itemA}}</li>
                                </ul>
                                <ul>
                                    <li v-for="(itemB,index) in resourceArrB" :key="index">{{itemB}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="resource-item resource-item-c">
                        <div class="resource-icon resource-icon-c"></div>
                        <div class="item-content">
                            <p class="resource-sub-title title-c">电子书分类</p>
                            <div class="item-ul flex-space-around">
                                <ul>
                                    <li v-for="(itemC,index) in resourceArrC" :key="index">{{itemC}}</li>
                                </ul>
                                <ul>
                                    <li v-for="(itemD,index) in resourceArrD" :key="index">{{itemD}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="resource-item resource-item-d">
                        <div class="resource-icon resource-icon-d"></div>
                        <div class="item-content">
                            <p class="resource-sub-title title-d">特色资源分类</p>
                            <div class="item-ul flex-space-around">
                                <ul>
                                    <li v-for="(itemE,index) in resourceArrE" :key="index">{{itemE}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="resource-bottom-img"></div>
            </div>
            <a target="_blank" href="http://ymz.xingyao100.com/" class="com-mobi-link">项目体验</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sichuan',
        data () {
            return {
                resourceArrA: [ '健康', '语言', '科学', '艺术', '社会' ],
                resourceArrB: [ '国学启蒙', '诗词精选', '经典故事', '身心健康', '科普百科', '思想品德' ],
                resourceArrC: [ '历史', '名著', '国学', '幽默', '历险' ],
                resourceArrD: [ '科普', '科幻', '知识', '都市', '绘本' ],
                resourceArrE: [ '藏区文化', '少儿图书', '中国梦系列' ]
            }
        }
    }
</script>

<style scoped>
@import '../../../static/css/shareProject/sichuan.css';
</style>
