<template>
  <div class="sharelist">
    <!-- banner -->
    <div class="pc-banner">
      <img src="../../../static/image/product/list/pc-banner.jpg"
           alt="">
    </div>
    <div class="model-banner">
      <img src="../../../static/image/product/list/mod-banner.jpg"
           alt="">
    </div>
    <!-- 展示列表 -->
    <ul class="content flex-space-between">
      <router-link tag="li"
                   v-for="(showItem, index) in showList"
                   :key="index"
                   :to="showItem.url"
                   class="item">
        <div class="item-img-wrap">
          <img :src="showItem.imgsrc"
               alt=""
               :style="`width:${showItem.width}px`"
               class="item-img">
        </div>
        <span class="item-title text-center">{{showItem.title}}</span>
        <div class="item-des">{{showItem.content}}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'productList',
  data () {
    return {
      showList: [ // 展示列表数据
        { title: '小候鸟互动学习馆', content: '精准扶贫——塞上江南多媒体资源库旨在推动公共文化扶贫网络建设，整合文化资源。', imgsrc: '../../../static/image/product/list/logo-d.png', width: 66, url: '/xiaohouniao' },
        { title: '民间文化艺术超市', content: '民间文化艺术超市通过“互联网+文化旅游”的形式，以O2O模式打造中国民间艺术综合服务云平台，传承和弘扬我国优秀的民间文化艺术。', imgsrc: '../../../static/image/product/list/logo-a.png', width: 70, url: '/culture' },
        { title: '习书在线', content: '习书在线是一款集成了视频课程、碑帖纸质书、PC/移动端平台、硬件终端的综合书法教育体验产品，完美的实现了学习、体验、实践的融合。', imgsrc: '../../../static/image/product/list/logo-c.png', width: 61, url: '/bookOnline' },
        { title: '夕阳红充电站', content: '以关注中老年群体的精神文化生活为目标，体现传统文化与当代人文关怀的养老方式，满足精神生活需求。', imgsrc: '../../../static/image/product/list/logo-e.png', width: 60, url: '/xiyanghong' },
        { title: '去听', content: '去听聚合了全国各大出版社各类优质正版书籍资源，为您制定阅读“好声音”的标准，让您畅听中外名著，品味国学新知。', imgsrc: '../../../static/image/product/list/logo-b.png', width: 55, url: '/listen' },
        { title: '智能文化资源宝', content: '是国内唯一一款自带大容量存储和长续航电池的基层文化创新影音播放器。', imgsrc: '../../../static/image/product/list/logo-c.png', width: 61, url: '/intelligence' }
      ]
    }
  }
}
</script>

<style scoped>
@import "../../../static/css/shareProject/shareList.css";
</style>
