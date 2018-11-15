let mix = require('laravel-mix');
require('laravel-mix-auto-extract');

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/slot-demo.js', 'public/js')
    .js('resources/js/dynamic-component.js', 'public/js')
    .js('resources/js/input-binding.js', 'public/js')
    .js('resources/js/datatable.js', 'public/js')
    .js('resources/js/projects-list.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
  //  .extract([ 'vue', 'element-ui','jquery','vuetify','vuex','bootstrap' ]) ;

   
// Require this package


// <script src="{{ mix('js/manifest.js') }}"></script>
// <script src="{{ mix('js/vendor.js') }}"></script>
// <script src="{{ mix('js/app.js') }}"></script>


// mix.js('resources/js/app.js', 'public/js')
//     .js('resources/js/admin/admin.js', 'public/js/admin/js')
//     .js('resources/js/api/api.js', 'public/js/api/js')
//    .sass('resources/sass/app.scss', 'public/css');

mix.autoExtract();