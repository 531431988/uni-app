import Vue from 'vue'
import App from './App'
import cuCustom from '@/wxcomponents/cu-custom.vue'
import uLink from '@/components/uLink.vue'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

Vue.component('uLink', uLink)
Vue.component('cu-custom', cuCustom)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
