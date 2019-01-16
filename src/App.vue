<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .assessment {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .red {
    color: #ef4300 !important;
  }
  .black {
    color: #333!important;
  }
  .green{
    color: #090 !important;
  }
  .blod{
    font-weight: 700 !important;
  }
  .blue{
     color:#738ae6 !important;
  }
  .wait{
    color: #ff9900  !important;
  }
  .agree{
    color: #090  !important;
  }
  .freeze{
    color: #f00  !important;
  }
</style>
