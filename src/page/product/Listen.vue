<template>
  <div class="listen">
    <!-- banner -->
    <div class="banner">
      <img src="../../../static/image/product/listen/banner.png"
           alt="">
    </div>
    <div class="com-product-container">
      <!-- 产品介绍 -->
      <div class="">
        <div class="text-center com-mobi-scale com-margin-top15 com-margin-bottom15"><img class="introduce-title"
               src="../../../static/image/product/listen/title-jieshao.png"
               alt=""></div>
        <p class="introduce-des">去听是一款听书软件，汇集了全国各大出版社各类优质正版书籍资源，邀请专业配音演员独家配音，为您制定阅读“好声音”的标准，让您畅听中外名著，品味国学新知。</p>
        <p class="introduce-des introduce-des-sub text-center">既力行，又学文，摒浮华，求理真。行可读，卧可读，静可听，动可听。</p>
        <img src="../../../static/image/product/listen/jieshao.png"
             alt=""
             class="introduce-img">
      </div>
      <!-- 产品特色 -->
      <div>
        <div class="text-center com-mobi-scale com-margin-top15"><img class="introduce-title"
               src="../../../static/image/product/listen/title-tese.png"
               alt=""></div>
        <div class="spec-wrap flex-space-around">
          <div v-for="(item,index) in list"
               :key="index"
               :style="`background:url(${item.imgsrc}) no-repeat;background-size: 100% 100%;`"
               class="spec-item">
            <p class="item-title">{{item.title}}</p>
            <div class="item-describe">{{item.describe}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'listen',
        data () {
            return {
                list: [
                    { title: '操作便捷', describe: '界面简洁，操作简单，还有更多精彩，等您发现。', imgsrc: '../../../static/image/product/listen/spec-bg-a.png' },
                    { title: '互动交流', describe: '除了听书，在发现栏目，您可以看到更多活动和资讯。', imgsrc: '../../../static/image/product/listen/spec-bg-b.png' },
                    { title: '多样视听', describe: '所有书籍都可以在线收听和下载，随时随地想听就听。', imgsrc: '../../../static/image/product/listen/spec-bg-c.png' },
                    { title: '正版资源', describe: '除了我们为您推荐的和热门的精品书籍。您还可以按照图书馆分类法及书店分类法，找到各大出版社正版图书音频。', imgsrc: '../../../static/image/product/listen/spec-bg-d.png' }
                ]
            }
        }
    }
</script>

<style scoped>
@import "../../../static/css/product/listen.css";
</style>
