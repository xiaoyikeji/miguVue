<template>
  <div id="app">
    <!--<div class="bar">-->
         <!--<span class="bar_left"></span>-->
         <!--<span class="bar_right el-icon-search">搜索</span>-->
    <!--</div>-->
    <Tabs class="tbas"></Tabs>
    <router-view/>
  </div>
</template>

<script>
  import Tabs from '@/components/tabs/tabs.vue'
export default {
    data(){
      return{
          ArrayOne:[]
      }
    } ,
  components: {
    Tabs
  },
  created(){

  }

}
</script>

<style>
.bar{
  width:100%;
  height: 45px;
  background-color: #20A0FF;
}
.tbas{
  position: fixed;
  bottom: 0;
}
  .bar_right{
    float: right;
    margin-right: 20px;
    margin-top: 4px;
    display: block;
    width: 35px;
    height: 35px;
    border: 1px solid #f9f9f9;
    border-radius:50%;
    color: #f9f9f9;
    text-align: center;
    line-height: 35px;
    overflow: hidden;
  }
.bar_right:hover{
  color: #e38a7c;
}
</style>
