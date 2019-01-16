<style lang="less" scoped>
  .flex-w-c {
    display: flex;
    flex-direction: column;
  }
  .no-data{
    font-size: 40px;
    min-height: 200px;
    text-align: center;
    line-height: 200px;
    color: #999;
    font-weight: 700;
  }
  .header {
    padding: 24px 32px;
    background: #738ae6;
    color: #fff;
    font-size: 32px;
    position: relative;
    height: 90px;
    box-shadow: 0 1px 15px 2px rgba(0, 0, 0, .1);
    z-index: 100;
    .title {
      text-align: left;
      font-weight: 700;
    }
    .search {
      position: absolute;
      top: 0;
      right: 0;
      width: 140px;
      height: 100%;
      color: #fff;
      text-align: right;
      padding: 0 20px;
      background: url("../../assets/icon/search.png") no-repeat center left;
      background-size: 40px 40px;
      border: none;
      outline: none;
      font-size: 28px;
    }
  }
  .customer-wrap{

  }
  .scroll-wrap {
    flex: 1;
    overflow: hidden;
    flex-shrink: 0;
    padding: 0 24px;
    background: #eee;
  }
  .line-customers {
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    font-size: 28px;
    &:nth-child(2n+1){
      background: #efefef;
    }
    .td {
      flex: 1;
      flex-shrink: 0;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      padding: 0 40px;
      flex-direction: column;
      > div {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        >div{
          flex-shrink: 0;
          color:#999;
        }
        .wait{
          color:#999
        }
        .agree{
          color:#090
        }
        .disagree{
          color:#f20
        }
      }
    }
    .bd-r {
      border-right: 1px solid #ccc;
    }
  }
  .cash-top{
    padding:24px 32px;
    box-shadow: 0 1px 15px 2px rgba(0,0,0,.1);
    z-index: 99;
    font-size: 32px;
    div{
      display: flex;
      span{
        padding:0 15px;
      }
    }
    .tixian{
      display: flex;
      justify-content: flex-end;
      .button{
        background: #090;
        color: #fff;
        padding:5px 32px;
        border: none;
        border-radius: 6px;
        outline: none;
        font-size: 26px;
      }
    }
  }
  .mr-30{
    margin-right: 30px;
  }
  .search-shape{
    visibility: hidden;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 90;
    background:rgba(0,0,0,0) ;
    transition: all .4s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 32px;
    &.visiable{
      visibility: visible;
      background:rgba(0,0,0,0.6) ;
    }
  }
</style>
<template>
  <div class="assessment flex-w-c">
    <div class="header">
      <div class="title">我的账单</div>
      <!--<button class="search" @click="openSearch=!openSearch">搜索</button>-->
    </div>
    <div class="search-shape" :class="{visiable:loading}">正在操作,请稍后...</div>
    <div class="cash-top">
      <div>
        <div>可用余额</div>
        <div class="mr-30"><span class="red">{{moneyData.rest_money||0}}</span>元</div>
        <div>冻结金额</div>
        <div><span class="red">{{moneyData.freeze_money||0}}</span>元</div>
      </div>
      <div>
        <div>已提现金额</div>
        <div><span class="green">{{moneyData.take_money||0}}</span>元</div>
      </div>
      <div class="tixian">
        <button class="button" :disabled="this.moneyData.rest_money<=0"
                v-if="this.moneyData.freeze_money <=0 && this.moneyData.rest_money > 0&& $store.state.userInfo.type=='agent'&& $store.state.userInfo.level<4"
                @click="getMoney">提现</button>
      </div>
    </div>
    <div class="scroll-wrap">
      <div class="no-data" v-if="noData">
        没有找到数据
      </div>
      <scroll ref="scroll"
              v-else
              :data="list"
              :scrollbar="false"
              :pullDownRefresh="false"
              :pullUpLoad="true"
              :startY="0"
              @pullingDown="onPullingDown"
              @pullingUp="onPullingUp"
      >
        <load-animate v-if="loader"></load-animate>
        <div class="customer-wrap">
          <div v-for="(item,index) in list" :key="index" @click="getDetail(item)" class="line-customers">
            <div class="td">
              <div>
                <div class="cell-left">申请人：</div>
                <div class="blue blod">{{item.name}}</div>
              </div>
              <div>
                <div  class="cell-left">银行卡信息：</div>
                <div  class="black blod">{{item.bank_number||' -- '}}</div>
              </div>
              <div>
                <div  class="cell-left">金额(元)：</div>
                <div  class="black blod"><span class="red">{{item.money||0}}</span>元</div>
              </div>
              <div>
                <div  class="cell-left"> 审核状态：</div>
                <div class="blod" :class="item.status == 0 ? 'wait' : item.status == 2 ? 'agree' : 'disagree'">
                  {{item.status == 0 ? '待审核' :item.status == 2 ? '已通过' : '不通过'}}
                </div>
              </div>
              <div>
                <div  class="cell-left">申请时间：</div>
                <div  class="black blod">{{item.updated_at | formatTimeStr('YYYY-MM-DD')}}</div>
              </div>
            </div>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Scroll from '@/components/scroll/scroll'
  import loadAnimate from '@/components/loadanimate'
  import {moneyTotal, moneyList,takecash} from '../../server/junbao'
  import {Message} from 'iview'
  Vue.use(Message);
  export default {
    components: {
      Scroll,
      loadAnimate
    },
    data () {
      return {
        pageIndex: 1,
        pageSize: 5,
        status: 'all',
        uid: '',
        list:[],
        noData:false,
        moneyData:{},
        loading:false,
        loader:true
      }
    },
    mounted () {
      this.getData()
      this.getListData()
    },
    methods: {
      getData () {
        let uid = this.$store.state.userInfo.id
        this.uid = uid
        this.checkToken(async () => {
          let res = await moneyTotal(uid)
          if (res.data) {
            this.moneyData = res.data
          }
        })
      },
      getListData () {
        let uid = this.$store.state.userInfo.id
        this.uid = uid
        this.checkToken(async () => {
          try{
            let listRes = await  moneyList(uid, this.status, this.pageIndex, this.pageSize)
            this.loader=false
            if (listRes.data.data) {
              this.noData = false
              let len = listRes.data.data && listRes.data.data.length
              if (len < this.pageSize) {
                this._isDestroyed = true
                if(this.$refs.scroll){
                  this.$nextTick(()=>{
                    this.$refs.scroll.forceUpdate()
                  })
                }
                if( this.pageIndex==1 && len<1 ){
                  this.noData = true
                }else{
                  this.noData = false
                }
              }

              this.list = this.list.concat(listRes.data.data)
              this.pageIndex += 1
            } else {
              this.noData = true
            }
          }catch (e) {
            this.loader=false
            this.noData = true
            alert(e.message)
          }

        })
      },
      onPullingDown() {
        this.pageIndex = 1
        this.list = []
        this._isDestroyed = false
        this.loader=true
        this.getListData()
      },
      onPullingUp() {
        // 更新数据
        this.getListData()
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
      },
      getDetail(model){
        console.log(model)
      }
    }
  }
</script>
