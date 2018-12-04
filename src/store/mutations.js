/**
 * Created by zc on 2018/10/17.
 */
import Vue from 'vue'
import {
  SONGSLIST,
  SONGSLISTDATA,
  PALYINGLIST
} from './mutation-types'
import 'vue'
export default{
      // fm 添加到面板保存到cartList
  [SONGSLIST](state,data){
    state.songsList = data
    console.log(state.songsList)
  },
  [SONGSLISTDATA](state,data){
    state.songsListdate = data
    console.log(state.songsListdate)
  },
  [PALYINGLIST](state,data){
    state.danSong = data
    console.log(state.danSong)

  }
}
