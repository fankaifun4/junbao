<style scoped lang="less">
  .page-container {
    margin: 120px auto 0 auto;
  }
  .logo {
    font-size: 30px;
    font-weight: 700;
    width:500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:0 auto;
    .logo-img{
      background: url("../../assets/logo.png") no-repeat;
      background-size: 100% 100%;
      width: 140px;
      height: 140px;
      margin-right:20px;
      flex-shrink: 0;
    }
    .text{
      width:540px;
      color:#fff;
      margin-top:50px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, .9);
      .cn{
        width: 100%;
        font-size: 40px;
        height: 60px;
        line-height: 60px;
        text-align:justify;
        text-justify:inter-ideograph;
        span {
            display: inline-block; padding-left: 100%;
        }
      }
      .en{
        width: 100%;
        line-height: 40px;
        font-size:25px;
        font-weight: 300;
        height: 40px;
        text-align:justify;
        span {
          display: inline-block; padding-left: 100%;
        }
      }
    }
  }

  form {
    position: relative;
    text-align: center;
  }

  input {
    box-sizing: border-box;
    width: 550px;
    height:80px;
    line-height:80px;
    margin-top: 50px;
    padding: 0 30px;
    background: rgba(45, 45, 45, .15);
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, .15);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset;
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    font-size: 32px;
    color: #333;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    transition: all .2s;
    padding-left:80px;
    background: #fff;
  }

  input:-moz-placeholder {
    color: #aaa;
  }

  input:-ms-input-placeholder {
    color: #aaa;
  }

  input::-webkit-input-placeholder {
    color: #aaa;
  }

  input:focus {
    outline: none;
    -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset,
    0 2px 7px 0 rgba(0, 0, 0, .2);
    -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset,
    0 2px 7px 0 rgba(0, 0, 0, .2);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1) inset,
    0 2px 7px 0 rgba(0, 0, 0, .2);
  }

  button {
    cursor: pointer;
    width: 550px;
    height:80px;
    padding: 0 15px;
    line-height:80px;
    margin-top: 50px;
    background: transparent;
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,.4);
    box-shadow: 0 0 5px 0 rgba(255, 255, 255, .25) inset,
    0 2px 7px 0 rgba(0, 0, 0, .2);
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    transition: all .2s;
  }

  button:hover {
    -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .15) inset,
    0 2px 7px 0 rgba(0, 0, 0, .2);
    -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .15) inset,
    0 2px 7px 0 rgba(0, 0, 0, .2);
    box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .15) inset,
    0 2px 7px 0 rgba(0, 0, 0, .2);
  }

  button:active {
    -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .15) inset,
    0 2px 7px 0 rgba(0, 0, 0, .2);
    -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, .15) inset,
    0 2px 7px 0 rgba(0, 0, 0, .2);
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, .1) inset,
    0 1px 4px 0 rgba(0, 0, 0, .1);

    border: 0px solid #ef4300;
  }

  .connect {
    width: 800px;
    margin: 50px auto 0 auto;
    font-size: 14px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, .2);
  }

  .connect p {
    position: relative;
    left: -140%;
    top: 0
  }
  .connect a {
    display: inline-block;
    width: 32px;
    height: 35px;
    margin-top: 15px;
    -o-transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    -ms-transition: all .2s;
  }

  .alert {
    width: 310px;
    height: 200px;
    background: #000;
    position: absolute;
    top: -40%;
    left: 50%;
    margin: -101px 0 0 -151px;
  }

    .wrapper {
    background: url("../../assets/login/img/1.jpg");
    background-size: cover;
    &.bg1 {
      background: url("../../assets/login/img/1.jpg");
      background-size: cover;
    }
    &.bg2 {
      background: url("../../assets/login/img/2.jpg");
      background-size: cover;
    }
    &.bg3 {
      background: url("../../assets/login/img/3.jpg");
      background-size: cover;
    }
    &.bg5 {
      background: url("../../assets/login/img/5.jpg");
      background-size: cover;
    }
  }
  .username{
    background-image: url("../../assets/icon/user.png");
    background-repeat: no-repeat;
    background-position:20px center;
    background-size: 40px 40px;
  }
  .password{
    background-image: url("../../assets/icon/pwd.png");
    background-repeat: no-repeat;
    background-position: 20px center;
    background-size: 40px 40px;
  }
  .footer{
    position: absolute;
    bottom: 50px;
    color: #333;
    width: 100%;
    >div{
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      width: 100%;
    }
  }
</style>
<template>
  <div class="wrapper bg5">
    <div class="page-container">
        <h1 class="logo">
          <div  class="logo-img"></div>
          <div  class="text">
            <div class="cn">骏宝运营商管理端系统<span></span></div>
          </div>
        </h1>
        <div>
          <input type="text"  name="username" class="username" v-model="email" placeholder="请输入手机号码" autocomplete="off"/>
        </div>
        <div>
          <input type="password"  name="password" class="password" v-model="password" placeholder="密码" oncontextmenu="return false"
                 onpaste="return false"/>
        </div>
        <button id="submit" type="button"  @click="login">登录</button>
    </div>
    <div class="footer">
      <div>4008-875-375</div>
      <div>湖南骏宝信息科技有限公司</div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {login} from '../../server/login'
  import {Message} from 'iview'
  Vue.use(Message);
  export default {
    data() {
      return {
        timeSet:'bg1',
        email:"",
        password:"",
        switch1: false
      }
    },
    mounted() {
      let index=1
      setInterval(()=>{
        index+=1
        let bgIndex = index%3
        this.timeSet = 'bg'+bgIndex
      },10000)
    },
    methods: {
      login(){
        if(!this.email){
          Message.warning( '用户名不能为空');
          return false;
        }
        if(!this.password){
          Message.warning('密码不能为空');
          return false;
        }

        var that = this;
        that.loading = true;
        login(that.email,that.password).then(function (response) {
            that.loading = false;
            var welcome_flag = false;
            var redirect_flag = false;
            var roles = response.user.roles;
            var permissions = [];
            for(var i=0; i<roles.length; i++){
              for(var j=0; j<roles[i].permissions.length; j++){
                permissions.push(roles[i].permissions[j]);
              }
            }
            var redirect = decodeURIComponent(that.$route.query.redirect || '/');
            for(var i=0; i<permissions.length; i++){
              var url = '/' + permissions[i].desc;
              if(url == redirect){
                redirect_flag = true;
                break;
              }
              if(url == '/admin/user'){
                welcome_flag = true;
              }
            }
            var goto_url = '';
            if(redirect_flag){
              goto_url = redirect;
            }
            else if(welcome_flag){
              goto_url = '/admin/user';
            }
            else{
              goto_url = '/' + permissions[0].desc;
            }

            that.$store.dispatch('login', {
              token: response.token,
              permissions: permissions,
              activeIndex: goto_url,
              userInfo: response.user,
              typeOptions: response.ptype,
              brandOptions: response.pbrand
            });
            that.$router.push({
              path: goto_url
            })
          })
          .catch(function (error) {
            that.loading = false;
            if(error && error.error == 'invalid_credentials'){
              Message.warning( '您没有权限登录');
              return false;
            }
          });
      }
    }
  }
</script>
