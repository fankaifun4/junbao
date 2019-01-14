<style scoped lang='less'>

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
      font-size: 35px;
      color: #333;
      font-weight: 600;
      text-shadow: 0 2px 1px rgba(255, 215, 0, .4);
    }
  }

  .footer-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
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
      .types {
        font-size: 30px;
        text-align: left;
        border-bottom: 5px solid #FF0543;
        padding-bottom: 14px;
      }
      .line-block {
        text-align: left;
        padding: 18px 10px;
        font-size: 32px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        &:last-child {
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
          <div class="user-level" v-if="userInfo.type=='agent'"> {{LevelName()}}</div>
          <h4 class="user-type"> {{userInfo.name}}</h4>
          <div class="user-type">账号：{{userInfo.email}}</div>
        </div>
      </div>
    </div>
    <load-animate v-if="loader"></load-animate>
    <div v-else class="footer-body">
      <div class="content-blok">
        <div class="block-title">我的产品</div>
        <div class="block-body">
          <div>
            <h4 class="types">骏宝闪充</h4>
            <div class="line-block">我的客户<span class="red">{{myDate.total|| 0 }}</span></div>
            <div class="line-block">总营业额<span class="red">{{myDate.all_money||0 }}</span></div>
            <div class="line-block">今日营业额 <span class="red">{{todayTotaol|| 0}}</span></div>
            <div class="line-block">总设备数<span class="red">{{myDate.total_devices_num||0}}</span></div>
            <div class="line-block">已绑定设备数<span class="red">{{myDate.total_devices_binded||0}}</span></div>
            <div class="line-block">设备总激活数<span class="red">{{totalNum.total_active_device_num|| 0  }}</span></div>
            <div class="line-block">24小时内激活率<span class="red">{{totalNum.total_recent_active_rate ||0 }}%</span></div>
            <div class="line-block">近一天使用率<span class="red">{{totalNum.total_recent_use_rate  || 0 }}%</span></div>
            <div class="line-block">总使用率 <span class="red">{{totalNum.total_everyday_use_rate || 0  }}%</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {mertj, myAgents, getDateData} from '../../server/junbao'
  import loadAnimate from '@/components/loadanimate'
  import {format} from 'date-fns'

  export default {
    components: {
      loadAnimate
    },
    data() {
      return {
        totalNum: {},
        searchData: {
          role: '',
          city: '',
          manid: '',
          search: ''
        },
        myDate: {},
        sevenDate: {},
        todayTotaol: '0',
        loader: true
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
        this.checkToken(async () => {
          this.loader = true
          let res = await mertj()
          this.loader = false
          this.totalNum = res.data
        })
        this.checkToken(async () => {
          this.loader = true
          let res = await myAgents(0, 0, this.searchData)
          this.loader = false
          this.myDate = res.data
        })
        this.checkToken(async () => {
          this.loader = true
          let res = await getDateData()
          this.loader = false
          this.sevenDate = res.data
          let today = format(new Date(), 'YYYY-MM-DD')

          Object.keys(this.sevenDate).map(item => {
            if (item == today) {
              this.todayTotaol = this.sevenDate[item]
            }
          })
        })
      },
      LevelName() {
        let type = this.userInfo.type
        if (type == 'manitenance') {
          return '市场维护'
        } else if (type == 'agent') {
          return '代理商'
        } else if (type == 'operate') {
          return '运营'
        }
      }
    }
  }
</script>
