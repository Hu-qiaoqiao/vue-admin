import {CG} from './mutation-types'
export default {
  [CG] (state, {margin, falg, cgWidth, isCollapse}) {
    state.margin = margin
    state.falg = falg
    state.cgWidth = cgWidth
    state.isCollapse = isCollapse
  }
}
