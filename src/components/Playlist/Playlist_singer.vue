<template>
  <keep-alive>
  <div class="playlist">
      <div class="playlist_one" >
         <div class="playlist_two"  >
            <div class="playlist_back">
               <div class="playlist_back_b">
                 <span class="spank"><</span>
                 <span class="spanS" ></span>
               </div>
               <div  class="playlist_back_t">
                 <img >
               </div>
            </div>
            <div class="playlist_list">
                  <div>
                     <ul>
                       <li v-for="" >
                           <div>
                              <p>filename</p>
                              <p>remark</p>
                              <p>brief</p>
                           </div>
                       </li>
                     </ul>
                  </div>
            </div>
         </div>
      </div>
  </div>
  </keep-alive>
</template>

<script>
//  import {reqSpecialid,MGeshou} from '../api'
export default {

  data () {
    return {

    }
  },
  created(){

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playlist{
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #ffffff;
}

  .playlist_one{
    width: 100%;
    height: 100%;
  }
  .playlist_two{
    width: 100%;
    height: 100%;
  }
  .playlist_back{
     width: 100%;
     height: 33%;

  }
  .playlist_list{
    width: 100%;
    height: 66%;
    position: fixed;
    border-bottom: 0;
  }
.spank{
  display: block;
  width: 1rem;
  height: 1.8rem;
  font-size: 1.6rem;
  color: #ff6ea0;
  float: left;
}
  .spanS{
    width: 3rem;
    height: 1.6rem;
    margin-left: 33%;
    line-height: 2.5rem;
    font-size: .6rem;
    color: #ffffff;
    font-weight: 800;
  }
 .playlist_back_b{
   width: 100%;
   height: 33%;
   position: fixed;
   top: 0;
   z-index: 23;
 }
.playlist_back_t{
  width: 100%;
  height: 33%;
  position: fixed;
  top: 0;
  z-index: 22;
}
  .playlist_back_t img{
    width: 100%;
    height: 100%;
  }
  .playlist_list li{
    width: 100%;
    height: 2.9rem;
    border-bottom: .01rem solid #cecee2;
  }
  .playlist_list li div{
     padding: .5rem;
  }
  .playlist_list li p{
    font-size: .4rem;
    font-weight: 400;
  }
.playlist_list li p:nth-child(1){
   font-size: .5rem;
   font-weight: 800;
 }
.playlist_list li p:nth-child(2){
  color: #ff6ea0;
}
</style>
