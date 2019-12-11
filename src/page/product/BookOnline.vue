<template>
    <div class="bookOnline">
        <!-- banner -->
        <div class="banner">
            <img src="../../../static/image/product/bookOnline/banner.png" alt="">
        </div>
        <div class="com-product-container">
            <!-- 产品介绍 -->
            <p class="text-center introduce-des">习书在线是一款集成了视频课程、碑帖纸质书、PC/移动端平台、硬件终端的综合书法教育体验产品，完美的实现了学习、体验、实践的融合。</p>
            <div class="text-center com-mobi-scale"><img class="synopsis-title com-product-title" src="../../../static/image/product/bookOnline/title-course.png" alt=""></div>
            <div class="com-product-synopsis">
                <img src="../../../static/image/product/bookOnline/topimg.png" alt="" class="com-product-topimg com-margin-bottom15">
                <div class="com-product-describe">
                    软笔课件：涵盖颜柳欧赵楷书、隶书、行书等不同书体教学资源，根据不同书体特点及教材架构体系，进行教学课件系统设计、内容制作。满足学校教材之外的书法教学内容延伸。 
                    <br>
                    <br> 
                    硬笔课件：硬笔教学模块与新课标人教版语文课本（1-6 年级）无缝对接，从书写坐姿、执笔姿势到每个课后生字面面俱到，系统化讲解。
                    <br>
                    <br>
                    经典碑帖：习书在线书法碑帖是行业首创，独家发明的专利技术，是唯一一种通过扫描单字即可观看精讲视频的碑帖。
                </div>
            </div>
            <!-- 产品形态 -->
            <div>
                <div class="text-center com-mobi-scale"><img class="synopsis-title com-product-title" src="../../../static/image/product/bookOnline/title-shape.png" alt=""></div>
                <div class="shape-wrap flex-space-around">
                    <div v-for="(item,index) in list" :key="index"  class="shape-item">
                        <img :src="item.imgsrc" alt="" class="shape-item-img">
                        <div class="shape-item-title">{{item.title}}</div>
                    </div>
                </div>
            </div>
            <!-- 书法体验 -->
            <div>
                <div class="text-center com-mobi-scale"><img class="handwrite-title com-product-title" src="../../../static/image/product/bookOnline/title-tiyan.png" alt=""></div>
                <div class="handwrite-des">
                    书法学习体验终端，是一个集成了先进的手写数字技术，影像识别技术和多媒体软件技术于一体的高科技产品，完美的实现了学习、体验、实践的融合。摆脱笔、墨、纸、砚，文房四宝，采用超大的触摸显示屏来代替传统的纸张，通过强大计算机处理能力实现书法写作、临摹、描红功能，通过高科技展示方式将中华民族五千年的文明，展现于笔端画卷。
                </div>
                <div class="handwrite-wrap flex-space-between">
                    <div v-for="(items,index) in handwriteList" :key="index"  class="handwrite-item">
                        <img :src="items.imgsrc" alt="" class="handwrite-item-img">
                        <div class="handwrite-item-title">{{items.title}}</div>
                    </div>
                </div>
                <a target="_blank" href="http://edu.idcpub.cn/index.html" class="com-to-net">进入官网</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'bookOnline',
        data () {
            return {
                list: [
                    { title: '中版教育教学系统', imgsrc: '../../../static/image/product/bookOnline/shape-a.png' },
                    { title: 'APP[中版教育]', imgsrc: '../../../static/image/product/bookOnline/shape-b.png' },
                    { title: '书法学习体验终端', imgsrc: '../../../static/image/product/bookOnline/shape-c.png' },
                    { title: '书法碑帖', imgsrc: '../../../static/image/product/bookOnline/shape-d.png' }
                ],
                handwriteList: [
                    { title: '互动形式一：用户可跟随终端内置的书法学习课程，跟随名师，从一点一竖开始，零基础学习书法技艺，逐步培养书法爱好。', imgsrc: '../../../static/image/product/bookOnline/handwriting-a.png' },
                    { title: '互动形式二：用户可以选择内置的名家碑帖，临摹或者描红，钻研高深的书法技巧，提升书法水平。', imgsrc: '../../../static/image/product/bookOnline/handwriting-b.png' },
                    { title: '互动形式三：用户可以根据自己的喜好及书写习惯随意书写。', imgsrc: '../../../static/image/product/bookOnline/handwriting-c.png' },
                    { title: '', imgsrc: '../../../static/image/product/bookOnline/handwriting-d.png' },
                    { title: '', imgsrc: '../../../static/image/product/bookOnline/handwriting-e.png' }
                ]
            }
        }
    }
</script>

<style scoped>
@import '../../../static/css/product/bookOnline.css';
</style>
