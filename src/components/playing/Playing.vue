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
             <div >
               <img :src="songsdata.picL" ref="P_img" @click="Imgstop()">
             </div>
           </div>
           <div class="playing_gi">
               <div v-for="items in geci">
                   <p>{{items}}</p>
               </div>
           </div>
         </div>
         <div class="playing_c" v-if="songsdata">
           <div class="playing_c_img">
             <div class="playing_c_img_f" @click="danxun()">
               <img v-show="loop" src="./imges/dan.png" alt="">
               <img v-show="!loop"src="./imges/danxun.png" alt="">
             </div>
             <div class="playing_c_img_f">
               <img src="./imges/houtui.png" alt="" @click="houtui_A()">
             </div>
             <div class="playing_c_img_f" @click="stopPlay()">
               <img v-show="!playI" src="./imges/ting.png" alt="" ref="playImg">
               <img v-show="playI" src="./imges/kai.png" alt="" ref="playImg">
             </div>
             <div class="playing_c_img_f">
               <img src="./imges/qian.png" alt="" @click="qianjin_A()">
             </div>
             <div class="playing_c_img_f">
               <img src="./imges/xiafem.png" alt="">
             </div>
           </div>
           <div class="playing_c_img" >
             <div class="playing_c_img_fa"  @click="xihuanxin()">
               <img v-show="!xinshow" src="./imges/xinkong.png" alt="">
               <img v-show="xinshow" src="./imges/xin.png" alt="">
             </div>
             <div class="playing_c_img_fa" @click="xaizai()">
               <img src="./imges/xiazai.png" alt="">
             </div>
             <div class="playing_c_img_fa">
               <img src="./imges/fenxiang.png" alt="">
             </div>
           </div>
         </div>
       </div>

       <audio name="media" v-if="songsdata" :src="songsdata.listenUrl"  ref="audio"

       ></audio>
       <div class="playing_W" v-if="songsdata" v-show="Show_m">
           <div></div>
           <div class="div_ccs" v-if="songsdata">
            <img class="div_ccs_img" :src="songsdata.picL">
           </div>
       </div>
  </div>
</template>

<script>
  import {palying} from '../api'
  import { mapState ,mapGetters} from 'vuex'
export default {

  data () {
    return {
          songsdata:[],
          playI:false,
          Show_m:false,
          Imgfasle:true,
          ro:0,
          timer:null,
          num:0,
          Btime:0,
          Atime:0,
          Timere:null,
          DiTimer:0,
          geci:[],
          xinshow:false,
          loop:false,
          arr:[]


    }
  },
  watch:{
    Btime(newValue,oldValue){
      if(oldValue>=this.Atime-2){
        this.qianjin_A()
        this.playAudio()
      }
      if(this.Btime<1){
        this.playAudio()
      }
    },
    songsdata(){
      var re=/\[[^[]+/g;
      var arr=[]
        if(this.songsdata!=null){
          this.geci=this.songsdata.lyricLrc.match(re)
        }
    }

  },
  computed:{
    ...mapState([
      'songsListdate',
      'danSong',
      'xihuan'
    ]),
    ...mapGetters([
        'G_danSong'
    ]),
    songsdata:function () {
      this.$refs.audio.play()
    }
  },
  methods:{
    async palying(id){
      const dataList = await palying(id)
      this.songsdata=dataList.data

      this.timerP()

    },
    timerP(){
      clearInterval(this.timer)
      var _this=this
      if(this.songsdata!==null){
        this.timer=setInterval(function () {
          _this.ro++
          _this.$refs.P_img.style.transform = `rotate(`+_this.ro%360+`deg)`
        },60)
      }

    },
    playAudio(){
      this.$refs.audio.play()

    },
    stopPlay(){
        if(this.playI){
          this.$refs.audio.pause()
          this.playI=!this.playI
          clearInterval(this.timer)
          clearInterval(this.Timere)
        }else if(!this.playI){
          this.$refs.audio.play()
          this.timerP()
          this.settime()
          this.playI=!this.playI
          console.log("2")
        }

    },
    songIndex(){
      var _this =this
      this.songsListdate.forEach(function (el,index) {
        if(el.contentId==_this.$route.params.id){
          _this.num =index
          console.log(_this.num)
          return _this.num
        }
      })
    },
    qianjin_A(){
        this.num++
        var _this=this
        this.playI=true
       this.xinshow=!this.xinshow
        if(this.num>this.songsListdate.length-1){
          this.num =0
        }
        this.palying(this.songsListdate[this.num].contentId)
        setTimeout(function () {
          _this.playAudio()
        },1000)
    },
    houtui_A(){
      this.$nextTick(()=>{
        var _this=this
        this.playI=true
        this.xinshow=!this.xinshow
        clearInterval(this.timer)
        this.num--
        if(this.num<0){
          this.num =this.songsListdate.length-1
        }
        this.palying(this.songsListdate[this.num].contentId)
        setTimeout(function () {
          _this.playAudio()
          console.log( _this.$refs.audio.duration.toFixed(0))
        },1000)
        console.log(this.$refs.audio.duration.toFixed(0))
      })

    },
    fanhui(){
      this.ro=0
      clearInterval(this.timer)
      this.$router.back(-1)
      this.Show_m = true
    },
    Imgstop(){
        this.stopPlay()
    },
    time(){
     return this.$refs.audio.currentTime
    },
    xihuanxin(){

        if(!this.xinshow){
          this.xihuan.push(this.songsdata)
        }
       this.xinshow=!this.xinshow
    },
    settime(){
      var _this = this
      clearInterval(this.Timere)
        this.Timere= setInterval(function () {
          if(!_this.$refs.audio){
            clearInterval(_this.Timere)
            return false
          }else{
            _this.Btime=_this.$refs.audio.currentTime.toFixed(0)
            _this.Atime=Math.ceil(_this.$refs.audio.duration.toFixed(0))
            if(_this.Btime<1){
              _this.playAudio()
            }
            console.log(_this.Atime)
            console.log(_this.Btime)
          }
        },1000)
    },
    geci(ww){
        var re=/\[[^[]+/g;
        var arr=[]
//        arr = ww.match(re);
        console.log(ww);
    },
    danxun(){
        this.loop=!this.loop
    },
    xaizai(){
      this.$refs.audio.onprogress=this.songsdata.listenUrl
    }

  },
  created(){
      var id=this.$route.params.id


    this.songIndex()
    this.palying(this.$route.params.id)
    this.$store.dispatch('palyingList',id)
    this.settime()

  },
  mounted: function () {
    this.stopPlay()
    this.playAudio()
    console.log(this.G_danSong);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .playing_gi{
    width: 100%;
    height:30%;

    overflow: hidden;
  }
  .playing_gi p{
    font-size: .5rem;
    color: #c3c3c3;
  }
  .playing_W{
    width: 2rem;
    height: 4rem;
    background-color: #eeeaec;
    position: absolute;
    top: 0;
    z-index: 665;
    left:41%;
    border-radius: 1rem 1rem 1rem 1rem;
  }
  .div_ccs_img{
    width: 2rem;
    height: 2rem;
    border-radius:1rem;
  }
  .playing_WW{
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgb(13, 13, 13);
    top:0;
    left: 0;
    z-index: 666;

  }

 .playing{


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
   bottom: 0;
   position: fixed;
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
