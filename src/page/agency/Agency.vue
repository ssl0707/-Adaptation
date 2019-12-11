<template>
  <div class="home-agency">
    <div class="agency-box">
      <p class="home-caption agency-text">各省份办事处</p>
      <ul class="home-name">
        <li class="home-model">
          <p class="home-province">北京总部</p>
          <p class="home-site">地址：北京市海淀区豪柏大厦C1座1206</p>
        </li>
        <li class="home-model">
          <p class="home-province hidden-sm hidden-xs"
             style="visibility:hidden">北京总部</p>
          <p class="home-site">7×24小时服务电话：010-52722153</p>
          <p class="home-phone">邮箱：xingyao@xingyao100.com</p>
        </li>
        <li>
          <p class="home-province">内蒙古办事处</p>
          <p class="home-site">地址：内蒙古的详细地址巴拉巴拉</p>
          <p class="home-phone">电话：0470-10101010</p>
        </li>
        <li>
          <p class="home-province">陕西办事处</p>
          <p class="home-site">地址：陕西的详细地址巴拉巴拉</p>
          <p class="home-phone">电话：029-10101010</p>
        </li>
        <li>
          <p class="home-province">天津办事处</p>
          <p class="home-site">地址：天津的详细地址巴拉巴拉</p>
          <p class="home-phone">电话：022-10101010</p>
        </li>
      </ul>
      <p class="home-end agency-text">现诚招全国各省、市代理，期待有识之士来我公司考察合作。</p>

    </div>
    <Footer />
  </div>
</template>

<script>
    import Footer from '../../components/footer/Footer'
    export default {
        name: 'Agency',
        components: { Footer }
    }
</script>

<style scoped lang="scss">
@import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
.home-agency {
  background-color: #061c27;
  font-size: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .agency-box {
    margin: 0 12% 0 18%;
    width: 70%;
    text-align: left;
  }

  .home-caption {
    color: #fff;
    text-align: left;
    font-weight: bold;
    padding: 10% 0 6% 0;
    letter-spacing: 5px;
  }

  .home-end {
    color: #fff;
    text-align: left;
    padding-top: 6%;
    font-weight: bold;
    letter-spacing: 5px;
  }

  .agency-text {
    font-size: 30px;
  }
}

.home-name {
  width: 100%;
  li {
    width: 100%;
    color: #fff;
    height: 50px;
    p {
      line-height: 24px;
    }
    .home-province {
      width: 20%;
      font-size: 24px;
      color: #fff;
      float: left;
      letter-spacing: 2px;
    }
    .home-site {
      width: 44%;
      color: #fff;
      float: left;
      text-align: left;
      letter-spacing: 2px;
      line-height: 30px;
    }

    .home-phone {
      width: 36%;
      float: left;
      letter-spacing: 2px;
      color: #fff;
      line-height: 30px;
    }

    .home-caption,
    .home-end {
      font-size: 28px;
      margin-top: 40px;
    }
  }
}
@media screen and (min-width: 1366px) {
  .home-name li .home-site {
    width: 42%;
  }
  .home-name li .home-phone {
    width: 38%;
  }
  .home-agency .home-caption {
    padding: 10% 0 5% 0;
  }
  .home-agency .home-end {
    padding: 4% 0;
  }
  .home-agency .home-end {
    padding: 9% 0;
  }
}
@media screen and (min-width: 1440px) {
  .home-agency .agency-text {
    font-size: 32px;
    letter-spacing: 5px;
  }
  .home-agency .home-caption {
    padding: 10% 0 6% 0;
  }
  .home-agency .home-end {
    padding: 5% 0 12% 0;
  }
}
@media screen and (min-width: 1680px) {
  .home-agency .agency-text {
    font-size: 40px;
    letter-spacing: 5px;
  }

  .home-agency .home-caption {
    padding: 12% 0 8% 0;
  }

  .home-agency .home-end {
    padding: 12% 0;
  }

  .home-name li .home-province {
    font-size: 30px;
  }

  .home-name li p {
    font-size: 26px;
  }
}
// 移动端样式
@media (max-width: 768px) {
  .home-agency .agency-box {
    width: 88%;
    margin: 0 4% 0 8%;
  }
  .home-agency .home-caption {
    padding: 26% 0 5% 0;
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 0;
  }
  .home-model p {
    width: 100% !important;
    font-size: 12px !important;
    letter-spacing: 0 !important;
    line-height: 20px !important;
  }

  .home-name li .home-province {
    width: 100%;
    font-size: 12px;
    color: #fff;
    float: left;
    letter-spacing: 0;
    margin: 22px 0 0 0;
  }
  .home-name li .home-site {
    font-size: 12px;
    letter-spacing: 0 !important;
    width: 59%;
  }
  .home-name li .home-phone {
    font-size: 12px;
    letter-spacing: 0 !important;
    width: 38%;
  }
  .home-agency .home-end {
    letter-spacing: 0 !important;
    font-size: 12px !important;
    width: 100%;
    padding-bottom: 100px;
    color: #d08941;
  }
}
</style>
