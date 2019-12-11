<template>
  <div class="home-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- Banner模块 -->
        <div class="swiper-slide">
          <div class="home-video hidden-sm hidden-xs">
            <video width="100%"
                   controlslist="nodownload"
                   class="home-autovideo hidden-sm hidden-xs"
                   id="bannerVideo"
                   :autoplay="true"
                   :muted="muteFlag">
              <source :src="bannerVideoSrc"
                      type="video/mp4" />
            </video>
          </div>
          <div class="home-bg hidden-md hidden-lg">
            <div class="home-create">
              <h1>星钥传媒</h1>
              <h5>为创新而存在&nbsp;&nbsp;为创造而努力</h5>
            </div>
          </div>
        </div>
        <!-- 品牌项目模块start -->
        <div class="swiper-slide">
          <div class="home-project">
            <div class="project-t">
              <h1>公共数字文化项目</h1>
              <p class="home-mintit">丰富的政府项目合作经验</p>
            </div>
            <div class="home-accordion hidden-sm hidden-xs">
              <div class="home-row"
                   v-for="(item,index) in projectData"
                   :key="index">
                <img :src="item.src"
                     alt />
                <div class="home-mark">{{item.text}}</div>
              </div>
            </div>
            <div class="home-ms-accordion hidden-md hidden-lg">
              <div class="swiper-project-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"
                       v-for="(item,index) in projectData"
                       :key="index">
                    <img :src="item.src"
                         alt />
                    <div class="home-mark">{{item.text}}</div>
                  </div>
                </div>
                <div class="swiper-project-pagination"></div>
              </div>
            </div>
            <div class="project-b hidden-md hidden-lg">
              <router-link to="/sharelist"
                           target="_blank"
                           tag="a">全部项目</router-link>
            </div>
          </div>
        </div>
        <!-- 品牌项目模块end -->
        <!-- 文化内容模块start -->
        <div class="swiper-slide">
          <Content />
        </div>
        <!-- 文化内容模块end -->
        <!-- 产品展示模块start -->
        <div class="swiper-slide">
          <div class="home-product">
            <div class="project-t">
              <h1>产品展示</h1>
              <p class="home-mintit">公共数字文化领域优质供应商</p>
            </div>
            <div class="home-list">
              <div class="home-box hidden-sm hidden-xs">
                <ul id="list">
                  <li>
                    <img src="../../../static/image/home/banner1.png"
                         alt />
                    <p class="home-title">习书在线</p>
                    <p class="home-con">习书在线是集教材、视频、活动、培训、互动等功能于一体的创新性书法学习服务平台。习书在线书法碑帖是行业首创独家发明的专利技术，是唯一一种通过扫描单字即可观看精讲视频的碑帖。该产品突破了行业学习瓶颈，率先打造出“线上下下相结合”的习书体验。</p>
                  </li>
                  <li>
                    <img src="../../../static/image/home/banner2.png"
                         alt />
                    <p class="home-title">小候鸟互动学习馆</p>
                    <p class="home-con">小候鸟互动学习馆通过资源+平台的深度融合，是专为儿童读者服务的全方位资源学习平台，数据库资源涵盖传统文化少儿绘本、手工制作、小学教育、学前教育、趣味故事、兴趣培养等视频内容，全面、优质的少儿资源能最大化激发少儿的学习兴趣，保证学习的趣味性和孩子的专注度。平台搭配了电子书和图画书，可以激发少儿阅读兴趣，培养孩子的阅读能力和语言能力。</p>
                  </li>
                </ul>
              </div>
              <div class="home-ms-box hidden-md hidden-lg">
                <div class="swiper-box-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <img src="../../../static/image/home/banner1.png"
                           alt />
                      <div class="home-title">习书在线</div>
                      <p class="home-con">习书在线是集教材、视频、活动、培训、互动等功能于一体的创新性书法学习服务平台。习书在线书法碑帖是行业首创独家发明的专利技术，是唯一一种通过扫描单字即可观看精讲视频的碑帖。该产品突破了行业学习瓶颈，率先打造出“线上下下相结合”的习书体验。</p>
                    </div>
                    <div class="swiper-slide">
                      <img src="../../../static/image/home/banner2.png"
                           alt />
                      <p class="home-title">小候鸟互动学习馆</p>
                      <p class="home-con">平台的深度融合，是专为儿童读者服务的全方位资源学习平台，数据库资源涵盖传统文化少儿绘本、手工制作、小学教育、学前教育、趣味故事、兴趣培养等视频内容，全面、优质的少儿资源能最大化激发少儿的学习兴趣，保证学习的趣味性和孩子的专注度。平台搭配了电子书和图画书，可以激发少儿阅读兴趣，培养孩子的阅读能力和语言能力。</p>
                    </div>
                  </div>
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>
                </div>
              </div>
              <div class="home-all hidden-sm hidden-xs cursor">
                <router-link to="/productlist"
                             class="home-allpro"
                             target="_blank"
                             tag="a">全部产品</router-link>
              </div>
            </div>
            <div class="project-b hidden-md hidden-lg cursor">
              <router-link to="/productlist"
                           target="_blank"
                           tag="a">全部产品</router-link>
            </div>
          </div>
        </div>
        <!-- 产品展示模块end -->
        <!-- 推广活动模块start -->
        <div class="swiper-slide">
          <Activity :names="true" />
        </div>
        <!-- 推广活动模块end -->
        <!-- 合作伙伴模块start -->
        <div class="swiper-slide">
          <Team />
        </div>
        <!-- 合作伙伴模块end -->
        <!-- 关于我们模块start -->
        <div class="swiper-slide">
          <div class="home-introduce">
            <ul class="introduce-item">
              <li>公司简介</li>
              <li>企业文化</li>
              <li>技术实力</li>
            </ul>
          </div>
        </div>
        <div class="swiper-slide">
          <Agency />
        </div>
        <!-- 关于我们模块end -->
      </div>
      <div class="swiper-pagination hidden-md hidden-sm hidden-xs"></div>
    </div>
  </div>
