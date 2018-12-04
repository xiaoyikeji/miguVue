<template>
  <div>
    <div class="hello">
      <div class="Pahang">
        <div class="Pahang_div">
            <span class="Pahang_back" @click="$router.back()">
              <img src="../Paihang/imges/back.png" alt="">
            </span>
          <span class="Pahang_P">
               <p>MyMusic</p>
            </span>
          <span class="Pahang_fen">
              <img src="../Paihang/imges/xiala.png" alt="">
            </span>
        </div>
      </div>
      <div class="Songs_tabs">
        <ul>
          <li><div ><span >最爱</span></div></li>
          <li><div><span>收藏</span></div></li>
          <li><div><span>随声听</span></div></li>
        </ul>
      </div>
      <div class="Songs_body">
        <div class="Songs_body_div">
          <div class="Songs_body_A">
            <Scroll class="playlist_list" :data="G_xihuan" :probe-type="probeType" >
              <div >
                <div>
                  <ul>
                    <li class="Songs_body_AULI" v-for="items in G_xihuan" @click="TZpliay(items)">
                      <div class="Songs_body_AULI_a">
                        <img :src="items.picL" alt="">
                      </div>
                      <div class="Songs_body_AULI_b">
                        <h4>{{items.songName}}</h4>
                        <p>{{items.singerName[0]}}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div >
                  <h3 style="font-size: 1rem;margin:auto 30%;color: #ff6cba ">no-Songs</h3>
                </div>
              </div>
            </Scroll >
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>

</template>
<script>
  import Scroll from '../../basics/betterScroll/scroll'
  import { mapState ,mapGetters} from 'vuex'
  export default {

    data () {
      return {

      }
    },
    components:{
      Scroll
    },
    computed:{
      ...mapState([
        'xihuan'
      ]),
      ...mapGetters([
         'G_xihuan'
      ])
    },
    methods:{
      TZpliay(items){
        this.$router.push({path:`/Mymusic/${items.copyrightId}`})
      }
    },
    created(){

    }
  }
</script>
<style scoped>
  .playlist_list{
    width: 100%;
    height: 84%;
    position: fixed;
    border-bottom: 0;
    overflow: hidden;
  }
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
    font-size: .5rem;
  }
  .Songs_body_AULI_c{
    padding: .3rem;
    float: left;
    height: 100%;
    border: .03rem solid #000000;
  }
</style>
