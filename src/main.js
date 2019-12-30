import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './assets/public.css'
import Header from './components/Header.vue'
import http from './axios/http'
import api from './axios/api'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.component('Header',Header);

Vue.prototype.$http = http;
Vue.prototype.$api = api;
Vue.config.productionTip = false

/*
*js注册ios方法
*/
Vue.prototype.setupWebViewJavascriptBridge = function (callback) {
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () { document.documentElement.removeChild(WVJBIframe) }, 0)
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
