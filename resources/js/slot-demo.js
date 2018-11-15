 
require('./bootstrap');

window.Vue = require('vue');
 

Vue.component('slot-demo', require('./pages/SlotDemo.vue'));

const app = new Vue({
  el: '#app2'
});
