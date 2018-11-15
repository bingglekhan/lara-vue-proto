webpackJsonp([5],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {


window._ = __webpack_require__(3);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__(4);

  __webpack_require__(5);
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(6);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(2);

window.Vue = __webpack_require__(7);

Vue.component('input-binding', __webpack_require__(86));

var app = new Vue({
  el: '#app4'
});

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(87)
/* template */
var __vue_template__ = __webpack_require__(93)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/pages/InputBinding.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c87a0838", Component.options)
  } else {
    hotAPI.reload("data-v-c87a0838", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_addBlog_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_addBlog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_addBlog_vue__);
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'add-blog': __WEBPACK_IMPORTED_MODULE_0__components_addBlog_vue___default.a
  },
  data: function data() {
    return {
      title: 'title',
      posstData: {
        someData: 1,
        newData: 2
      }
    };
  },


  methods: {
    post: function post(event) {
      event.preventDefault();
      // axios.post('/foobar', this.postData);;
      if (event) {
        console.log('event inside');
        console.log(event.target.tagName);
      }
    }

  }
});

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(89)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(91)
/* template */
var __vue_template__ = __webpack_require__(92)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/addBlog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1292bbe8", Component.options)
  } else {
    hotAPI.reload("data-v-1292bbe8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("5e77e8c1", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1292bbe8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addBlog.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1292bbe8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./addBlog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n#checkboxes input {\n  display: inline-block;\n  margin-right: 10px;\n}\n#checkboxes label {\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      formData: {
        names: [],
        selectedName: ''
      },

      selected: 'val3',
      users: [{ id: 1, name: 'John' }, { id: 1, name: 'Doe' }],
      noData: -1,
      blog: {
        title: '',
        content: '',
        categories: [],
        author: 'test'

      },
      authors: ['Ninja', 'Avengers', 'Thor'],

      posstData: {
        someData: 1,
        newData: 2
      }
    };
  },


  methods: {
    post: function post(event) {
      event.preventDefault();
      // axios.post('/foobar', this.postData);;
      if (event) {
        console.log("event inside");
        console.log(event.target.tagName);
      }
    }
  },

  mounted: function mounted() {
    var names = [{ name: 'Alex' }, { name: 'John' }, { name: 'Sarah' }, { name: 'Hugo' }];

    this.formData.names = Object.assign({}, this.formData.names, names);
    this.formData.selectedName = this.formData.names[0].name;
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "add-blog" } }, [
    _c("h2", [_vm._v("Add New Blog ")]),
    _vm._v(" "),
    _c("form", [
      _c("label", [_vm._v("Blog Title:")]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.blog.title,
            expression: "blog.title"
          }
        ],
        attrs: { type: "text", required: "" },
        domProps: { value: _vm.blog.title },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.blog, "title", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("label", [_vm._v("Blog Content")]),
      _vm._v(" "),
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model.lazy",
            value: _vm.blog.content,
            expression: "blog.content",
            modifiers: { lazy: true }
          }
        ],
        domProps: { value: _vm.blog.content },
        on: {
          change: function($event) {
            _vm.$set(_vm.blog, "content", $event.target.value)
          }
        }
      }),
      _vm._v(" "),
      _c("div", { attrs: { id: "checkboxes" } }, [
        _c("label", [_vm._v(" Binggle")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.blog.categories,
              expression: "blog.categories"
            }
          ],
          attrs: { type: "checkbox", value: "binggle" },
          domProps: {
            checked: Array.isArray(_vm.blog.categories)
              ? _vm._i(_vm.blog.categories, "binggle") > -1
              : _vm.blog.categories
          },
          on: {
            change: function($event) {
              var $$a = _vm.blog.categories,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = "binggle",
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.blog, "categories", $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    _vm.$set(
                      _vm.blog,
                      "categories",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    )
                }
              } else {
                _vm.$set(_vm.blog, "categories", $$c)
              }
            }
          }
        }),
        _vm._v(" "),
        _c("label", [_vm._v(" Wizard")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.blog.categories,
              expression: "blog.categories"
            }
          ],
          attrs: { type: "checkbox", value: "wizard" },
          domProps: {
            checked: Array.isArray(_vm.blog.categories)
              ? _vm._i(_vm.blog.categories, "wizard") > -1
              : _vm.blog.categories
          },
          on: {
            change: function($event) {
              var $$a = _vm.blog.categories,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = "wizard",
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.blog, "categories", $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    _vm.$set(
                      _vm.blog,
                      "categories",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    )
                }
              } else {
                _vm.$set(_vm.blog, "categories", $$c)
              }
            }
          }
        }),
        _vm._v(" "),
        _c("label", [_vm._v(" Mario")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.blog.categories,
              expression: "blog.categories"
            }
          ],
          attrs: { type: "checkbox", value: "mario" },
          domProps: {
            checked: Array.isArray(_vm.blog.categories)
              ? _vm._i(_vm.blog.categories, "mario") > -1
              : _vm.blog.categories
          },
          on: {
            change: function($event) {
              var $$a = _vm.blog.categories,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = "mario",
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.blog, "categories", $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    _vm.$set(
                      _vm.blog,
                      "categories",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    )
                }
              } else {
                _vm.$set(_vm.blog, "categories", $$c)
              }
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("label", [_vm._v(" Author:")]),
      _vm._v(" "),
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.noData,
              expression: "noData"
            }
          ],
          on: {
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value
                  return val
                })
              _vm.noData = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0]
            }
          }
        },
        [
          _c("option", { domProps: { value: _vm.noData } }, [
            _vm._v("Select a user...")
          ]),
          _vm._v(" "),
          _vm._l(_vm.authors, function(author) {
            return _c("option", { attrs: { value: "{$index}" } }, [
              _vm._v(" " + _vm._s(author))
            ])
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h4", [_vm._v("  dynamic select - option Example ")]),
      _vm._v(" "),
      _c("div", { attrs: { id: "appSelect" } }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.formData.selectedName,
                expression: "formData.selectedName"
              }
            ],
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.formData,
                  "selectedName",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          _vm._l(_vm.formData.names, function(option, index) {
            return _c(
              "option",
              { key: index, domProps: { value: option.name } },
              [_vm._v(_vm._s(option.name))]
            )
          })
        )
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("h4", [_vm._v("  dselected sample  Example ")]),
      _vm._v(" "),
      _c("div", { attrs: { id: "aaaa" } }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.selected,
                expression: "selected"
              }
            ],
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.selected = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          [
            _c("option", { attrs: { value: "val1" } }, [_vm._v("Text1")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "val2" } }, [_vm._v("Text2")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "val3" } }, [_vm._v("Text3")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "val4" } }, [_vm._v("Text4")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "val5" } }, [_vm._v("Text5")])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", { attrs: { id: "preview" } }, [
      _c("h3", [_vm._v("Preview Blog")]),
      _vm._v(" "),
      _c("p", [_vm._v("Bolg Title:" + _vm._s(_vm.blog.title))]),
      _vm._v(" "),
      _c("p", [_vm._v("Blog content: " + _vm._s(_vm.blog.content) + " ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Blog Categories")]),
      _vm._v(" "),
      _c(
        "ul",
        _vm._l(_vm.blog.categories, function(category, index) {
          return _c("li", [
            _vm._v(
              "\n     " + _vm._s(index) + " - " + _vm._s(category) + "\n    "
            )
          ])
        })
      ),
      _vm._v(" "),
      _c("p", [_vm._v("Author: " + _vm._s(_vm.blog.author) + " ")]),
      _vm._v(" "),
      _c("p", [_vm._v("noData : " + _vm._s(_vm.noData) + " ")])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1292bbe8", module.exports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("add-blog")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c87a0838", module.exports)
  }
}

/***/ })

},[84]);