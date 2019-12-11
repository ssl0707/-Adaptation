<template>
    <div class="culture">
        <!-- banner -->
        <div class="banner">
            <img src="../../../static/image/product/culture/banner.png" alt="">
        </div>
        <div class="com-product-container">
            <!-- 产品介绍 -->
            <div class="com-product-synopsis">
                <img src="../../../static/image/product/culture/topimg.png" alt="" class="com-product-topimg com-margin-bottom15 com-margin-top15">
                <div class="com-product-describe">
                    民间文化艺术超市，是结合文化和旅游部“中国民间文化艺术之乡”文化品牌项目的 175 个中国民间文化艺术之乡的文化旅游资源优势和其他各市县特色民间文化旅游艺术资 源，通过“互联网+文化旅游”的形式，以线上线下相结合的 O2O 模式打造中国民间文旅 艺术特色服务交易综合云平台，旨在利用全国乡镇基层文化站及综合文化服务中心的丰富资 源，传承和弘扬我国优秀民间文化艺术，加强地方特色文化建设，丰富广大人民群众的精神文化生活。
                </div>
            </div>
            <!-- 资源建议 -->
            <div>
                <div class="text-center"><img class="resource-title com-product-title" src="../../../static/image/product/culture/title-resource.png" alt=""></div>
                <div class="resource-item flex-space-around">
                    <div class="mobi-sub-item">
                        <div class="resource-item-title"><span class="com-pc-showimg">方式1：自主加工</span></div>
                        <div class="resource-des resource-des-a">
                            <p class="com-mobi-showimg">方式1：自主加工</p>
                            资源自主建设覆盖三个方面：
                            <br>
                            1:传统文化艺术作品的数字化呈现；
                            <br>
                            2:传统文化艺术数字视频拍摄、制作；
                            <br>
                            3:艺术之乡旅游资源的数字化加工；
                        </div>
                    </div>
                    <div class="resource-img-a"></div>
                    <div class="mobi-sub-item">
                        <div class="resource-item-title"><span class="com-pc-showimg">方式2：整合资源</span></div>
                        <div class="resource-des resource-des-b">
                            <p class="com-mobi-showimg">方式2：整合资源</p>
                            通过版权合作的方式进行资源搜集与整理，
                            有效解决一下问题：
                            <br>
                            1:地方传统文化数字资源的短板；
                            <br>
                            2优质网络资源内容的引进；
                        </div>
                    </div>
                    <div class="resource-img-wrap">
                        <img src="../../../static/image/product/culture/resource-b.png" alt="" class="resource-img-b">
                        <img src="../../../static/image/product/culture/resource-c.png" alt="" class="resource-img-c">
                    </div>
                </div>
            </div>
            <!-- 平台功能 -->
            <div>
                <div class="text-center"><img class="resource-title com-product-title" src="../../../static/image/product/culture/title-fun.png" alt=""></div>
                <div class="function-describe">
                    平台以数字化、影像化等方式，生动形象地讲述中国文化、中国故事。盘活全国优秀的 民间文化资源，进而整体推进县乡一级的公共文化服务体系建设。实现以传承传播优秀传统
                    文化，弘扬革命历史文化，展示当代文化艺术发展和群众文化建设成果、旅游发展为目标。 平台将实现作品展现、技能教学、作品交易、作品定制、艺术之乡旅游以及活动参与等
                    立体 化全方位服务功能，成为集宣传展示与在线交易为一体的综合服务平台，最大程度地将“中 国民间文化艺术之乡”的宝贵文化艺术资源充分挖掘、利用，实现资源价值的最大化。
                </div> 
                <div class="function-wrap flex-space-around">
                    <div v-for="(item, index) in list" :key="index" class="function-item">
                        <p class="function-item-title">{{item.title}}</p>
                        <div class="function-item-des">{{item.describe}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'culture',
        data () {
            return {
                list: [
                    { title: '艺术活动', describe: '艺术活动模块主要通过文化艺术活动的上传，让更多多用户参与活动，可通过后台上传精彩图片与视频供用户回顾，同时也可以根据用户的需求发布征集活动。' },
                    { title: '艺术超市', describe: '艺术超市模块主要通过模拟线下超市的形式，管理员在后台将作品进行上传、定价、可以提供针对当前这个作品的视频教学课程以及相关的拓展资料供用户了解和学习、交易。' },
                    { title: '艺术传人', describe: '艺术传人：对民间艺术传承人对选择和介绍，同时在每个传承人对主页，也可以统一呈现该传人对所有作品和内容。' },
                    { title: '艺术之乡', describe: '艺术之乡的旅游资源也是群众脱贫致富非常宝贵的资源之一。我们将对艺术之乡的风土人情，习俗和特色进行展示，同时对旅游攻略、路线等提供参考。' },
                    { title: '艺术作品', describe: '民间作品：开辟民间作品上传模块对优秀对作品可转化到艺术超市中进行定价交易和录制教学视频扩大推广。' }
                ]
            }
        }
    }
</script>

<style scoped>
@import '../../../static/css/product/culture.css';
</style>
