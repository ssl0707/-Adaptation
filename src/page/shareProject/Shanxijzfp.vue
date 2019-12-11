<template>
  <div class="shanxi">
    <!-- banner -->
    <div class="banner">
      <img src="../../../static/image/share/banner.png"
           alt="">
    </div>
    <div class="com-share com-share-container">
      <!-- 项目介绍 -->
      <div class="introduce">
        <div class="introduce-des">
          <div class="com-mobi-showimg introduce-img com-margin-bottom15 com-margin-top15">
            <img src="../../../static/image/share/shanxi/topimg.png"
                 alt="">
          </div>
          <div class="com-mobi-scale"><img class="share-title margin0"
                 src="../../../static/image/share/titile-jieshao.png"
                 alt=""></div>
          <div class="des-text">
            精准扶贫——塞上江南多媒体资源库旨在推动公共文化扶贫网络建设，整合文化资源。为广大群众量身定制打造了一套精准扶贫必不可少的集技能培训、法律知识以及留守儿童再教育等内容。该平台通过视频、图片、文字多种展示方式于一体的综合性学习平台。该平台结合网络学习的先进理念及信息化技术手段，致力于为当地不同群众提供个性化、智能化的在线学习体验。
          </div>
          <a target="_blank"
             href="http://jzfp.shanxi.xingyao100.com/web/home"
             class="com-pc-link com-share-link">项目体验</a>
        </div>
        <img src="../../../static/image/share/shanxi/topimg.png"
             alt=""
             class="com-pc-showimg introduce-img">
      </div>
      <!-- 资源内容 -->
      <div>
        <div class="text-center com-mobi-scale"><img class="share-title"
               src="../../../static/image/share/title-neirong.png"
               alt=""></div>
        <div class="resource-content flex-space-around">
          <div v-for="(item, index) in resourceNav"
               :key="index"
               class="text-center com-mobi-scale">
            <img :src="item.imgsrc"
                 alt=""
                 class="resource-icon">
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
      <!-- 推广活动 -->
      <div>
        <div class="text-center com-mobi-scale"><img class="share-title"
               src="../../../static/image/share/title-activity.png"
               alt=""></div>
        <div class="com-activity-wrap">
          <div class="activity-item flex-space-between">
            <div class="activity-item-img com-mobi-showimg com-margin-bottom15">
              <img src="../../../static/image/share/shanxi/activity-a.png"
                   alt="">
            </div>
            <div>
              <div class="activity-item-title item-title-a text-center">神笔马良3D涂色活动</div>
              <div class="activity-item-des">
                第一步：发挥想象力画出一条小鱼
                <br>
                <br>
                第二步：把画好的纸张放在3D扫描一下，利用3D成像技术，让小鱼变活
                <br>
                <br>
                第三步：让小鱼游动起来，画面上的鱼进入大屏幕中游来游去
              </div>
            </div>
            <div class="activity-item-img com-pc-showimg">
              <img src="../../../static/image/share/shanxi/activity-a.png"
                   alt="">
            </div>

          </div>
          <div class="activity-item flex-space-between">
            <div class="activity-item-img com-mobi-showimg com-margin-bottom15">
              <img src="../../../static/image/share/shanxi/activity-b.png"
                   alt="">
            </div>
            <div>
              <div class="activity-item-title item-title-b text-center">法律知识普及活动</div>
              <div class="activity-item-des">
                本次活动的开展旨在提高农村农民的法律意识，充分利用法律手段依法维权，针对农村法制基础较薄弱、农民法律意识不强等现实问题，“法律知识讲座”结合真实的案例,用通俗易懂的语言,向村民宣传相关法律知识，鼓励大家运用法律维护自身合法权益。
              </div>
            </div>
            <div class="activity-item-img com-pc-showimg">
              <img src="../../../static/image/share/shanxi/activity-b.png"
                   alt="">
            </div>
          </div>
          <div class="activity-item flex-space-between">
            <div class="activity-item-img com-mobi-showimg com-margin-bottom15">
              <img src="../../../static/image/share/shanxi/activity-c.png"
                   alt="">
            </div>

            <div>
              <div class="activity-item-title item-title-c text-center">广场舞培训活动</div>
              <div class="activity-item-des">
                广场舞作为一种文化流行于社会当中，同时越来越多的人加入到这个队伍之中，并使它的发展规模日渐强大起来，广场舞的发展速度极其快速,全国的大中小城市都沉迷于广场舞的热浪里.然而光是城市里发展还是远远不够的，文化部门下达命令，我国的全民健身不能只限于城市，农村广场舞的培训及开展也至关重要。
              </div>
            </div>
            <img src="../../../static/image/share/shanxi/activity-c.png"
                 alt=""
                 class="activity-item-img com-pc-showimg">
          </div>
        </div>
      </div>
      <a target="_blank"
         href="http://jzfp.shanxi.xingyao100.com/wap/home"
         class="com-mobi-link">项目体验</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'shanxi',
        data () {
            return {
                resourceNav: [ // 资源列表
                    { title: '地方特色', imgsrc: '../../../static/image/share/shanxi/resource-1.png', url: '/home' },
                    { title: '农业创富', imgsrc: '../../../static/image/share/shanxi/resource-2.png', url: '/home' },
                    { title: '一技之长', imgsrc: '../../../static/image/share/shanxi/resource-3.png', url: '/home' },
                    { title: '少儿资源', imgsrc: '../../../static/image/share/shanxi/resource-4.png', url: '/home' },
                    { title: '电子书', imgsrc: '../../../static/image/share/shanxi/resource-5.png', url: '/home' },
                    { title: '图画书', imgsrc: '../../../static/image/share/shanxi/resource-6.png', url: '/home' }
                ]
            }
        }
    }
</script>

<style scoped>
@import "../../../static/css/shareProject/shanxi.css";
</style>
