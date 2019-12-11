<template>
  <div class="sharelist">
    <!-- banner -->
    <div class="pc-banner">
      <img src="../../../static/image/share/banner-list.jpg"
           alt="">
    </div>
    <div class="model-banner">
      <img src="../../../static/image/share/mod-banner.jpg"
           alt="">
    </div>
    <!-- list -->
    <div class="nav-wrap">
      <ul class="nav flex-space-between">
        <li v-for="(item,index) in navList"
            :key="index"
            class="nav-item"
            :class="index == 0 ? 'active' : ''">{{item.name}}</li>
      </ul>
    </div>
    <!-- 展示列表 -->
    <ul class="content flex-space-between">
      <li v-for="(showItem, index) in showList"
          :key="index"
          class="item">
        <div class="item-img-wrap">
          <img :src="showItem.imgsrc"
               alt=""
               :style="`width:${showItem.width}px`"
               class="item-img">
        </div>
        <router-link tag="span"
                     :to="showItem.url"
                     class="item-title text-center">{{showItem.title}}</router-link>
        <div class="item-des">{{showItem.content}}</div>
        <router-link :to="showItem.url"
                     class="detail">详情</router-link>
      </li>
    </ul>
    <!-- 分页 -->
    <!-- <div id="pageBar">
            <div class="page">
              <pagehelper ref="mypage"
                          @jumpPage="pageChange"
                          :totalCount="totalCount"
                          :pageNumber="pageNumber"
                          :pageSizeArray="pageSizeArray"></pagehelper>
            </div>
        </div> -->
  </div>
</template>

<script>
    import pagehelper from '../../components/pagination/Pagination';
    export default {
        name: 'shareList',
        components: {
            pagehelper
        },
        data () {
            return {
                pageNumber: 1, // 当前页码
                pageSize: 12, // 每页显示条数
                totalCount: 100, // 总条数
                pageSizeArray: [12, 24, 36], // 每页显示条数
                navList: [ // nav list
                    { name: '精准扶贫系列' },
                    { name: '全民艺术普及系列' },
                    { name: '中国民间文化艺术之乡系列' },
                    { name: '“百工”系列' },
                    { name: '文化旅游系列' },
                    { name: '“薪火相承”专题系列' }
                ],
                showList: [ // 展示列表数据
                    { title: '塞上江南多媒体资源库（一期）', content: '推动公共文化扶贫网络建设，整合文化资源，为广大群众量身定制了一套集技能培训、法律知识以及留守儿童再教育的资源平台。', imgsrc: '../../../static/image/share/show_list_d.png', width: 94, url: '/ningxiassjn' },
                    { title: '塞上江南多媒体资源库（二期）', content: '在一期实施的基础上，将资源和平台进行优化更新，拓展更新文化资源类别，更好的满足群众学习需求。', imgsrc: '../../../static/image/share/show_list_a.png', width: 70, url: '/ningxiajzfp' },
                    { title: '陕西I守护多媒体资源库', content: '项目资源针对不同群体配备了不同的内容，将资源进行了合理的划分以满足不同群体的使用需求，是一款有针对性的资源平台。', imgsrc: '../../../static/image/share/show_list_d.png', width: 94, url: '/shanxi' },
                    { title: '安徽小候鸟守护计划（一期）', content: '通过互联网搭建资源和学习平台，利用最新技术，通过动画和游戏的方式呈现，制作有针对性的在线资源平台。', imgsrc: '../../../static/image/share/show_list_d.png', width: 94, url: '/anhui' },
                    { title: '龙江小候鸟守护（二期）', content: '以儿童教育为主，资源内容以视频、电子书、图画书的形式呈现，配合服务推广活动，让孩子们喜欢上寓教于乐的学习方式。', imgsrc: '../../../static/image/share/show_list_c.png', width: 55, url: '/longjiang' },
                    { title: '四川夜明珠多媒体资源库', content: '汉藏双语版儿童夜明珠项目是专为藏族地区儿童量身定制的平台，资源内容按照年龄段和资源形式进行划分，充分满足了当地孩子们的阅读需求。', imgsrc: '../../../static/image/share/show_list_b.png', width: 59, url: '/sichuan' }
                ]
            }
        },
        methods: {
            // 分页
            pageChange: function (obj) {
                this.page_number = obj.currentPage
                this.page_size = obj.currentSize
                this.isLoading = true
                console.log(obj, 'obj')
                // $("html,body").finish().animate({
                //     "scrollTop": "0px"
                // }, 100);
            }
        }
    }
</script>

<style scoped>
@import "../../../static/css/shareProject/shareList.css";
</style>
