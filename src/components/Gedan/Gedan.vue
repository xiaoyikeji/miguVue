<template>
  <div class="hello">
    <div class="Pahang">
      <div class="Pahang_div">
            <span class="Pahang_back" @click="$router.push('/')">
              <img src="../Paihang/imges/back.png" alt="">
            </span>
        <span class="Pahang_P">
               <p>个人中心</p>
        </span>
      </div>

    </div>
    <div class="geren">
      <div class="geren_div1">
        <img src="https://cdn.dribbble.com/users/912872/screenshots/4186388/dri_teaser.png" alt="">
      </div>
      <div>
        <p>-搏击俱乐部-
          <span class="lv_span1">SVIP</span>
        </p>
        <p>
          <span class="lv_span">LV3</span>
          <span> 个人资料</span>
          <span> > </span>
        </p>
      </div>
      <div>

      </div>
    </div>
    <div class="Songs_tabs">
      <ul>
        <li><div ><span >本地音乐</span></div></li>
        <li><div><span>我的收藏</span></div></li>
        <li><div><span>自建歌单</span></div></li>
        <li><div><span>音乐圈</span></div></li>
      </ul>
    </div>

  </div>
</template>
<script>
  export default {

    data () {
      return {

      }
    },
    methods:{

    },
    created(){

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
  .geren{
    width: 100%;
    height: 4rem;

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
  .Songs_body_AULI_a img{
    padding: .3rem;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: .6rem;
  }

  .geren div{
     float: left;
     font-size: .5rem;
     padding: .5rem;
    line-height: .9rem;
  }
  .lv_span{
    border: .01rem solid #ff0e05;
    padding: .1rem;
    background-color: #ff6ea0;
    border-radius: .2rem;
    color: #ffffff;
  }
  .lv_span1{
    border: .01rem solid #9999aa;
    padding: .01rem;
    background-color: #e5e3ff;
    border-radius: .2rem;
    color: #f4f4f4;
  }
  .geren_div1 img{
     width: 2rem;
     height: 2rem;
    border-radius: .3rem;
  }

</style>
