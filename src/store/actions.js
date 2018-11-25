import {CG} from './mutation-types'
export default {
  cg ({commit, state}) { // 导航栏开始
    const headermain = document.querySelector('.header_main')
    if (state.falg) {
      state.margin = '220px'
      state.cgWidth = '200px'
      state.isCollapse = false
      headermain.classList.remove('bg1')
      headermain.classList.add('bg2')
      state.falg = false
      commit(CG)
    } else {
      state.margin = '120px'
      state.cgWidth = '100px'
      state.isCollapse = true
      headermain.classList.remove('bg2')
      headermain.classList.add('bg1')
      state.falg = true
      commit(CG)
    }
  } // 导航栏结束
}