</template>

<script>
    import animate from 'script-loader!../../../static/css/swiper.animate.min.js';
    import $ from 'jquery';
    import Swiper from 'swiper';
    import { videoUrl } from '../../config/env'
    import Content from './content.vue'
    import Activity from '../activity/Activity';
    import Team from '../team/Team';
    import Agency from '../agency/Agency';
    export default {
        data () {
            return {
                bannerVideoSrc: videoUrl + 'earth.mp4',
                muteFlag: true,
                projectData: [
                    {
                        id: 1,
                        src: require('../../../static/image/home/src1.jpg'),
                        text: '全民艺术普及'
                    },
                    {
                        id: 2,
                        src: require('../../../static/image/home/src2.jpg'),
                        text: '精准扶贫'
                    },
                    {
                        id: 3,
                        src: require('../../../static/image/home/src3.jpg'),
                        text: '中国民间文化艺术之乡'
                    },
                    {
                        id: 4,
                        src: require('../../../static/image/home/src4.jpg'),
                        text: '文化旅游系列'
                    },
                    {
                        id: 5,
                        src: require('../../../static/image/home/src5.jpg'),
                        text: '"百工"系列'
                    },
                    {
                        id: 6,
                        src: require('../../../static/image/home/src6.jpg'),
                        text: '"薪火相承"系列'
                    }
                ]
            };
        },
        methods: {
            initSwiper () {
                let that = this;
                this.mySwiper = new Swiper('.swiper-container', {
                    direction: 'vertical',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        bulletActiveClass: 'my-bullet-active'
                    },
                    on: {
                        init: function () {
                            that.muteFlag = true;
                            swiperAnimateCache(this); // 隐藏动画元素
                            swiperAnimate(this); // 初始化完成开始动画
                        },
                        slideChangeTransitionEnd: function () {
                            swiperAnimate(this); // 每个slide切换结束时也运行当前slide动画
                            $('.video').each(function () {
                                $(this)[0].pause();
                                $(this).removeAttr('controls');
                                $(this).next('.home-tit').css('font-size', '24px');
                                $('.home-suspend').css('display', 'block');
                            });
                            $('.home-autovideo')[0].pause();
                            if (this.activeIndex === 0) {
                                $('.home-autovideo')[0].play();
                            }
                        }
                    },
                    mousewheel: {
                        sensitivity: 0.1
                    },
                    noSwiping: true
                });
            },
            initProjectSwiper () {
                this.projectSwiper = new Swiper('.swiper-project-container', {
                    autoplay: true,
                    pagination: {
                        el: '.swiper-project-pagination',
                        clickable: true
                    }
                });
            },
            initBoxSwiper () {
                this.boxSwiper = new Swiper('.swiper-box-container', {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                });
            }
        },
        mounted () {
            // 全局轮播
            this.initSwiper();
            // 品牌项目轮播
            this.initProjectSwiper();
            // 产品展示轮播
            this.initBoxSwiper();
            $('body').css('overflow', 'hidden');
        },
        components: {
            Content,
            Activity,
            Team,
            Agency
        },
        beforeDestroy () {
            $('body').css('overflow', 'initial');
        }
    };
    $(function () {
        $('.home-row').hover(
            function () {
                $(this).stop().animate({ width: '27%' }, 1000).siblings().stop().animate({ width: '14.6%' }, 1000);
            },
            function () {
                $(this).siblings().stop().animate({ width: '16.66%' }, 1000);
                $('.home-row').stop().animate({ width: '16.66%' }, 1000);
            }
        );
    });
