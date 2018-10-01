import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';


Vue.use(axios, axios)

new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>'
})
