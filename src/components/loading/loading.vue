<template>
  <div class="mf-loading-container">
    <img src="./loading.gif">
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'loading'

  export default {
    name: COMPONENT_NAME
  }
</script>
<style lang="less" scoped>
  .mf-loading-container{
    img{
      width: 40px;
      height: 40px;
      display: block;
    }
  }
</style>
