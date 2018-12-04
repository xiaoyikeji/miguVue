/**
 * Created by zc on 2018/10/17.
 */
import {
  SONGSLIST,
  SONGSLISTDATA,
  PALYINGLIST
} from './mutation-types'
import {
  MSpecialid,
  MGeshou,
  palying
} from '../components/api/index'
export default {
  async AsongList({commit}){
     var list=[]
     var list = await MSpecialid()
     console.log(list.result.results)
     commit('SONGSLIST',list.result.results)
   },
  async AsongListData({commit},id){
    var list=[]
    var list = await MGeshou(id)
    console.log(list.contentList)
    commit('SONGSLISTDATA',list.contentList)
  },
  async palyingList({commit},id){
    var dataList = await palying(id)
    console.log(dataList)
    commit('PALYINGLIST',dataList.data)

  },


}














































