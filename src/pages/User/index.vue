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

    .ass-content {
      flex: 1;
      .content-inner {
        height: 100%;
        position: relative;
      }
    }

    .mun-content {
      width: 692px;
      height: 240px;
      margin: 0 auto;
      box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.1);
      background: #fff;
      font-size: 24px;
      position: relative;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      .header-center {
        text-align: center;
        .describe {
          color: #333;
          font-size: 28px;
          text-align: center;
          line-height: 1;
        }
        .header-job {
          color: #333;
          margin-top: 16px;
          padding: 0 18px;
          box-sizing: border-box;
          font-size: 40px;
          line-height: 66px;
          font-weight: 700;
        }
        .header-tip {
          color: #ff4f25;
          background-color: #fff4f3;
          font-size: 28px;
          line-height: 44px;
          padding: 0 24px;
          margin-top: 18px;
          text-align: center;
          border: 1px solid #ff4f25;
          border-radius: 44px;
          display: inline-block;
          .pcenter {
            position: relative;
            top: 8px;
          }
        }
      }
      .pay-router {
        width: 200px;
        height: 44px;
        position: absolute;
        top: 15px;
        left: 50%;
        margin-left: -100px;
        font-size: 24px;
        border-radius: 20px;
        background: rgba(255, 255, 255, .5);
        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          font-weight: bold;
        }
        .pay-xc {
          left: 0;
          top: 0;
          color: #fff;
          height: 44px;
          width: 98px;

        }
        .pay-kh {
          width: 116px;
          height: 52px;
          right: 0;
          top: -4px;
          color: rgba(91, 118, 185, 1);
          background: #fff;
          box-shadow: 0 0 15px 1px rgba(0, 0, 0, .3);
          border-radius: 20px;
          font-size: 28px;
        }
      }
    }

    .wrap-building {
      flex: 1;
      height: 100%;
      .wrap-building-inner {
        margin-top:30px;
        .wrap-img {
          width: 324px;
          margin: 0 auto 20px;
          img {
            width: 100%;
          }
        }
        .des {
          color: #999;
          font-size: 28px;
          text-align: center;
        }

      }
    }

    .wrap-info {
      position: relative;
      height: 100%;
      min-height: 400px;
      .loader-wrap {
        z-index: 300;
        height: 100%;
        min-height: 400px;
        padding-top: 190px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        color: #666;
        margin: auto;
        background-color: #fff;
      }
    }

    .assessment-detail {
      padding: 0 28px;
      margin: 4px auto;
      color: #333;
      > div {
        border-radius: 0.08rem;
        overflow: hidden;
        padding: 28px 0;
        min-height: 120px;
        position: relative;
        border-bottom:1px solid #f2f2f2; /*no*/
        &:last-child{
          border: none;
        }
        .pay-wrap {
          overflow: hidden;
          color: #061520;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .pay-name {
            color: #333;
            font-size: 28px;
            padding: 3px 0;
            max-width:500px;
          }
          .pay-numb {
            color: #ff4f28;
            font-size: 32px;
            word-break: break-all;
          }
        }
      }
      .power{
        height: 44px;
        font-size: 26px;
        line-height: 44px;
        color: #999999;
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

    .flex-ass-center {
      display: flex;
      justify-content: center;
      flex-direction: column;
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
          <div class="quarter-wrap"  >
            <div class="quarter-item"  >
              dasdasdasd
          </div>

        </div>
        <div class="mun-content" >
          <div class="header-center flex-v">
            <div class="describe" >asdasdasdasd</div>
            <div class="header-job" >asdasdasd</div>
            <div class="header-tip">asdasd</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>


