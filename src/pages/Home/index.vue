<style scoped lang='less'>
  .assessment{
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    .top-container {
      flex-shrink: 0;
      height: 360px;
      background: url("../../assets/banner.png") top;
      background-size: 100%;
      background-repeat: no-repeat;
    }

    .nav-tab {
      height: 112px;
      width: 100%;
      font-size: 28px;
      font-weight: normal;
      display: flex;
      align-items: center;
      justify-content: center;
      &.hidden {
        visibility: hidden;
      }
      .ofhidden {
        overflow: hidden;
        overflow-x: auto;
      }
      .quarter-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 56px;
        > .quarter-item {
          width: 148px;
          height: 56px;
          height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          &.current {
            color: #FF3015;
            background: #fff;
            border-radius: 28px;
          }
        }
      }
      .month-wrap {
        overflow: hidden;
        width: 100%;
        height: 52px;
        padding: 0 28px;
        .nav-item-wrap {
          height: 52px;
          display: flex;
        }
        .nav-item {
          width: 96px;
          height: 52px;
          overflow: hidden;
          text-align: center;
          line-height: 52px;
          color: #fff;
          margin-right: 7px;
          &:last-child {
            margin-right: 0;
          }
          &.active-nav {
            color: #ff4f25;
            background: #fff;
            border-radius: 26px;
          }
        }
      }
    }
    .no-data {
      display: flex;
      flex-shrink: 0;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 28px;
      color: #999;
      position: absolute;
      width:300px;
      height: 300px;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      margin:auto;
      .no-assessment{
        width:196px;
        height: 196px;
        background: url("../../assets/no-data.png") no-repeat;
        background-size: 100% 100%;
        margin-bottom:10px;
      }
    }
  }

</style>
<template>
  <div class="assessment">
    <div class="top-container">
      <div class="nav-tab">
        <div class="month-wrap">
          <div class="ofhidden" >
            asdasdasdas
          </div>
        </div>
        <div class="mun-content" >
        </div>
      </div>
    </div>
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
