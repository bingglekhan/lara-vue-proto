 
require('./bootstrap');

window.Vue = require('vue');
 

Vue.component('projects', require('./datatable/Projects.vue'));
Vue.component('projects-client-side', require('./datatable/ProjectsClientSide.vue'));

const app = new Vue({
  el: '#app-projects'
});
