<style lang="less" scoped>
  div{
    width:750px;
    background: #f90;
    height: 300px;
  }
</style>
<template>
  <div>
    <div>{{userInfo.contact}}</div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export  default {
    data(){
      return {
      }
    },
    mounted(){
      this.initData()
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods:{
      initData(){
        console.log(this.userInfo)
      }
    }
  }
</script>
