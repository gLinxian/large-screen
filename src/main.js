// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import echarts from 'echarts'
import vueParticles from 'vue-particles'
import './styles/iconfont.css'
import './utils/rem'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(vueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