</script>

<style lang="scss" scoped>
@import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// pc视频样式
.home-video {
  width: 100%;
  height: 100%;
  background: #000;
  .home-autovideo {
    margin-top: 75px;
  }
}
// 标题样式
.project-t {
  h1 {
    font-size: 30px;
    letter-spacing: 5px;
    color: #fff;
    padding-top: 120px;
    font-weight: bold;
    margin-top: 0;
  }
  .home-mintit {
    font-size: 22px;
    letter-spacing: 3px;
    color: #fff;
    text-align: center;
    margin: 20px 0 30px 0;
  }
}
/* 公共数字文化项目start  */
.home-project {
  width: 100%;
  height: 100%;
  background-color: #061c27;
  text-align: center;
  .home-accordion {
    display: flex;
    margin-top: 20px;
    width: 100%;
    height: 75%;
    .home-row {
      position: relative;
      width: 16.66%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .home-mark {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 31px;
      font-size: 28px;
      z-index: 6;
      font-weight: bold;
      letter-spacing: 4px;
      color: #333;
    }
  }
}
// /* 产品展示 */
.home-product {
  height: 100%;
  text-align: center;
  background-color: #061c27;
}
.home-list {
  position: relative;
  width: 100%;
  height: 69%;
  .home-box {
    margin: 1% auto 0 auto;
    width: 90%;
    overflow: hidden;
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
    }
    ul li {
      float: left;
      width: 45%;
      border-radius: 10px;
      padding: 0 1.5% 1% 1.5%;
      img {
        width: 100%;
      }
      .home-title {
        text-align: left;
        letter-spacing: 3px;
        font-size: 16px;
        line-height: 30px;
        color: #fff;
        font-weight: 500;
      }
      .home-con {
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 2px;
        color: #fff;
        text-align: left;
      }
    }
  }
  .home-all {
    margin: auto;
    width: 182px;
    height: 56px;
    border: solid 1px #fff;
    .home-allpro {
      display: inline-block;
      margin: 4px;
      width: 172px;
      height: 46px;
      line-height: 46px;
      border: solid 1px #fff;
      text-align: center;
      color: #fff;
      font-size: 26px;
      letter-spacing: 4px;
    }
  }
}
.home-introduce {
  width: 100%;
  height: 100%;
  background-color: #0d1122;
  position: relative;
  .introduce-item {
    position: absolute;
    left: 30%;
    top: 25%;
    li {
      font-weight: bold;
      letter-spacing: 6px;
      color: #fff;
      line-height: 180px;
      font-size: 30px;
    }
  }
}
@media screen and (min-width: 1366px) {
  .home-project .home-accordion .home-mark {
    font-size: 24px;
  }
  // 产品展示
  .project-t {
    h1 {
      font-size: 28px;
      padding-top: 80px;
    }
    .home-mintit {
      font-size: 16px;
      margin: 8px 0 20px 0;
    }
  }
  .home-list .home-box ul li {
    padding: 0 1.5% 0 1.5%;
    .home-title {
      font-size: 18px;
      margin: 6px 0;
    }
    img {
      height: 66%;
    }
    .home-con {
      font-size: 12px;
      letter-spacing: 2px;
      line-height: 15px;
    }
  }
  .home-list .home-all {
    width: 168px;
    height: 46px;
    .home-allpro {
      width: 155px;
      font-size: 24px;
      height: 36px;
      line-height: 36px;
      text-decoration: none;
    }
  }
  .home-introduce .introduce-item li {
    font-size: 30px;
    line-height: 140px;
  }
}
@media screen and(min-width: 1440px) {
  .project-t {
    h1 {
      font-size: 30px;
      padding-top: 100px;
    }
    .home-mintit {
      font-size: 16px;
      margin: 8px 0 20px 0;
    }
  }
  .home-list .home-box ul li .home-title {
    margin: 12px 0;
  }
  .home-list .home-box ul li {
    width: 48%;
    .home-con {
      font-size: 12px;
      letter-spacing: 1px;
      line-height: 18px;
    }
  }
  .home-introduce .introduce-item li {
    font-size: 38px;
    line-height: 140px;
  }
}
@media screen and (min-width: 1680px) {
  .project-t {
    h1 {
      font-size: 40px;
      padding-top: 120px;
      margin-top: 0;
    }
    .home-mintit {
      font-size: 22px;
      margin: 20px 0 30px 0;
    }
  }
  .home-project .home-accordion .home-mark {
    font-size: 30px;
  }
  .home-list .home-box ul li {
    padding: 0 1.5% 0.6% 1.5%;
    .home-title {
      font-size: 24px;
      margin: 20px 0;
    }
    .home-con {
      font-size: 14px;
      letter-spacing: 3px;
      line-height: 20px;
    }
  }
  .home-list .home-all {
    width: 182px;
    height: 56px;
    .home-allpro {
      width: 172px;
      font-size: 30px;
      height: 46px;
      line-height: 46px;
    }
  }
  .home-introduce .introduce-item li {
    font-size: 48px;
    line-height: 180px;
  }
}

