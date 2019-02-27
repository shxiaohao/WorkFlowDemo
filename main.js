import Vue from 'vue'
import App from './App'

//解决冲突测试

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
