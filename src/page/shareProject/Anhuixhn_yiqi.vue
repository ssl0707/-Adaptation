<template>
    <div class="anhui">
        <!-- banner -->
        <div class="banner">
            <img src="../../../static/image/share/banner.png" alt="">
        </div>
        <div class="com-share com-share-container">
            <!-- 项目介绍 -->
            <div class="introduce">
                <div class="introduce-des">
                    <div class="com-mobi-showimg introduce-img com-margin-bottom15 com-margin-top15">
                        <img src="../../../static/image/share/anhui/topimg.png" alt="" >
                    </div>
                    <div class="com-mobi-scale"><img class="share-title margin0" src="../../../static/image/share/titile-jieshao.png" alt=""></div>
                    <div class="des-text">
                        《安徽小候鸟守护计划（一期）》项目，通过互联网搭建资源和学习平台，利用最新的技术，通过动画、游戏等呈现方式，制作有针对性的在线资源平台。
                        同时，本项目通过互联网线上线下相结合的推广落地模式，创新的提出平台+资源+互联网线上线下推广运营服务模式，注重资源平台的后期推广培训，把平台和资源用到实处，
                        切实有效的为贫困地区儿童提供互联网环境下的资源和服务，做到真正帮助贫困地区儿童获得更多更有养分的文化和知识。
                    </div>
                    <a target="_blank" href="http://jzfp.anhui.xingyao100.com/web/home" class="com-pc-link com-share-link">项目体验</a>
                </div>
                <img src="../../../static/image/share/anhui/topimg.png" alt="" class="com-pc-showimg introduce-img">
                <!-- <div class="introduce-img"></div> -->
            </div>
            <!-- 资源内容 -->
            <div>
                <div class="text-center com-mobi-scale"><img class="share-title" src="../../../static/image/share/title-neirong.png" alt=""></div>
                <div class="resource flex-space-around">
                    <div v-for="(resource, index) in resourceList" :key="index" :style="`background:url(${resource.imgsrc}) no-repeat;backgroundSize: 100%`" class="resource-item text-center">
                        <p class="item-title">{{resource.title}}</p>
                        <div class="item-content-flex item-content flex-space-between">
                            <p v-for="(subitem, index) in resource.list" :key="index" :class="resource.classname">{{subitem}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 推广活动 -->
            <div >
                <div class="text-center com-mobi-scale"><img class="title share-title" src="../../../static/image/share/title-activity.png" alt=""></div>
                <div class="com-activity-wrap">
                    <div v-for="(item, index) in list" :key="index" class="activity-item flex-space-between">
                        <img v-if="item.type == 2" :src="item.imgsrc" alt="" class="com-pc-showimg activity">
                        <img :src="item.imgsrc" alt="" class="com-mobi-showimg activity">
                        <div class="activity_des">
                            <p class="activity-title" :style="`color:${item.titlecolor}`">{{item.title}}</p>
                            <div class="activity-des" v-html="item.describe"></div>
                        </div>
                        <img v-if="item.type == 1" :src="item.imgsrc" alt="" class="com-pc-showimg activity">
                    </div>
                </div>
            </div>
            <a target="_blank" href="http://jzfp.anhui.xingyao100.com/wap/home" class="com-mobi-link">项目体验</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'anhui',
        data () {
            return {
                resourceList: [
                    { title: '儿童成长', imgsrc: '../../../static/image/share/anhui/ziyuan4.png', list: [ '安全教育', '儿童语文', '快乐导读', '启蒙英语', '汉字学习', '趣味数学', '人际交往' ], classname: 'content-text-flex' },
                    { title: '益智乐园', imgsrc: '../../../static/image/share/anhui/ziyuan3.png', list: [ '绘画课堂', '手工课堂' ], classname: 'content-text' },
                    { title: '绘本故事', imgsrc: '../../../static/image/share/anhui/ziyuan2.png', list: [ '绘本馆', '经典故事' ], classname: 'content-text' },
                    { title: '课外读物', imgsrc: '../../../static/image/share/anhui/ziyuan1.png', list: [ '图画书', '电子书' ], classname: 'content-text' }
                ],
                list: [ // 推广活动列表 type => 1 文字左边，图右边 2 相反
                    { title: '体验奇幻世界 畅想未来生活——360°数字球幕电影', type: 1, imgsrc: '../../../static/image/share/anhui/huodong1.png', titlecolor: '#c91212', describe: '360°数字球幕电影科普相伴动感球幕影院“小候鸟约会海洋”活动将带贫困地区的小朋友们走进一个奇幻海底世界，感受“动感球幕影院”所带来的非凡体验。时而凌空越阻、时而飞行攀升、时而俯冲下降，感受酣畅淋漓的滑行感与飞翔感，顺着海底隧道快速俯冲下去，映入眼帘的是沉睡海底的巨型木船，刺激的失重感让人不自觉地将整个身体向后退去。' },
                    { title: '“你比我猜”亲子游戏互动', type: 2, imgsrc: '../../../static/image/share/anhui/huodong2.png', titlecolor: '#1879b1', describe: '为了给广大留守儿童更好的成长，密切家人关系和促进孩子身心健康发展。为孩子们带来一份美好的回忆。以亲缘关系为主要维系基础，以孩子们跟家长的互动游戏为核心内容，全方位开放孩子的多种能力，帮助孩子们初步完成自然人向社会人的过渡的一种活动。通过孩子们和家长的游戏，增进孩子与家人之间的感情。' },
                    { title: 'AR神笔马良3D涂色图画活动', type: 1, imgsrc: '../../../static/image/share/anhui/huodong3.png', titlecolor: '#bc5111', describe: ' 第一步：发挥想象力画出一条小鱼<br><br>第二步：把画好的纸张放在3D扫描一下，利用3D成像技术，让小鱼变活<br><br>第三步：让小鱼游动起来，画面上的鱼进入大屏幕中游来游去' },
                    { title: '国学系列—经典诵读', type: 2, imgsrc: '../../../static/image/share/anhui/huodong4.png', titlecolor: '#11bcb2', describe: '国学经典诵读有利于孩子养成爱学习的好习惯，为孩子营造一个好的学习氛围。长期有规律的学习国学，能够让孩子系统、全面的学习国学知识。国学经典诵读可以培养孩子讲礼貌、懂道理，也可以开发孩子的智力，提高孩子们脑利用率，0-13岁是一个应当加强孩子的学习，提高孩子们的学习能力，做一个聪明、明事理、懂礼貌的好孩子。' },
                    { title: '手工折纸活动', type: 1, imgsrc: '../../../static/image/share/anhui/huodong5.png', titlecolor: '#ae11bc', describe: '通过折纸可启发人们的创造力和逻辑思维，更可促进手脑的协调，使学生的美术特长得到更好的发展，进一步了解美术的基本知识，培养学生的观察能力、动手操作能力和创新思维能力，提高学生的审美观。' },
                    { title: '益智大脑拼图比赛活动', type: 2, imgsrc: '../../../static/image/share/anhui/huodong6.png', titlecolor: '#19bc11', describe: '通过拼图，从相互无关的画片中，寻找能够连接的结合点，充分培养了孩子们的观察力和忍耐力，同时也锻炼了他们的逻辑思维能力。开发孩子的智力，让他（她）们也能享受到图书馆的读书氛围，感受集体活动带来的乐趣。' },
                    { title: '活字印刷体验活动', type: 1, imgsrc: '../../../static/image/share/anhui/huodong7.png', titlecolor: '#d9267f', describe: '活动开始老师讲述活字印刷的起源和历史，了解起源之后，孩子们迫不及待的体验了起来，孩子们用活字印刷进行古诗词排版，用油墨涂印纸张印刷，感受非物质文化遗产的独特魅力。中华的文化需要传承，这些文明的印记需要从孩童时期渗透。此次活动不仅锻炼了孩子们的动手操作能力，领略古代印刷技术的独有魅力，更重要的是在寓教于乐中，让孩子们懂得尊重和传承中国经典国粹。' }
                ]
            }
        }
    }
</script>

<style scoped>
@import '../../../static/css/shareProject/anhui.css';
</style>
