<template>
  <div class="hello">
    <div class="Pahang">
      <div class="Pahang_div">
            <span class="Pahang_back" @click="$router.back(-1)">
              <img src="../Paihang/imges/back.png" alt="">
            </span>
        <span class="Pahang_P">
               <p>搜索</p>
        </span>
      </div>
    </div>
    <div class="Songs_tabs">
      <form @submit.prevent="submit(data)">
        <input class="sosuo"  placeholder="搜索你喜欢的歌曲吧" v-model="data" >
        <input class="sousuo_key" type="submit" value="搜索">
      </form>
    </div>
    <Scroll class="Songs_body" :data="songsList">
      <div>
        <div class="Songs_body_div">
        <div class="Songs_body_A">
          <ul class="Songs_body_AUL">
            <li class="Songs_body_AULI" v-for="items in songsList" @click="todoPalying(items)">
              <div class="Songs_body_AULI_a">
                <img :src="items.cover" alt="">
              </div>
              <div class="Songs_body_AULI_b">
                <p>{{items.albumName}}</p>
                <p>{{items.artist}}</p>
                <p>{{items.songName}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </Scroll>
  </div>
</template>
<script>
  import {MGSousuo} from '../api'
  import Scroll from '../../basics/betterScroll/scroll'
  export default {

    data () {
      return {
           data:[],
           songsList:[]
      }
    },
    methods:{
      submit:function(data) {
          this.sousuo(data)
      },
      async sousuo(data){
          console.log(data)
          const datalist = await MGSousuo(data)
          this.songsList=datalist.musics
          console.log(this.songsList)
      },
      todoPalying(items){
        this.$router.push({path:`/Playlist/${items.contentId}`,params:{items:items}})
      }
    },
    created(){

    },
    components: {
      Scroll
    },
    watch:{
      data(){
          console.log(this.data)
      }
    }
  }
</script>
<style scoped>
  .active{
    box-shadow: 0 0 .5rem #f4f4f4;
    border-radius: 20%;

  }
  .hello{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }
  .Pahang{
    width: 100%;
    height:2.3rem;
    border-bottom: .05rem solid #e8e8e8;
  }
  .Pahang_div{
    height: 100%;
    width: 100%;
    background-color: rgba(249, 249, 249, 0.07);
  }
  .Pahang_div img{
    height: 1.2rem;
    width:1.2rem;

  }
  .Pahang_back{
    float: left;
    margin-left: .4rem;
    margin-top: .4rem;
  }
  .Pahang_P{
    display: block;
    width: 80%;
    height:2rem;
    margin: 0 auto;
    font-size: .5rem;
    text-align: center;
    line-height: 2rem;
    float: left;
  }
  .sosuo{
    width: 70%;
    height: 1.6rem;
    border-radius: .3rem;
    margin-top: .16rem;
    margin-left: .2rem;
    font-size: .5rem;
    font-color:'#9999aa';
  }
  .sousuo_key{
    font-size: .6rem;
    padding: .4rem;
    margin-left: .6rem;
    border-radius:.2rem;
    border: .3rem;
    width: 20%;
    height: 80%;
    background-color: #ffffff;
    color: red;
  }
  input-placeholder{
    color: #9999aa;
  }
  /**/
  .Songs_tabs{
    width: 100%;
    height: 2rem;
    border-bottom: .02rem solid #f9f9f9;
    background-color: rgb(255, 89, 101);
  }
  .Songs_tabs ul{
    width: 100%;
    height: 100%;
    display:flex;

  }
  .Songs_tabs ul li{
    width: 25%;
    height: 100%;
    text-align: center;
  }
  .Songs_tabs ul li div{
    width: 50%;
    height: 3rem;
    margin: 0 auto;
    line-height:2.5rem;

  }
  .Songs_tabs ul li div span{
    width:100%;
    color: #f7f7f7;
    font-size: .5rem;
    font-weight: 700;
  }
  /**/
  .Songs_body{
    position: fixed;
    width: 100%;
    height: 85%;
    background-color: #f4f4f4;
    overflow: hidden;

  }
  .Songs_body_div{
    width: 100%;
    height: 100%;
  }
  .Songs_body_A{
    width: 100%;
    height: 100%;
  }
  .Songs_body_AULI{
    width: 100%;
    height: 3.4rem;
    border-bottom: .05rem solid #a0ff90;
    overflow: hidden;
  }
  .Songs_body_AULI_a{
    float: left;
  }
  .Songs_body_AULI_a img{
    padding: .3rem;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: .6rem;
  }
  .Songs_body_AULI_b{
    padding: .3rem;
    float: left;

  }
  .Songs_body_AULI_b p:nth-child(1){
     font-size: .4rem;
  }
  .Songs_body_AULI_b p:nth-child(2){
    color: #ff6ea0;
    font-size: .6rem;
  }
  .Songs_body_AULI_b p:nth-child(3){
    color: #ff6ea0;
    font-size: .3rem;
  }
</style>
