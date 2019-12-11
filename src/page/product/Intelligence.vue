<template>
    <div class="intelligence">
        <!-- banner -->
        <div class="banner">
            <img src="../../../static/image/product/intelligence/banner.png" alt="">
        </div>
        <div class="com-product-container">
            <!-- 产品介绍 -->
            <div class="">
                <div class="text-center com-mobi-scale"><img class="introduce-title" src="../../../static/image/product/intelligence/title-introduce.png" alt=""></div>
                <p class="introduce-des-top com-font-intelligence">
                    中版智能文化资源宝内置1TB优质资源，具有超高清画质投影、5W高保真音响、内置卡拉OK模块、1500流明亮度、大容量锂电池、镜头防尘保护等功能，在无网、不插电情况下可连续播放影视资源3小时，联网状态下支持资源下载、更新及电视直播，是国内唯一一款自带大容量存储和长续航电池的基层文化智能创新影音播放器。
                </p>
                <p class="introduce-des text-center com-font-intelligence">超高清画质投影，内置<span class="com-font-red">1TB</span>大容量硬盘，<span class="com-font-red">20000mAH</span>大容量锂电池，可连续播放视频<span class="com-font-red">4小时</span></p>
                <img src="../../../static/image/product/intelligence/introduce-a.png" alt="" class="com-pc-showimg introduce-img">
                <img src="../../../static/image/product/intelligence/mobi-introduce-a.png" alt="" class="com-mobi-showimg introduce-img">
                <img src="../../../static/image/product/intelligence/mobi-introduce-b.png" alt="" class="com-mobi-showimg introduce-img">
                <p class="introduce-des text-center com-font-intelligence"><span class="com-font-red">5W</span>高保真音响，内置<span class="com-font-red">卡拉OK</span>模块，<span class="com-font-red">800ANSI</span>流明，整机加固设计，镜头防尘保护</p>
                <img src="../../../static//image/product/intelligence/introduce-b.png" alt="" class="introduce-img introduce-img-b">
                <p class="introduce-des com-font-intelligence">智能配件组合：VR虚拟现实眼镜，观看3D影片，体验式游戏头盔式瞳距、焦距均可调节，支持600度以下近视眼镜人群直接佩戴，精心打造更好的视觉 不变形广角大镜片，全景视角</p>
                <img src="../../../static/image/product/intelligence/mobi-introduce-c.png" alt="" class="com-mobi-showimg introduce-img">
                <img src="../../../static/image/product/intelligence/mobi-introduce-d.png" alt="" class="com-mobi-showimg introduce-img">
                <img src="../../../static/image/product/intelligence/introduce-c.png" alt="" class="com-pc-showimg introduce-img introduce-img-c">
            </div> 
            <!-- 定制资源内容 -->
            <div>
                <div class="text-center com-mobi-scale"><img class="made-title" src="../../../static/image/product/intelligence/title-made.png" alt=""></div>
                <p class="com-font-intelligence made-sub-title text-center">中国出版集团旗下的国家级出版机构</p>
                <div class="made-wrap flex-space-around">
                    <div v-for="(item,index) in list" :key="index"  class="made-item">{{item.title}}</div>
                </div>
                <p class="com-font-intelligence text-center">内置正版资源<span class="com-font-red">3万</span>种电子书小时有声书<span class="com-font-red">2000部</span>视频资源</p>
                <p class="com-font-intelligence text-center">内置资源全部通过<span class="com-font-red">中宣部和国家新闻出版广电总审核</span>无网无电环境下也可观看</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'intelligence',
        data () {
            return {
                list: [
                    { title: '商务印书馆', url: '' },
                    { title: '中华书局', url: '' },
                    { title: '三联书店', url: '' },
                    { title: '人民美术出版社', url: '' },
                    { title: '人民文学出版社', url: '' },
                    { title: '人民音乐出版社', url: '' },
                    { title: '中国大百科全书', url: '' },
                    { title: '中国图书进出口总公司', url: '' }
                ]
            }
        }
    }
</script>

<style scoped>
@import '../../../static/css/product/intelligence.css';
</style>
