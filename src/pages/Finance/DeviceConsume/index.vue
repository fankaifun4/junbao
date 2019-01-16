<style lang="less" scoped>

  .flex-w-c {
    display: flex;
    flex-direction: column;
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
      background: url("../../../assets/icon/search.png") no-repeat center left;
      background-size: 40px 40px;
      border: none;
      outline: none;
      font-size: 28px;
    }
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
    font-size: 28px;
    padding:10px 0;
    &:nth-child(2n+1) {
      background: #f5f5f5;
    }
    .title-name{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:3px 24px;
      font-size:32px;
      .cust-name{
        text-align: left;
        overflow: hidden;
        font-weight: 700;
        padding-right: 20px;
        color:#738ae6;
      }
      .data-num{
        font-weight: 300;
        font-size: 28px;
        padding-left: 50px;
      }
      .cust-type{
        flex-shrink: 0;
        font-size: 26px;
        font-weight: 300;
        background:#738ae6;
        border-radius: 6px;
        text-align: center;
        padding:10px 20px;
        color: #fff;
        line-height: 1;
      }
    }
    .title-foot{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
      padding:10px 20px;
      >div{
        display: flex;
      }
    }
    .tr-body{
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      font-size: 24px;
      padding:0 24px;
      .td {
        flex-shrink: 0;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-direction: column;
        flex: 1;
        > div {
          padding: 6px 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          > div:first-child {
            flex-shrink: 0;
            color: #666;
          }
          > div:last-child {
            flex: 1;
            flex-shrink: 0;
            color: #666;
          }
        }
      }
    }
    .bd-r {
      border-right: 1px solid #ccc;
    }
  }

  .search-shape {
    visibility: hidden;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 90;
    background: rgba(0, 0, 0, 0);
    transition: all .4s linear;
    &.visiable {
      visibility: visible;
      background: rgba(0, 0, 0, 0.6);
    }
  }

  .search-body {
    position: absolute;
    top: 80px;
    box-shadow: 0 1px 15px 2px rgba(0, 0, 0, .1);
    background: #fff;
    z-index: 99;
    transition: all .4s linear;
    padding: 0 32px;
    > div {
      height: 60px;
      line-height: 60px;
      margin: 40px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 30px;
      position: relative;
      label {
        height: 60px;
        line-height: 60px;
        width: 260px;
        text-align: left;
        display: block;
        flex-shrink: 0;
      }
      div {
        flex: 1;
      }
      .input {
        border: 1px solid #dcdee2;
        border-radius: 4px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 25px;
        outline: none;
      }
    }
  }

  /deep/ .select {
    height: 60px;
    .ivu-select-dropdown {
      max-height: 500px;
    }
    .ivu-select-selection {
      height: 60px !important;
      .ivu-select-placeholder {
        height: 60px !important;
        line-height: 60px;
      }
      .ivu-select-item {
        font-size: 28px !important;
      }
      .ivu-select-selected-value {
        height: 60px !important;
        line-height: 60px;
        .ivu-select-item {
          height: 60px !important;
          line-height: 60px;
        }
      }
    }
  }

  .no-data {
    font-size: 40px;
    min-height: 200px;
    text-align: center;
    line-height: 200px;
    color: #999;
    font-weight: 700;
  }

