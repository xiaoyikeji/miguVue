/**
 * Created by Administrator on 2018/11/2 0002.
 */
import {
  SET_SINGER
} from './mutation-types'
export default {
    [SET_SINGER](state,singer){
      state.singer =singer
    }
}
