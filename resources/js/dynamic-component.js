 
require('./bootstrap');

window.Vue = require('vue');
 

Vue.component('d-component', require('./pages/DynamicComponent.vue'));

const app = new Vue({
  el: '#app3'
});
