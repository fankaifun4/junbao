<style scoped lang='less'>
  .assessment{
    position: relative;
  }
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
      background: #738ae6;
      color: #fff;
      text-align: left;
    }
    .block-body {
      padding: 24px 32px;
      .header-select{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .types {
          font-size: 30px;
          text-align: left;
          padding-bottom: 14px;
          margin-right: 20px;
        }
        .active{
          color:#ef4300;
          border-bottom: 5px solid #ef4300;
        }
      }

      .line-block {
        text-align: left;
        padding: 18px 0;
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
  .echart-wrap{
    width:100%;
    padding-top:50px;
    min-height: 800px;
    .echart{
      width: 100%;
    }
  }
  .wel-gragh{
    list-style: none;
    margin: 0;
    padding:0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .wel-gragh li{
    width: 100%;
    box-sizing: border-box;
    height: 415px;
    overflow: auto;
    -webkit-overflow-scrolling : touch;
    margin-bottom: 15px;
    padding-top: 15px;
    background: white;
  }
  .wel-gragh li:nth-child(odd){
    padding-right: 8px;
  }
  .wel-gragh li:nth-child(even){
    padding-left: 8px;
  }
  #first{
    height: 400px;
  }
  .cash-top{
    padding:15px 0;
    z-index: 99;
    font-size: 32px;
    div{
      display: flex;
      align-items: center;
      padding:8px 0;
      span{
        padding:0 15px;
      }
    }
  }
  .tixian{
    display: flex;
    justify-content: flex-end;
    position: relative;
    min-height: 800px;
    .button{
      color: #333;
      padding:24px 32px;
      border: none;
      border-radius: 6px;
      outline: none;
      font-size: 26px;
      border:none;
      background: transparent;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
  .mr-30{
    margin-right: 30px;
  }
</style>
<template>
  <div class="assessment flex-w-c">
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
    <div class="footer-body">
      <div class="content-blok">
        <div class="block-title">我的产品</div>
        <div class="block-body">
          <div>
            <div class="header-select">
              <h4 class="types" :class="{active:this.currentActive=='0'}" @click="currentActive='0'">骏宝闪充</h4>
              <h4 class="types" :class="{active:this.currentActive=='1'}" @click="currentActive='1'">近7天营业额</h4>
              <h4 class="types" :class="{active:this.currentActive=='2'}" @click="currentActive='2'">我的钱包</h4>
            </div>
            <div v-if="currentActive=='0'">
              <div class="line-block">我的客户<span class="blue">{{myDate.total|| 0 }}</span></div>
              <div class="line-block">总营业额<span class="blue">{{myDate.all_money||0 }}</span></div>
              <div class="line-block">今日营业额 <span class="blue">{{todayTotaol|| 0}}</span></div>
              <div class="line-block">总设备数<span class="blue">{{myDate.total_devices_num||0}}</span></div>
              <div class="line-block">已绑定设备数<span class="blue">{{myDate.total_devices_binded||0}}</span></div>
              <div class="line-block">设备总激活数<span class="blue">{{myDate.total_active_device_num|| 0  }}</span></div>
              <div class="line-block">24H激活率<span class="blue">{{todayTotaol.total_recent_active_rate ||0 }}%</span></div>
              <div class="line-block">24H使用率<span class="blue">{{myDate.total_recent_use_rate  || 0 }}%</span></div>
              <!--<div class="line-block">总使用率 <span class="blue">{{myDate.total_everyday_use_rate || 0  }}%</span></div>-->
            </div>
            <div class="echart-wrap"   v-if="currentActive=='1'">
                  <h-chart class="echart" :id="idFirst"  :option="optionColumn" ref="echartDom"></h-chart>
            </div>
            <div class="echart-wrap"   v-if="currentActive=='2'">
              <div class="cash-top">
                <div>
                  <div>可用余额</div>
                  <div class="mr-30"><span class="red">{{moneyData.rest_money||0}}</span>元</div>
                </div>
                <div>
                  <div>冻结金额</div>
                  <div><span class="red">{{moneyData.freeze_money||0}}</span>元</div>
                </div>
                <div>
                  <div>已提现金额</div>
                  <div><span class="green">{{moneyData.take_money||0}}</span>元</div>
                </div>

              </div>
              <div class="tixian">
                <button class="button" :disabled="this.moneyData.rest_money<=0"
                        v-if="this.moneyData.freeze_money <=0 && this.moneyData.rest_money > 0&& $store.state.userInfo.type=='agent'&& $store.state.userInfo.level<4"
                        @click="getMoney">提现</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {mertj, myAgents, getDateData,moneyTotal} from '../../server/junbao'
  import loadAnimate from '@/components/loadanimate'
  import {format} from 'date-fns'
  import HChart from '@/components/Chart/HChart.vue';
  export default {
    components: {
      loadAnimate,
      HChart
    },
    data() {
      let optionColumn = {
        chart: {
          type: 'column'
        },
        title: {
          text: '过去七天消费量趋势',
        },
        xAxis: {
          categories: [],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: '消费量 (元)'
          }
        },
        legend: {
          align: 'center',
          x: 30,
          verticalAlign: 'top',
          y: 25,
          floating: true,
          backgroundColor: 'white',
          shadow: false
        },
        tooltip: {
          formatter: function () {
            return this.x + '<br/>消费总金额：' + this.y + '元';
          }
        },
        plotOptions: {
          column: {
            borderWidth: 0
          },
          series: {
            dataLabels: {
              enabled: true,
              formatter: function () {
                return this.y + "元";
              }
            },
          }
        },
        series: [{
          name: '消费总金额',
          data: []
        }],
        credits: {
          enabled: false     //不显示LOGO
        }
      };
      let optionPie = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: '2018年1月浏览器市场份额'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black'
              }
            }
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: 'Internet Explorer',
            y: 11.84
          }, {
            name: 'Firefox',
            y: 10.85
          }, {
            name: 'Edge',
            y: 4.67
          }, {
            name: 'Safari',
            y: 4.18
          }, {
            name: 'Sogou Explorer',
            y: 1.64
          }, {
            name: 'Opera',
            y: 1.6
          }, {
            name: 'QQ',
            y: 1.2
          }, {
            name: 'Other',
            y: 2.61
          }]
        }]
      };
      return {
        idFirst: 'first',
        isloader:false,
        optionColumn: optionColumn,
        optionPie: optionPie,
        totalNum: {},
        searchData: {
          role: '',
          city: '',
          manid: '',
          search: ''
        },
        myDate: {},
        sevenDate: {},
        moneyData:{},
        todayTotaol: '0',
        loader: true,
        currentActive:'0',
        myChart:null,
        uid:'0',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      }
    },
    mounted() {
      this.initData()
      this.getMoneyData()
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
          this.uid = this.$store.state.userInfo.id
          let res = await getDateData(this.uid)
          this.loader = false
          this.sevenDate = res.data
          let today = format(new Date(), 'YYYY-MM-DD')
          Object.keys(this.sevenDate).map(item => {
            if (item == today) {
              this.todayTotaol = this.sevenDate[item]
            }
          })
          this.initEcharts(res.data)
        })
      },
      getMoneyData () {
        let uid = this.userInfo.id
        this.uid = uid
        this.checkToken(async () => {
          let res = await moneyTotal(uid)
          if (res.data) {
            this.moneyData = res.data
          }
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
      },
      initEcharts(data){
        this.isloader=true
        let categories = [];
        let datas = [];
        for(let key in data){
          categories.push(key);
          datas.push(data[key]);
        }
        this.optionColumn.xAxis.categories = categories;
        this.optionColumn.series[0].data = datas;
      },
      getMoney(){
        var that = this;
        if(Number(this.moneyData.rest_money)<10){
          alert('提现金额必须大于10元')
          return
        }
        let alertText = '你申请的提现金额为【'+Number(this.moneyData.rest_money)+'】元,微信支付将扣取到账手续费 【'+(Number(this.moneyData.rest_money)*0.007).toFixed(2)+'】 元,您的实际提现金额为 【'+(Number(this.moneyData.rest_money)-Number(this.moneyData.rest_money)*0.007).toFixed(2)+'】 元'
        var isCharge = confirm(alertText)
        if(isCharge) {
          checkToken(async () => {
            that.loading = true;
            let takemoney = await  takecash(that.moneyData.rest_money)
            if (takemoney) {
              that.loading = false;
              that.freeze_money = that.rest_money;
              that.rest_money = 0;
              Message.success('提交成功');
              that.onPullingDown();
            } else {
              that.loading = false;
              Message.warning('未知错误');
            }
          })
        }
      }
    }
  }
</script>
