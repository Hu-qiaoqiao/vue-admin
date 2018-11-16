// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'animate.css/animate.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
import Preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(Preview)
Vue.use(ElementUI, Swiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
