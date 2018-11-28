<template>
  <div class="playing"  >
       <div class="playing_WW" v-if="songsdata" v-show="!Show_m">
         <div class="playing_a">
           <div class="playing_aa" @click="fanhui()">
             <img src="./imges/back.png" alt="">
           </div>
         </div>
         <div class="playing_b">
           <div class="playing_ba"v-if="songsdata">
             <p >{{songsdata.songName}}</p>
           </div>
           <div class="playing_ba">
             <p style="color:#ff6cba">05:44:00</p>
           </div>
           <div class="playing_bx" >
             <div @click="playAudio()">
               <img :src="songsdata.picL">
             </div>
           </div>
         </div>
         <div class="playing_c" v-if="songsdata">
           <div class="playing_c_img">
             <div class="playing_c_img_f">
               <img src="./imges/dan.png" alt="">
             </div>
             <div class="playing_c_img_f">
               <img src="./imges/houtui.png" alt="">
             </div>
             <div class="playing_c_img_f" @click="stopPlay()">
               <img v-show="!playI" src="./imges/ting.png" alt="" ref="playImg">
               <img v-show="playI" src="./imges/kai.png" alt="" ref="playImg">
             </div>
             <div class="playing_c_img_f">
               <img src="./imges/qian.png" alt="">
             </div>
             <div class="playing_c_img_f">
               <img src="./imges/xiafem.png" alt="">
             </div>
           </div>
           <div class="playing_c_img" >
             <div class="playing_c_img_fa">
               <img src="./imges/xin.png" alt="">
             </div>
             <div class="playing_c_img_fa">
               <img src="./imges/xiazai.png" alt="">
             </div>
             <div class="playing_c_img_fa">
               <img src="./imges/fenxiang.png" alt="">
             </div>
           </div>
         </div>
       </div>

       <audio v-if="songsdata" :src="songsdata.listenUrl"  ref="audio"

       ></audio>

  </div>
</template>

<script>
  import {palying} from '../api'
export default {

  data () {
    return {
          songsdata:[],
          playI:false,
          Show_m:false

    }
  },
  methods:{
    async palying(){
      const dataList = await palying(this.$route.params.id)
      this.songsdata=dataList.data
      console.log(this.songsdata)
    },
    playAudio(){
        console.log(1)
      this.$refs.audio.play()
      console.log(2)
    },
    stopPlay(){
     if(this.playI){
       this.$refs.audio.pause()
       this.playI=!this.playI

     }else if(!this.playI){
       this.$refs.audio.play()
       this.playI=!this.playI

     }

    },
    fanhui(){
      this.$router.back(-1)
      this.Show_m = true
    }

  },
  created(){

      this.palying()


  },
  mounted: function () {
    this.stopPlay()
    this.playAudio()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .playing_WW{
    height: 100%;
  }

 .playing{
   width: 100%;
   height: 100%;
   position: fixed;
   background-color: #ffffff;
   top:0;
   left: 0;
   z-index: 666;
 }
  .playing_a{
    width: 100%;
    height: 10%;
    border: 1px solid #000000;
    display: flex;
  }
 .playing_aa img{
   width: 2rem;
   height: 2rem;
 }
 .playing_b{
   width: 100%;
   height: 60%;
   border: 1px solid #000000;
 }
 .playing_c{
   width: 100%;
   height: 30%;
   background-color: rgba(255, 108, 186, 0.06);
 }
  .playing_c_img{
    width: 100%;
    height: 3rem;
    display: flex;
  }
 .playing_c_img_f{
   width: 3rem;
   height: 3rem;

 }
 .playing_c_img_f img{
   width: 1.5rem;
   height: 1.5rem;
   margin-left: .6rem;
   margin-top: 1.5rem;
 }

 .playing_c_img_fa{
   width:33%;
   height: 3rem;
 }
  .playing_c_img_fa img{
    width: 1rem;
    height: 1rem;
    margin-left: 1.8rem;
    margin-top: 1.5rem;
  }
  .playing_ba{
       width: 100%;
       height: 1rem;
       font-size: .7rem;

     }
 .playing_ba p{
   height: 1rem;
   margin: 0 auto;
   text-align: center;
 }
 .playing_bb{
   width: 100%;
   height: 1rem;
   font-size: .7rem;
   margin-left: 40%;
 }
 .playing_bx div{
   width: 8.5rem;
   height: 8.5rem;
   margin: 0 auto;
 }
 .playing_bx div img{
   width: 8rem;
   height:8rem;
   margin: 0 auto;
   border-radius: 50%;
 }
  .diba_m{
    width: 100%;
    height: 3rem;
    height: 3rem;
    background-color: #ee5870;
    position: fixed;
    top: 0;
    z-index: 999;
  }
</style>
