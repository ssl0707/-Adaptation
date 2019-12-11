<template>
  <div class="home-content">
    <div class="project-t">
      <h1>公共数字文化内容</h1>
    </div>
    <div class="carousel hidden-sm hidden-xs">
      <el-carousel :autoplay="false"
                   type="card"
                   indicator-position="none">
        <el-carousel-item id="name"
                          v-for="(item, ind) in mainData"
                          :key="item.id">
          <video class="video"
                 id="myVideo"
                 :poster="item.pc_poster"
                 controlslist="nodownload">
            <source :src="item.videoSrc"
                    type="video/mp4" />
          </video>
          <p class="home-tit">{{item.videoTitle}}</p>
          <img class="home-suspend"
               @click="changeVideo(ind, '.carousel')"
               src="../../../static/image/home/close1.png"
               alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-ms-videolist hidden-md hidden-lg">
      <ul>
        <li v-for="(item, ind) in mainData"
            :key="ind">
          <video class="video"
                 id="myVideos"
                 :poster="item.mobile_poster"
                 controlslist="nodownload">
            <source :src="item.videoSrc"
                    type="video/mp4" />
          </video>
          <p class="home-headline">{{item.videoTitle}}</p>
          <img class="home-ms-suspend"
               @click="changeVideo(ind, '.home-ms-videolist')"
               :src="item.openImg"
               alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery';
    import { videoUrl } from '../../config/env'
    export default {
        data () {
            return {
                mainData: [
                    {
                        id: 1,
                        videoSrc:
                            videoUrl + 'video2.mp4',
                        pc_poster: require('../../../static/image/home/pc-poster2.jpg'),
                        mobile_poster: require('../../../static/image/home/mobile_poster2.jpg'),
                        openImg: require('../../../static/image/home/close1.png'),
                        videoTitle: '扎鲁特旗版画'
                    },
                    {
                        id: 2,
                        videoSrc:
                            videoUrl + 'video1.mp4',
                        pc_poster: require('../../../static/image/home/pc-poster1.jpg'),
                        mobile_poster: require('../../../static/image/home/mobile_poster1.jpg'),
                        openImg: require('../../../static/image/home/close1.png'),
                        videoTitle: '细岩雕刻工艺'
                    },
                    {
                        id: 3,
                        videoSrc: videoUrl + 'video3.mp4',
                        pc_poster: require('../../../static/image/home/pc-poster3.jpg'),
                        mobile_poster: require('../../../static/image/home/mobile_poster3.jpg'),
                        openImg: require('../../../static/image/home/close1.png'),
                        videoTitle: '扎佐石竹蹄髈酸菜制作工艺'
                    }
                ]
            }
        },
        methods: {
            // 点击切换视频按钮
            changeVideo (ind, el) {
                let arr = [0, 1, 2];
                arr.splice(ind, 1);
                arr.forEach(item => {
                    $(el).find('.video')[item].pause();
                    $(el).find('#myVideo').eq(item).removeAttr('controls');
                    $(el).find('.video').next('.home-tit').eq(item).css('font-size', '24px');
                    $(el).find('img').eq(item).css('display', 'block');
                });
                $(el).find('.video')[ind].play();
                $(el).find('#myVideo').eq(ind).attr('controls', 'controls');
                $(el).find('.video').next('.home-tit').eq(ind).css('font-size', '32px');
                $(el).find('img').eq(ind).css('display', 'none');
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "element-ui/lib/theme-chalk/index.css";
// /* 公共数字文化项目end  */
.home-content {
  width: 100%;
  height: 100%;
  background-color: #0d1122;
  text-align: center;
  h1 {
    font-size: 30px;
    letter-spacing: 5px;
    color: #fff;
    font-weight: bold;
    padding-top: 120px;
    margin-top: 0;
  }
  .carousel {
    margin-top: 40px;
    height: 70%;
  }
  .el-carousel--horizontal {
    height: 100%;
    overflow: initial !important;
  }
  .el-carousel__container {
    position: relative;
    margin-top: 40px;
    background: transparent !important;
    height: 100% !important;
    .el-carousel__item {
      overflow: initial !important;
      .el-carousel__mask {
        opacity: inherit !important;
        width: 0 !important;
        height: 0 !important;
        background-color: transparent !important;
      }
      video {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: none;
        outline: 0 none !important;
      }
      .home-tit {
        width: 100%;
        color: #fff;
        text-align: center;
        font-size: 24px;
        line-height: 100px;
      }
      .home-suspend {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        transform: translate(-50%, -50%);
      }
    }
  }
}
@media screen and (min-width: 1366px) {
  .project-t h1 {
    font-size: 28px;
    padding-top: 80px;
  }
  .home-content .carousel {
    height: 60%;
  }
  .home-project .home-accordion .home-mark {
    font-size: 24px;
  }
}
@media screen and (min-width: 1440px) {
  .project-t h1 {
    font-size: 30px;
    padding-top: 100px;
    margin-top: 0;
  }
}
@media screen and (min-width: 1680px) {
  .project-t h1 {
    font-size: 40px;
    padding-top: 120px;
    margin-top: 0;
  }
}
@media (max-width: 768px) {
  .home-content {
    display: flex;
    flex-direction: column;
    h1 {
      letter-spacing: 0;
      font-size: 24px;
      padding-top: 60px;
      margin-top: 0;
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
        margin: 2% 2% 7% 2%;
        position: relative;
        .video {
          width: 100%;
          height: 178px;
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
          width: 55px;
          height: 55px;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
