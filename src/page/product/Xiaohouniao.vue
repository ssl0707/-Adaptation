<template>
  <div class="xiaohouniao">
    <!-- banner -->
    <div class="banner">
      <img src="../../../static/image/product/xiaohouniao/banner.png"
           alt="">
    </div>
    <div class="com-product-container">
      <!-- 产品介绍 -->
      <div class="text-center"><img class="com-mobi-showimg resource-title com-product-title"
             src="../../../static/image/product/xiaohouniao/title-jieshao.png"
             alt=""></div>

      <div class="com-product-synopsis">
        <img src="../../../static/image/product/xiaohouniao/topimg.png"
             alt=""
             class="com-pc-showimg com-product-topimg">
        <div class="com-product-describe">
          小候鸟互动学习馆通过资源+平台的深度融合，是专为儿童读者服务的全方位资源学习平台，数据库资源涵盖传统文化、少儿绘本、手工制作、小学教育、学前教育、趣味故事、兴趣培养等视频内容，全面、优质的少儿资源能最大化激发少儿的学习兴趣，保证学习的趣味性和孩子的专注度。平台搭配了电子书和图画书，可以激发少儿阅读兴趣，培养孩子的阅读能力和语言能力。
        </div>
        <img src="../../../static/image/product/xiaohouniao/topimg.png"
             alt=""
             class="com-mobi-showimg com-product-topimg com-margin-top15">
      </div>
      <!-- 资源内容 -->
      <div>
        <div class="text-center"><img class="resource-title com-product-title"
               src="../../../static/image/product/xiaohouniao/title-neirong.png"
               alt=""></div>
        <div class="resource-box">
          <ul>
            <li class="education">
              <div class="resource-bg resource-src">
                <img src="../../../static/image/product/xiaohouniao/content1.png"
                     alt="">
                <h6 class="resource-head">儿童教育</h6>
              </div>
              <span>小班教育</span>
              <span>中班教育</span>
              <span>大班教育</span>
              <span>启蒙数学</span>
              <span>启蒙英语</span>
              <span>启蒙语文</span>
              <span>文明礼仪</span>
              <span>心理健康</span>
              <span>益智课堂</span>
              <span>小学数学</span>
              <span>小学英语</span>
              <span>小学语文</span>
              <span>国学教育</span>
              <span>汉字学习</span>
              <span>认知学习</span>
              <span>书法教学</span>
              <span>唐诗</span>
              <span>安全教育</span>
            </li>
            <li class="story">
              <div class="resource-bg">
                <img src="../../../static/image/product/xiaohouniao/content2.png"
                     alt="">
                <h6 class="resource-head">趣味故事</h6>
              </div>
              <span>安全绘本</span>
              <span>故事绘本</span>
              <span>成语故事</span>
              <span>睡前故事</span>
              <span>童话故事</span>
            </li>
            <li class="develop">
              <div class="resource-bg">
                <img src="../../../static/image/product/xiaohouniao/content3.png"
                     alt="">
                <h6 class="resource-head">兴趣培养</h6>
              </div>
              <span>板报设计</span>
              <span>剪纸艺术</span>
              <span>轻粘土</span>
              <span>折纸</span>
              <span>舞蹈</span>
              <span>绘画</span>
            </li>
            <li class="book">
              <div class="resource-bg">
                <img src="../../../static/image/product/xiaohouniao/content4.png"
                     alt="">
                <h6 class="resource-head">图画大全</h6>
              </div>
              <span>国学</span>
              <span>科幻</span>
              <span>历史</span>
              <span>科普</span>
              <span>名著</span>
            </li>
            <li class="read">
              <div class="resource-bg">
                <img src="../../../static/image/product/xiaohouniao/content5.png"
                     alt="">
                <h6 class="resource-head">快乐阅读</h6>
              </div>
              <span>生活常识</span>
              <span>艺术培养</span>
              <span>益智百科</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 产品形态 -->
      <div class="shape">
        <div class="text-center"><img class="resource-title com-product-title"
               src="../../../static/image/product/xiaohouniao/title-xingtai.png"
               alt=""></div>
        <div class="flex-space-between shape-wrap">
          <div class="shape-item flex-space-between">
            <div class="shape-title">PC端</div>
            <div class="product-pc"></div>
          </div>
          <div class="shape-item flex-space-between">
            <div class="shape-title">WAP端</div>
            <div class="flex-space-center">
              <div class="product-wap product-wap-a"></div>
              <div class="product-wap product-wap-b"></div>
            </div>
          </div>
          <div class="shape-item flex-space-between">
            <div class="shape-title">APP</div>
            <div class="flex-space-center">
              <div class="product-app product-app-a"></div>
              <div class="product-app product-app-b"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 产品优势 -->
      <div class="superiority">
        <div class="text-center"><img class="resource-title com-product-title"
               src="../../../static/image/product/xiaohouniao/title-youshi.png"
               alt=""></div>
        <div class="superiority-bg">
          <div v-for="(item, index) in list"
               :key="index"
               class="superiority-item"
               :class="item.classname">
            <p class="item-title">{{item.title}}</p>
            <div class="superiority-des">{{item.describe}}</div>
          </div>
        </div>
        <a target="_blank"
           href="http://web2.liushouer.com/web/home"
           class="com-pc-showimg com-to-net">进入官网</a>
        <a target="_blank"
           href="http://web2.liushouer.com/wap/home"
           class="com-mobi-showimg com-to-net">进入官网</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'xiaohouniao',
        data () {
            return {
                list: [
                    { title: '技术优势', describe: '采用前后端分离响应式开发，跨平台，支持Linux Windows等主流服务器。', classname: 'superiority-item-a' },
                    { title: '资源优势', describe: '依托中版集团强大的资源库，少儿资源种类覆盖范围广、内容丰富，资源有中国传统文化，包含书法、国学、唐诗等；有文学艺术与教育意义并存的知名绘本，引导孩子艺术、知识、素质全面提升；手工制作可以培养孩子动手能力，开发智力，培养耐心；优美的故事语音，舒缓的故事情节，美好的故事结局，把孩子带进甜蜜的梦乡；更有电子书和图画书培养孩子阅读能力，发现阅读兴趣。', classname: 'superiority-item-b' },
                    { title: '公司优势', describe: '中国出版集团是经中央、国务院批准，与2002年4月9日成立的国家级出版机构。集团旗下有人民文学出版社、商务印书馆、中华书局、中国大百科全书出版社、中国美术出版总社、人民音乐出版社、生活-读书-新知三联书店等96家子公司、控股公司、参股公司，员工超过10000人，总资产达130亿人民币，年销售收入近80亿元人民币。', classname: 'superiority-item-c' },
                    { title: '推广优势', describe: '公司有专业的活动策划团队，组织实施多场大型少儿系列活动（3D涂色涂画、活字印刷体验、拼图比赛、360°数字球幕电影等）', classname: 'superiority-item-d' }
                ]
            }
        }
    }
</script>

<style scoped>
@import "../../../static/css/product/xiaohouniao.css";
</style>
