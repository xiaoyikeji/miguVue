<template>
  <keep-alive>
  <div class="block">
    <div class="lunbo">
      <el-carousel :interval="5000" arrow="always"  >
        <el-carousel-item v-for="items in gedanList" class="el-carousel__container">
          <img class="X_B_img" :src="items.linkData.linkPicUrl" />
        </el-carousel-item>
      </el-carousel>

    </div>
    <div class="tubiao">
      <ul>
        <router-link to="/Songs"tag="li"><img src="./imges/songs.png" alt=""><p>Songs</p></router-link>
        <router-link to="/Playlist"tag="li"><img src="./imges/palylist.png" alt=""><p>Palylist</p></router-link>
        <router-link to="/Gedan"tag="li"><img src="./imges/artist.png" alt=""><p>Artist</p></router-link>
        <router-link to="/Geshou"tag="li"><img src="./imges/chart.png" alt=""><p>Chart</p></router-link>
      </ul>
    </div>
    <div  class="X_B_ul" :data="GeMing">
      <div class="X_B_ul_pp">
        <div class="X_B_ul_p wrapper" ref="wrapper" :data="GeMing">
          <ul class="content">
            <li>
              <h3>Music rankings</h3>
              <div class="content_div"><img src="./imges/next.png" alt=""></div>
            </li>
          </ul>
        </div>
        <div class="X_B_ul_pp_t" ref="wrapper">
          <div class="X_B_ul_pp_li"  v-if="gedanList" >
            <div  class="X_B_ul_pp_li_div" v-for="items in gedanList" @click="ToplayList(items.linkData.linkUrl.substring(items.linkData.linkUrl.length-9,items.linkData.linkUrl.length),items.linkData.linkPicUrl)">
              <img :src="items.linkData.linkPicUrl" alt="">
              <p>{{items.linkData.linkTitle}}</p>
              <p>{{items.linkData.linkDes.substring(0,12)}}</p>
            </div>
            <div class="X_B_ul_pp_li_left"></div>
          </div>
        </div>
      </div>
    </div>
    <!--<Playing></Playing>-->

  </div>

  </keep-alive>
</template>

<script>
  import {reqGeci,MSpecialid} from '../api'
  import BScroll from 'better-scroll'
  import Tabs from '@/components/tabs/tabs.vue'
  import Playing from '@/components/playing/Playing'
export default {
  components: {
    Tabs,
    Playing
  },
  data () {
    return {
         xinGe:[],
         GeMing:[],
         PaiHang:[],
         Imgess:[],
         gedanList:[],
         songName:""
    }
  },
  async created(){
//      this.migu()
    await this.axios.get('/api/?json=true').then((data)=>{
      this.xinGe=  data.data.banner
       this.GeMing=data.data.data
       console.log(data)

    })
    await this.axios.get('/api/plist/index?pagesize=200&json=true').then((data)=>{
      this.PaiHang=data.data
      console.log(this.PaiHang)

    })
     this.axios.get('/m/migu/remoting/cms_list_tag?pageSize=10&nid=23853969&pageNo=0&type=2006').then((data)=>{
      this.gedanList = data.data.result.results
      console.log( this.gedanList)
    })
    if(this.GeMing!=null){
      this.$nextTick(()=>{
        this._initScroll();
      })
    }
  },
  methods: {
    async migu(){
          const req= await MSpecialid()
          this.gedanList = req.result.results
          console.log(req.result.results)
      },
    _initScroll(){
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        scrollX: true,
        scrollY: false,
        click: true

      })
    },
    ToplayList(specialid,linkData){
        this.$router.push({name:'Playlist', params:{specialid:specialid,linkData:linkData}})
    }
  }
}
</script>
<style scoped>
.lunbo{
  position: fixed;
  width: 100%;
  height:35%;

}
.el-carousel{

}
.el-carousel__container{
  position: fixed;
  left: 0;
  top: 0;
  height: 34%;
  width:100%;

}


.X_B_img{
  width: 100%;
  height:100%;
}
.X_B_ul{
  position:fixed;
  width: 100%;

}
.X_B_ul_p{
  height:1.5rem;
  width: 100%;
  position: fixed;
  border-bottom: .1rem solid #e0fff3;
}
.X_B_ul_p .content{
  position: fixed;
  width: 100%;
}
.X_B_ul_p .content li h3{
  font-size: .5rem;
  color: #9c9c9c;
  margin-left: .2rem;
  margin-top: .3rem;
  position: fixed;
}
.X_B_ul_p .content_div{
  width: .7rem;
  height: .7rem;
  position: relative;
  right: -90%;


}
.X_B_ul_p .content_div img{
  width: 100%;
  height: 100%;
  margin-top: .4rem;
}
.X_B_ul ul li{
    display: block;
    width: 100%;
    height: 50px;
    line-height: 40px;

  }
.X_B_ul ul li p{
  width: 100%;
  height: 40px;
  display: block;
  overflow: hidden;
  margin-left: 15px;

}
.tubiao{
      width: 100%;
      height: 13%;
      border-bottom: .2rem solid #f7f7f7;
      bottom:10rem;
      position: fixed;
      background-color: #ffffff;
      z-index: 128;
      top:35%;


    }
.tubiao ul{
  width: 90%;
  height: 2.5rem;
  display:flex;
  margin: 0 auto;
  display: flex;
}
.tubiao ul li{
  width: 25%;
  height: 3rem;
  list-style: none;
  border-radius: 50%;
  margin-top: .2rem;

}
.tubiao ul li img{
  width:40%;
  margin-left: 30%;
  box-shadow: 0 0 1rem #ff4296;
  border-radius: 50%;


}
.tubiao ul li p{
   display: block;
   margin-top: .2rem;
   text-align: center;
   font-size: .4rem;
    color: #9d9d9d;
}
.X_B_ul_pp{
  width: 100%;
  height: 42%;
  position: fixed;
  top:48%;
  border-bottom:.1rem solid #f7f7f7;

}
.X_B_ul_pp_t{
     width: 100%;
     height: 31%;
     position: fixed;
     display: flex;
     bottom: 2.5rem;
}
  .X_B_ul_pp_li{
    position:relative;
    height: 100%;
    display: block;
    padding: .2rem;
    display: flex;

  }
  .X_B_ul_pp_li_div{
      width: 6rem;
  }
.X_B_ul_pp_t  img{
  width: 5rem;
  height: 5rem;
  border-radius: .4rem;
  box-shadow: 0 0 1rem #ffafe4;

}
.X_B_ul_pp_li p{
  color: #8a4545;
  width: 5rem;
  overflow: hidden;
  font-size: .4rem;
  margin-top: .3rem;
}
.X_B_ul_pp_li p:last-child{
  width: 3rem;
  margin-top: 3rem;
  color: #cecece;
  font-size: .5rem;
  margin-top: .2rem;
  overflow: hidden;
}
</style>
