<template>
  <div class="header">
    <div class="header-nav">
      <router-link to="/home"
                   tag="span"
                   :class="checked_name=='首页'?'':''"
                   @click.native="click_category('首页')">星钥传媒</router-link>
      <div class="header-menu"
           @click.stop="onMenu">
        <img src="../../../static/image/home/menu.png"
             alt />
      </div>
      <div :class="`${screenWidth > 768 ? 'header-box' : 'header-sm'} ${smFlag}`"
           @click.stop="onMenu">
        <div class="ul-trans"></div>
        <ul>
          <li>
            <router-link to="/home"
                         tag="a"
                         :class="checked_name=='首页'?'head_checked':''"
                         @click.native="click_category('首页')">首页</router-link>
          </li>

          <li>
            <router-link to="/sharelist"
                         tag="a"
                         target="_blank"
                         :class="checked_name=='品牌项目'?'head_checked':''"
                         @click.native="click_category('品牌项目')">品牌项目</router-link>
          </li>
          <li>
            <router-link to="/productlist"
                         tag="a"
                         target="_blank"
                         :class="checked_name=='产品展示'?'head_checked':''"
                         @click.native="click_category('产品展示')">产品展示</router-link>
          </li>
          <li>
            <router-link to="/activity"
                         tag="a"
                         target="_blank"
                         :class="checked_name=='推广活动'?'head_checked':''"
                         @click.native="click_category('推广活动')">推广活动</router-link>
          </li>
          <li>
            <router-link to="/team"
                         tag="a"
                         target="_blank"
                         :class="checked_name=='合作伙伴'?'head_checked':''"
                         @click.native="click_category('合作伙伴')">合作伙伴</router-link>
          </li>
          <li>
            <router-link to="/aboutus"
                         tag="a"
                         target="_blank"
                         :class="checked_name=='关于我们'?'head_checked':''"
                         @click.native="click_category('关于我们')">关于我们</router-link>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery';
    export default {
        data () {
            return {
                checked_name: '首页',
                smFlag: '',
                screenWidth: 0
            };
        },
        methods: {
            click_category (name) {
                this.checked_name = name;
            },
            fetchData () {
                if (this.$route.path === '/home') {
                    this.checked_name = '首页';
                } else if (this.$route.path === '/sharelist') {
                    this.checked_name = '品牌项目';
                } else if (this.$route.path === '/productlist') {
                    this.checked_name = '产品展示';
                } else if (this.$route.path === '/activity') {
                    this.checked_name = '推广活动';
                } else if (this.$route.path === '/team') {
                    this.checked_name = '合作伙伴';
                } else if (this.$route.path === '/aboutus') {
                    this.checked_name = '关于我们';
                }
            },

            // 点击移动端菜单按钮
            onMenu () {
                this.smFlag = this.smFlag ? '' : 'on';
            }
        },
        mounted () {
            const that = this;
            this.screenWidth = document.body.clientWidth;
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth;
                    that.screenWidth = window.screenWidth;
                })();
            };
            this.fetchData();
        },

        watch: {
            $route: 'fetchData'
        }
    };
    $(function () {
        $('body').click(function () {
            $('.header-sm').removeClass('on')
        })
    })
</script>
<style scoped lang="scss">
@import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8888;
  width: 100%;
  height: 75px;
  background: rgba(51, 50, 50, 0.5);
  color: #fff;
}
.header:hover {
  background: #000;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  span {
    display: inline-block;
    color: #fff;
    line-height: 75px;
    font-size: 18px;
    cursor: pointer;
  }
  .header-menu {
    display: none;
  }
}
.header-box ul {
  display: flex;
  li {
    color: #fff;
    margin: 22px;
    font-size: 18px;
    cursor: pointer;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  li:hover {
    color: #3ba0ce !important;
  }
}
.head_checked {
  color: #3ba0ce !important;
}

@media (max-width: 768px) {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 8888;
    width: 100%;
    height: 50px;
    background: rgba(51, 50, 50, 0.5);
    color: #fff;
    .header-menu {
      display: block;
      float: right;
      padding-top: 14px;
      img {
        width: 55%;
      }
    }
  }
  .header:hover {
    background: rgba(51, 50, 50, 0.5);
  }
  .header .ul-trans {
    height: 50px;
    background: transparent;
  }
  .header-nav {
    width: 90%;
    span {
      line-height: 50px;
    }
  }
  .header-sm {
    position: fixed;
    top: 0;
    right: 0;
    width: 35%;
    height: 100%;
    transition: all 0.3s ease-out;
    transform: translateX(100%);
    z-index: 999;
    flex: 1;
    display: flex;
    flex-direction: column;
    ul {
      flex: 1;
      margin-bottom: 0;
      background: rgba(51, 50, 50, 0.5);
      li {
        width: 100%;
        height: 60px;
        line-height: 60px;
        margin: 0;
        font-size: 18px;
        color: #fff;
        text-align: center;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
      li:hover {
        color: #26467f !important;
      }
    }
  }
  .on {
    transform: translateX(0);
  }
}
</style>
