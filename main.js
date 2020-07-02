import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import store from './store/index.js';

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
