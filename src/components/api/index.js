/**
 * Created by zc on 2018/10/27.
 */
import  ajax from './ajax'
const api = '/api'      //https://douban.fm
const m = '/m'  //https://m.douban.com
const img = '/img'  // http://mr3.doubanio.com
const img3 = '/img3'  //   https://img3.doubanio.com  https://douban.fm/j/v2/query/all?q=s&start=0&limit=5

// /api/plist/list/${specialid}?json=true
export const reqGeci = (geci)=>ajax(`/api/singer/info/${geci}&json=true`)  //fm
export const reqSpecialid = (specialid)=>ajax(`/api/plist/list/${specialid}?json=true`)  //fm
//咪咕 api
//migu/remoting/playlistcontents_query_tag?playListType=2&playListId=142554668  30291 142554668
// /migu/remoting/playlist_bycolumnid_tag?playListType=2&type=1&columnId=15127315&tagId=&startIndex=0
export const MSpecialid = (specialid)=>ajax(`/m/migu/remoting/cms_list_tag?pageSize=10&nid=23853969&pageNo=0&type=2006`)  //fm
export const MGeshou = (id)=>ajax(`/m/migu/remoting/playlistcontents_query_tag?playListType=2&playListId=${id}`)  //fm
export const MGsongs = (index)=>ajax(`/m//migu/remoting/playlist_bycolumnid_tag?playListType=2&type=1&columnId=15127315&tagId=&startIndex=${index}`)  //fm
//伤感
export const MGshangGan = (index)=>ajax(`/m/migu/remoting/playlist_bycolumnid_tag?playListType=2&type=1&columnId=15127315&tagId=&startIndex=${index}`)  //fm
//华语
export const MGhanYu = (index)=>ajax(`/m/migu/remoting/playlist_bycolumnid_tag?playListType=2&type=1&columnId=&tagId=43&startIndex=${index}`)  //fm
//流行
export const MGLiuXing = (index)=>ajax(`/m/migu/remoting/playlist_bycolumnid_tag?playListType=2&type=1&columnId=&tagId=29&startIndex=${index}`)  //fm
//影视热歌   v2/music/artist/recommend?tagId=&page=1&_=1541525418277
export const MGYSreGe = (index)=>ajax(`/m/migu/remoting/playlist_bycolumnid_tag?playListType=2&type=1&columnId=&tagId=9&startIndex=${index}`)  //fm
//经典  http://m.music.migu.cn/
export const MGJingDain = (index)=>ajax(`/m/migu/remoting/playlist_bycolumnid_tag?playListType=2&type=1&columnId=&tagId=9&startIndex=${index}`)  //fm
//搜索   migu/remoting/scr_search_tag?rows=20&type=2&keyword=ni&pgc=1
export const MGSousuo = (index)=>ajax(`/m/migu/remoting/scr_search_tag?rows=20&type=2&keyword=${index}&pgc=1`)  //fm
//  歌手列表  http://m.music.migu.cn/migu/remoting/cms_list_tag?nid=23604008&pageSize=200&pageNo=0&type=2002
export const MGXinge = (index)=>ajax(`/m/migu/remoting/cms_list_tag?nid=23604008&pageSize=200&pageNo=0&type=2002`)
// http://m.music.migu.cn/migu/remoting/cms_detail_tag?pid=600908000009490257
// http://m.music.migu.cn/migu/remoting/cms_detail_tag?pid=600902000009048674
// http://m.music.migu.cn/migu/remoting/cms_detail_tag?pid=600908000002379650
// http://m.music.migu.cn/migu/remoting/playlistcontents_query_tag?playListType=2&playListId=20130320&contentCount=20
export const palying = (id)=>ajax(`/m/migu/remoting/cms_detail_tag?pid=${id}`)




