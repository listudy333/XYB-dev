
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 挂载服务器地址
Vue.prototype.$serverAddress={
	image:"imageServer/XYB-dev/",
	//address:"http://175.178.243.18/"
	address:"http://127.0.0.1/"
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif