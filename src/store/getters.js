/**
 * Created by zc on 2018/10/17.
 */
export default{
  G_songList:function (state,songsList) {
    return state.songsList
  },
  G_danSong:function (state,danSong) {
    let n=0
    var re=/\[[^[]+/g;
    var arr=[]

  },
  G_xihuan:function (state) {
    var temp = []; //一个新的临时数组
    console.log(state.xihuan)
    for(var i = 0; i < state.xihuan.length; i++){
      if(temp.indexOf(state.xihuan[i]) == -1){
        temp.push(state.xihuan[i]);
      }
    }
    return temp;
  }
}

