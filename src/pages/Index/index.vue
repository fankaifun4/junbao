<template>
  <div class="page-container">
    <div class="page-wrap">
      <router-view/>
    </div>
    <div class="nav-index">
      <div class="nav-item-wrap" v-for="(item,index) in nav">
        <div class="icon-tap" @click="goPath(item)">
          <img v-if="current==item.name" :src="item.selectIcon" alt="">
          <img v-else :src="item.icon" alt="">
        </div>
        <div :class="{active:current==item.name}">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        current: "customers",
        nav: [
          {
            text: "客户",
            name: "customers",
            toPath: "customers",
            icon: require("../../assets/icon/mine01@2x.png"),
            selectIcon: require("../../assets/icon/mine02@2x.png")
          },
          {
            text: "报表",
            name: "money",
            toPath: "money",
            icon: require("../../assets/icon/quanzi.png"),
            selectIcon: require("../../assets/icon/quanzi1.png")
          },{
            text: "我的",
            name: "home",
            toPath: "home",
            icon: require("../../assets/icon/home02@2x.png"),
            selectIcon: require("../../assets/icon/home01@2x.png")
          }
        ]
      }
    },
    mounted(){
      if(this.$route.path.indexOf('customers')>-1){
        this.current = 'customers'
      }else{
        this.current = this.$route.name
      }
    },
    methods: {
      goPath(path) {
        this.$router.push({name: path.toPath})
        this.current = path.name
      }
    },
    watch: {
      $route(to) {
        if(to.path.indexOf('customers')>-1){
          this.current = 'customers'
        }else{
          this.current = to.name
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .page-container {
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    right: 0px;
    overflow: hidden;
    .page-wrap {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 110px;
    }
  }

  .nav-index {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 110px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, .1);
    .nav-item-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      min-width: 25%;
      height: 100%;
      flex-shrink: 0;
      .icon-tap {
        width: 60px;
        height: 60px;
        overflow: hidden;
        img {
          width: 60px;
          height: 60px;
          border: none;
        }
      }
      .active {
        color: #ef4300;
      }
    }

  }
</style>