// 移动端适配
@media (max-width: 768px) {
  .home-bg {
    width: 100%;
    height: 100%;
    background-image: url("../../../static/image/home/bg.png");
    position: relative;
    img {
      width: 100%;
    }
    .home-create {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-align: center;
    }
  }
  // 文化项目样式start
  .home-project {
    display: flex;
    flex-direction: column;
  }
  .project-t {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 125px;
    padding-top: 60px;
    flex-shrink: 0;
    h1 {
      letter-spacing: 0;
      font-size: 24px;
      padding: 0;
    }
    .home-mintit {
      font-size: 14px;
      letter-spacing: 0;
      line-height: 1;
      margin: 0;
    }
  }
  .home-ms-accordion {
    height: 73% !important;
    .swiper-project-container {
      width: 100%;
      height: 95%;
      .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
      .home-mark {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 31px;
        font-size: 24px;
        z-index: 6;
        font-weight: bold;
        letter-spacing: 4px;
        color: #333;
      }
      .swiper-project-pagination {
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .project-b {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    a {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      padding: 0px 10px;
      outline: none;

      background: transparent;
      color: #fff;
      font-size: 16px;
      border: 1px solid #fff;
    }
  }
  .home-ms-videolist {
    width: 100%;
    margin-top: 3%;
    ul {
      width: 100%;
      height: 100%;
      li {
        float: left;
        width: 45%;
        height: 56%;
        margin: 1.2% 2.5%;
        position: relative;
        .video {
          width: 100%;
          height: 180px;
          background: #fff;
        }
        .home-headline {
          font-size: 12px;
          line-height: 28px;
          color: #fff;
        }
        .home-ms-suspend {
          position: absolute;
          top: 40%;
          left: 50%;
          width: 35px;
          height: 35px;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .home-product {
    display: flex;
    flex-direction: column;
    .home-ms-box {
      width: 79.7%;
      overflow: hidden;
      margin: 0 10%;
      height: 100%;
      .swiper-wrapper {
        width: 100% !important;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
        .home-title {
          font-size: 22px;
          color: #fff;
          text-align: left;
          margin: 10px 0;
        }
        .home-con {
          font-size: 14px;
          color: #fff;
          letter-spacing: 0.6px;
          text-align: left;
        }
      }
      .swiper-button-prev {
        position: absolute;
        left: 2%;
        top: 18%;
        width: 25px;
        height: 45px;
        background-image: url("../../../static/image/home/min-left.png") !important;
      }
      .swiper-button-next {
        position: absolute;
        right: 2%;
        top: 18%;
        width: 25px;
        height: 45px;
        background-image: url("../../../static/image/home/min-right.png") !important;
      }
      .swiper-button-prev:focus {
        outline: none;
      }
      .swiper-button-next:focus {
        outline: none;
      }
      .swiper-button-prev:after,
      .swiper-button-next:after {
        font-size: 0 !important;
      }
    }
  }
  .home-introduce {
    display: flex;
    flex-direction: column;
    .introduce-item {
      left: 35%;
      li {
        font-size: 24px;
        line-height: 100px;
        font-weight: normal;
      }
    }
  }
}
</style>
