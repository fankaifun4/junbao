<style scoped lang='less'>
  .assessment {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    .top-container {
      flex-shrink: 0;
      padding-top: 50px;
      background: url("../../assets/banner.png") top;
      background-size: 100%;
      background-repeat: no-repeat;
      overflow: hidden;
    }

    .nav-tab {
      height: 110px;
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
        color: #fff;
      }
    }
    .userinfo {
      width: 700px;
      height: 260px;
      border-radius: 6px;
      box-shadow: 0 0 8px 1px rgba(0, 0, 0, .1);
      background: #ffffff;
      margin: 15px auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 80px;
      .avart {
        width: 150px;
        height: 150px;
        img {
          width: 150px;
          height: 150px;
        }
        margin-right: 50px;
      }
      .user-type {
        font-size: 32px;
      }
      .user-level {
        font-size: 40px;
        color: #333;
        font-weight: 600;
        text-shadow: 0 2px 1px rgba(255, 215, 0, .4);
      }
    }
  }

  .footer-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-blok {
    width: 700px;
    border-radius: 6px 6px;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, .1);
    overflow: hidden;
    font-size: 28px;
    .block-title {
      padding: 24px 32px;
      background: #ef4300;
      color: #fff;
      text-align: left;
    }
    .block-body {
      padding: 24px 32px;
      .types{
        font-size: 30px;
        text-align: left;
        border-bottom: 5px solid #FF0543;
        padding-bottom: 14px;
      }
      .line-block{
        text-align: left;
        padding:18px 10px;
        font-size: 32px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        &:last-child{
          border-bottom: none;
        }
      }
    }
  }
</style>
<template>
  <div class="assessment">
    <div class="top-container">
      <div class="userinfo">
        <div class="avart">
          <img src="../../assets/icon/man.png" alt="">
        </div>
        <div>
          <h4 class="user-type"> {{userInfo.name}}</h4>
          <div class="user-level" v-if="userInfo.type=='agent'"> {{LevelName()}}</div>
          <div class="user-type">账号：{{userInfo.email}}</div>
        </div>
      </div>
    </div>
    <div class="footer-body">
      <div class="content-blok">
        <div class="block-title">我的产品</div>
        <div class="block-body">
          <div>
            <h4 class="types">俊宝闪充</h4>
            <div class="line-block">总营业额<span class="red">{{totalNum.all_money }}</span></div>
            <div class="line-block">总设备数<span class="red">{{totalNum.total_devices_num}}</span></div>
            <div class="line-block">总激活数<span class="red">{{totalNum.total_active_device_num  }}</span></div>
            <div class="line-block">24小时内激活率<span class="red">{{totalNum.total_recent_active_rate  }}</span> </div>
            <div class="line-block">近一天使用率<span class="red">{{totalNum.total_recent_use_rate   }}</span></div>
            <div class="line-block">总使用率 <span class="red">{{totalNum.total_everyday_use_rate  }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {mertj} from '../../server/junbao'

  export default {
    data() {
      return {
        totalNum: {}
      }
    },
    mounted() {
      this.initData()
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods: {
      async initData() {
        let uid = this.userInfo.id
        console.log(this.userInfo)
        this.checkToken(async () => {
          let res = await mertj()
          if (res.code === 0) {
            this.totalNum = res.data
          }
        })
      },
      LevelName() {
        let level = this.userInfo.level
        switch (level) {
          case 1: {
            return '总代理'
            break
          }
          case 2: {
            return '一级代理'
            break
          }
          case 3: {
            return '二级代理'
            break
          }
          case 4: {
            return '三级代理'
            break
          }
          default:
            return '运营经理'
            break
        }
      }
    }
  }
</script>
