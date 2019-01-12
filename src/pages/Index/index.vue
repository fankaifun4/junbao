<template>
  <div class="page-container">
    <route-view class="page-wrap"></route-view>
    <div class=""></div>
  </div>
</template>
<script>
  export  default {

  }
</script>
<style lang="less" scoped>
  .page-container{
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    right: 0px;
    overflow: hidden;
    .page-wrap{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 110px;
    }
  }
</style>