</style>
<template>
  <div class="assessment flex-w-c">
    <div class="header">
      <div class="title">设备消费流水</div>
      <button class="search" @click="openSearch=!openSearch">搜索</button>
    </div>
    <div class="search-shape" @click="openSearch=false" :class="{visiable:openSearch}"></div>
    <div class="search-body" v-if="openSearch" >
      <div>
        <label for="">我运营的设备：</label>
        <i-select placeholder="设备类型" class="select" v-model="searchData.uid">
          <i-option value="">全部类型</i-option>
          <i-option v-for="(item,index) in  typeList" :key="index" :value="item.id">{{item.name}}</i-option>
        </i-select>
      </div>
      <div>
        <label for="">按类型：</label>
        <i-select placeholder="全部人员" class="select" v-model="searchData.type">
          <i-option value="all">全部类型</i-option>
          <i-option v-for="(item,index) in  typeOptions" :key="index" :value="item.id">{{item.name}}</i-option>
        </i-select>
      </div>
      <div>
        <label for="">按品牌：</label>
        <i-select placeholder="全部人员" class="select" v-model="searchData.brand">
          <i-option value="all">全部品牌</i-option>
          <i-option v-for="(item,index) in  brandOptions" :key="index" :value="item.id">{{item.name}}</i-option>
        </i-select>
      </div>
      <div>
        <label for="">按名称：</label>
        <div><input class="input" type="text" maxlength="20" v-model="searchData.search"></div>
      </div>
    </div>
    <load-animate v-if="loader"></load-animate>
    <div class="scroll-wrap">
      <div class="no-data" v-if="noData">
        {{ isNodata || '没有找到数据' }}
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
        <div  class="customer-wrap ">
          <div v-for="(item,index) in list" :key="index" @click="getDetail(item)" class="line-customers">
            <div class="title-name">
              <div class="cust-name">{{item.username}}</div>
              <div class="cust-type">{{item.created_at }}</div>
            </div>
            <div class="tr-body">
              <div class="td">
                <div>
                  <div>设备类型：</div>
                  <div>{{item.type}}</div>
                </div>
                <div>
                  <div>设备品牌：</div>
                  <div>{{item.brand}}</div>
                </div>
                <div>
                  <div>金额（元）：</div>
                  <div>{{item.money}}</div>
                </div>

              </div>
              <div class="td">
                <div>
                  <div>设备编号：</div>
                  <div>{{item.sn}}</div>
                </div>
                <div>
                  <div>消费科目：</div>
                  <div>{{item.tpl_name}}</div>
                </div>
                <div>
                  <div>结算状态：</div>
                  <div class="status" :class="item.cash_status == 0 ? 'wait' : item.cash_status == 2 ? 'agree' : 'freeze'">{{item.cash_status == 1 ? '已冻结' : item.cash_status == 2 ? '已结算' : '未结算'}}</div>
                </div>
              </div>
            </div>
            <div class="title-foot">
              <div>
                <div>订单号：</div>
                <div>{{item.orderid}}</div>
              </div>
            </div>
            <div class="title-foot">
              <div>
                <div>微信流水号：</div>
                <div>{{item.pay_no}}</div>
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
  import {lists,consume} from '../../../server/junbao.js'
  import Scroll from '@/components/scroll/scroll'
  import loadAnimate from '@/components/loadanimate'
  import {debounce} from 'lodash'
  import {Select, Option,DatePicker } from 'iview'
  import { mapState } from 'vuex'
  Vue.component('i-select', Select);
  Vue.component('i-option', Option);
  Vue.component('date-picker', DatePicker);
  export default {
    components: {
      Scroll,
      loadAnimate
    },
    computed: {
      ...mapState([ 'typeOptions', 'brandOptions','userInfo']),
    },
    data() {
      return {
        loader:true,
        pageIndex: 1,
        pageSize: 20,
        searchData: {
          type: 'all',
          brand: 'all',
          start: '',
          search:'',
          uid:'',
          end:'',
          uid: ''
        },
        list: [],
        _isDestroyed: false,
        noData: false,
        manitenance: [],
        debounce: null,
        openSearch: false,
        isNodata:'',
        typeList:[]
      }
    },
    mounted() {
      this.searchData.uid = this.userInfo.id
      this.getData()
      this.getList()
      this.debounce = debounce(() => {
        this.onPullingDown()
      }, 400)
    },
    methods: {

      getData() {
        if (this._isDestroyed) {
          if (this.$refs.scroll) {
            this.$refs.scroll.forceUpdate()
          }
          return
        }
        this.checkToken(async () => {
          try{
            let res = await consume( this.searchData,this.pageIndex, this.pageSize)
            this.loader=false
            if (res.data.data) {
              this.noData = false
              let len = res.data.data && res.data.data.length
              if (len < this.pageSize) {
                this._isDestroyed = true
                if (this.$refs.scroll) {
                  this.$nextTick(() => {
                    this.$refs.scroll&&this.$refs.scroll.forceUpdate()
                  })
                }
                if (this.pageIndex == 1 && len < 1) {
                  this.noData = true
                } else {
                  this.noData = false
                }
              }
              this.list = this.list.concat(res.data.data)
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
      getList(){
        this.loader=true
        this.checkToken(async ()=>{
          try{
            let res = await lists()
            this.loader=false
            this.typeList =  res.data.list
          }catch (e) {
            this.loader=false
          }

        })
      },
      onPullingDown() {
        this.pageIndex = 1
        this.list = []
        this._isDestroyed = false
        this.loader=true
        this.getData()
      },
      onPullingUp() {
        // 更新数据
        this.getData()
      },
      getDetail(model) {
        console.log(model)
      }
    },
    watch: {
      'searchData.type'() {
        this.debounce()
      },
      'searchData.brand'() {
        this.debounce()
      },
      'searchData.uid'() {
        this.debounce()
      },
      'searchData.search'() {
        this.debounce()
      }
    }
  }
</script>
