<template>
  <div class="correlation">
    <div class="introduce">
      <ul class="item">
        <li>公司简介</li>
        <li>企业文化</li>
        <li>技术实力</li>
      </ul>
    </div>
    <Agency />
  </div>
</template>

<script>

    import Agency from '../agency/Agency';
    export default {
        components: {
            Agency
        }
    }
</script>

<style scoped lang="scss">
.correlation {
  width: 100%;
}
.correlation .introduce {
  width: 100%;
  height: 100%;
  background-color: #0d1122;
  .item {
    padding: 12% 0 12% 25%;
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
  .correlation .introduce .item {
    padding: 16% 25% 18% 25%;
    li {
      font-size: 30px;
      line-height: 100px;
    }
  }
}
@media screen and (min-width: 1440px) {
  .correlation .introduce .item {
    padding: 15% 25% 15% 25%;
    li {
      font-size: 38px;
      line-height: 120px;
    }
  }
}
@media screen and (min-width: 1680px) {
  .correlation .introduce .item li {
    font-size: 48px;
    line-height: 180px;
  }
}
@media (max-width: 768px) {
  .correlation .introduce {
    width: 100%;
    height: 100%;
    background-color: #0d1122;
    .item {
      padding: 45% 25% 50% 25%;
      margin-bottom: 0;
      li {
        font-weight: bold;
        letter-spacing: 6px;
        color: #fff;
        line-height: 104px;
        font-size: 24px;
        text-align: center;
      }
    }
  }
}
</style>
