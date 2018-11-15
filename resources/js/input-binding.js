 
require('./bootstrap');

window.Vue = require('vue');
 

Vue.component('input-binding', require('./pages/InputBinding.vue'));

const app = new Vue({
  el: '#app4'
});
