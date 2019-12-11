<template>
    <div class="xiyanghong mobile">
        <!-- banner -->
        <div class="banner">
            <img src="../../../static/image/product/xiyanghong/banner.png" alt="">
        </div>
        <div class="com-product-container">
            <!-- 产品介绍 -->
            <div>
                <div class="text-center com-mobi-scale"><img class="introduce-title com-product-title" src="../../../static/image/product/xiyanghong/title-introduce.png" alt=""></div>
                <p class="introduce-des com-mobi-text">夕阳红充电站是一个服务于中老年群体的慕课平台，它是以老年人的物质生活需求基本得到保障为前提，以满足精神需求为基础，以沟通情感、交流思想、拥有健康身心为基本内容的养老方式，具有广泛性、群体性、互动性、共享性等特点。</p>
                <img src="../../../static//image/product/xiyanghong/introduce.png" alt="" class="introduce-img">
            </div>
            <!-- 夕阳红慕课 -->
            <div>
                <div class="text-center com-mobi-scale"><img class="muke-title com-product-title" src="../../../static/image/product/xiyanghong/title-muke.png" alt=""></div>
                <div class="muke-wrap flex-space-between">
                    <div v-for="(item,index) in list" :key="index" class="muke-item">
                        <img :src="item.imgsrc" alt="" class="muke-item-img">
                        <div>
                            <p v-for="(items,index) in item.desarray" :key="index" class="muke-des">{{items}}</p>
                        </div>
                    </div>
                </div>
                <a target="_blank" href="http://xiyanghong.anhui.xingyao100.com/web/home" class="com-to-net">进入官网</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'xiyanghong',
        data () {
            return {
                list: [
                    { imgsrc: '../../../static/image/product/xiyanghong/muke-a.png', desarray: ['诈骗防范', '老年急救常识', '花草种植', '宠物天地'] },
                    { imgsrc: '../../../static/image/product/xiyanghong/muke-b.png', desarray: ['隔代教育', '正面管教', '亲自游戏', '学讲故事'] },
                    { imgsrc: '../../../static/image/product/xiyanghong/muke-c.png', desarray: ['养生知识', '养生资讯甄别', '健康食谱', '养生操&家庭养生技巧', '老年养生误区'] },
                    { imgsrc: '../../../static/image/product/xiyanghong/muke-d.png', desarray: ['智能手机使用', '移动消费、手机购物', '智能家用电器使用', '手机娱乐', '电脑、平板使用'] },
                    { imgsrc: '../../../static/image/product/xiyanghong/muke-e.png', desarray: ['国内各省文化旅游宣传片', '国内热门景点宣传片', '国际热门经典宣传片', '国际文化圣地'] },
                    { imgsrc: '../../../static/image/product/xiyanghong/muke-f.png', desarray: ['广场舞', '书法', '绘画', '棋牌', '老年英语学习'] }
                ]
            }
        }
    }
</script>

<style scoped>
@import '../../../static/css/product/xiyanghong.css';
</style>
