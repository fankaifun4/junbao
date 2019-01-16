<template>
    <div class="x-bar">
        <div :id="id" :option="option"></div>
    </div>
</template>
<script>
    import HighCharts from 'highcharts'
    export default {
        // 验证类型
        props: {
            id: {
                type: String
            },
            option: {
                type: Object
            }
        },
        mounted() {
            HighCharts.chart(this.id,this.option)
        },
        watch:{
          option(to,from){
            HighCharts.chart(this.id,to)
          }
        }
    }
</script>
<style scoped>
    .highcharts-title{
        visibility: visible;
    }
    .highcharts-credits{
        visibility: hidden;
    }
</style>
