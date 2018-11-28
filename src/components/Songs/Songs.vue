<template>
  <keep-alive>
  <div class="hello">
    <div class="Pahang">
      <div class="Pahang_div">
            <span class="Pahang_back" @click="$router.back(-1)">
              <img src="../Paihang/imges/back.png" alt="">
            </span>
        <span class="Pahang_P">
               <p>SONGS</p>
            </span>
        <span class="Pahang_fen">
              <img src="../Paihang/imges/xiala.png" alt="">
            </span>
      </div>
    </div>
    <div class="Songs_tabs">
      <ul>
        <li v-for="items in dataLi" @click="tiaoYong(items)"><div class=""><span >{{items}}</span></div></li>

      </ul>
    </div>
    <Scroll class="Songs_body" :data="songsList" :probe-type="probeType">
      <div>
          <div class="Songs_body_div">
             <div class="Songs_body_A">
                 <ul class="Songs_body_AUL">
                   <li class="Songs_body_AULI" v-for="items in songsList" @click="todoPalying(items.playListId,items.image)">
                      <div class="Songs_body_AULI_a">
                        <img  :src="items.image">
                      </div>
                      <div class="Songs_body_AULI_b">
                        <p>{{items.createName}}</p>
                        <p>{{items.playListName}}</p>
                      </div>
                   </li>
                 </ul>
             </div>
          </div>
      </div>
    </Scroll>
    <router-view/>
  </div>
  </keep-alive>
</template>
<script>
  import {MGsongs,MGhanYu,MGLiuXing,MGYSreGe} from '../api'
  import Scroll from '../../basics/betterScroll/scroll'
  export default {

    data () {
      return {
         songsList:[],
         dataLi:['推荐','伤感','华语','流行']
      }
    },
    components: {
      Scroll
    },
    methods:{
      tiaoYong(items){
          if(items=='伤感'){
              this.songSreGe()
          }else if(items=='华语'){
            this.songhuayu()
          }else if(items=='流行'){
            this.songLiuXing()
          }else{
            this.songList()
          }
      },
      ToplayList(specialid){
        this.$router.push({name:'Playlistsinger', params:{specialid}})
      },
      songList(){
        const Songsdata=MGsongs(0)
       Songsdata.then((data)=>{
         this.songsList=data.retMsg.playlist
         console.log(this.songsList)

        })
      },
      songhuayu(){
        const Songsdata=MGhanYu(0)
        Songsdata.then((data)=>{
          this.songsList=data.retMsg.playlist
          console.log(this.songsList)

        })
      },
      songLiuXing(){
        const Songsdata=MGLiuXing(0)
        Songsdata.then((data)=>{
          this.songsList=data.retMsg.playlist
          console.log(this.songsList)

        })
      },
      songSreGe(){
        const Songsdata=MGYSreGe(0)
        Songsdata.then((data)=>{
          this.songsList=data.retMsg.playlist
          console.log(this.songsList)

        })
      },
      todoPalying(playListId,linkData){
//        this.$router.push({path:`/Songs/${items.playListId}`,params: { userId: items }})
        this.$router.push({name:'Playlist',params:{specialid:playListId,linkData:linkData}})
      }
    },
    created(){
        this.probeType = 3
        this.songList()

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
  .Pahang_fen{
    float: right;
    margin-right:.2rem ;
    margin-top: .4rem;
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
    font-size: .3rem;
  }
  .Songs_body_AULI_b p:nth-child(2){
    padding: .3rem;
    float: left;
    font-size: .4rem;
  }
  .Songs_body_AULI_c{
    padding: .1rem;
    float:right;
    width: 4rem;
    margin-right: .5rem;
    height: 100%;
    font-size: .4rem;
  }
  .Songs_body_AULI_c span:nth-child(1){
     width: 100%;
     height: 1.2rem;
     display: block;
     float: left;
  }
  .Songs_body_AULI_c span:nth-child(2){
    width: 100%;
    height: 1.2rem;
    display: block;
    float: right;
  }
  .Songs_body_AULI_c img{
     width: 1rem;
     height: 1rem;
  }
</style>
