<template>
    <div class="tabs">
       <ul>
         <router-link v-show="flase" to="/"tag="li"><img src="./imges/mumusic-1.png" alt=""><p>My-music</p></router-link>
         <router-link to="/Mymusic"tag="li"><img src="./imges/mumusic-1.png" alt=""><p>My-music</p></router-link>
         <router-link to="/SouSuo"tag="li"><img src="./imges/sousu.png" alt=""><p>Exoploxe</p></router-link>
         <router-link to="/Gedan"tag="li"><img src="./imges/protitl.png" alt=""><p>Library</p></router-link>
       </ul>
    </div>

</template>
</template>

<script>
export default {

  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabs{
    height: 2rem;
    width: 100%;
    background-color: #ffffff;
    overflow: hidden;

  }
  .tabs ul{
    display: flex;
  }
  .tabs ul li{
    display: block;
    float: left;
    list-style: none;
    width: 33%;
    height: 100%;
    text-align: center;
    line-height:.4rem;
    color: #180c0c;

  }
  .tabs ul li img{
     width: 1rem;
     margin-top: .2rem;
  }
  .tabs ul li p{
    margin-top: 0rem;
    font-size: .4rem;
    color: #858585;

  }
  .tabs ul li:hover{
    background: rgba(0, 0, 0, 0.36);
  }

</style>
