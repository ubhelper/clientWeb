

import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import App from './App.vue'
import router from './router';
import { detectRequest, createEvent, methods } from './common.js';
import { gsap } from "gsap";
import { ScrollToPlugin} from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin) 
import './scss/app.scss';

const appUrl = window.location.hostname == 'localhost' ? 'http://localhost:8001' : '';
const token = localStorage.getItem('token');
// const appUrl = 'http://localhost:8001';


const gauthOption = {
  clientId: '76197459130-fsnge4nig8e3qje6ughaene2hp3u0dgj.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

// Vue.use(GAuth, gauthOption);
Vue.prototype.$appUrl = appUrl;
Vue.prototype.$axios = axios;
Vue.prototype.$_request = detectRequest;
Vue.prototype.$_event = createEvent;
Vue.prototype.$_method = methods;
Vue.prototype.$_gsap = gsap;

Vue.use(ElementUI);
Vue.use(Antd);

Vue.config.productionTip = false


if(token != null) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + token;
}

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}

window.Event = new Vue();
console.warning = {};
Event.$on('member', () => {
    const tokenReplace = localStorage.getItem('token');
    if(tokenReplace != null) {
        axios.defaults.headers.common.Authorization = 'Bearer ' + tokenReplace;
    }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')