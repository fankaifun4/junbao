<style lang="less" scoped>

</style>
<template>
  <div>
    <div class="swiper-container"></div>
    <div>
      <div>

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    mounted () {
      console.log(this.$store.state.userInfo)
    }
  }
</script>
