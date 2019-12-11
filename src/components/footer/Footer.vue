<template>
  <div class="footer">
    <div class="hidden-sm hidden-xs pc-footer">Copyright © 2019.xingyao All rights reserved | 星钥(北京)文化传媒有限公司 </div>
    <div class="hidden-md hidden-lg mobi-footer">Copyright © 2019.xingyao
      <br />All rights reserved | 星钥(北京)文化传媒有限公司</div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style>
@import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
.footer {
  width: 100%;
  height: 85px;
  line-height: 85px;
  text-align: center;
  background-color: #041720;
}
.footer .pc-footer {
  font-size: 14px;
  letter-spacing: 1px;
  color: #999;
}

@media (max-width: 768px) {
  .footer {
    width: 100%;
    height: 55px;
    background-color: #041720;
  }
  .footer .mobi-footer {
    font-size: 12px;
    color: #999;
    padding: 8px 0;
    line-height: 18px;
  }
}
</style>
