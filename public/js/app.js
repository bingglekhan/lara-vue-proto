webpackJsonp([6],{

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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
module.exports = __webpack_require__(60);


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(2);

window.Vue = __webpack_require__(7);

Vue.component('navbar', __webpack_require__(55));
Vue.component('articles', __webpack_require__(57));

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(56)
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
Component.options.__file = "resources/js/components/Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dde423b", Component.options)
  } else {
    hotAPI.reload("data-v-6dde423b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      { staticClass: "navbar navbar-expand-sm navbar-dark bg-info mb-2" },
      [
        _c("div", { staticClass: "container" }, [
          _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
            _vm._v("Larticles")
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6dde423b", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(58)
/* template */
var __vue_template__ = __webpack_require__(59)
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
Component.options.__file = "resources/js/components/Articles.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03ba8128", Component.options)
  } else {
    hotAPI.reload("data-v-03ba8128", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 58:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      articles: [],
      article: {
        id: '',
        title: '',
        body: ''
      },
      article_id: '',
      pagination: {},
      edit: false
    };
  },
  created: function created() {
    this.fetchArticles();
  },


  methods: {
    fetchArticles: function fetchArticles(page_url) {
      var _this = this;

      var vm = this;
      page_url = page_url || '/api/articles';
      fetch(page_url).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.articles = res.data;
        vm.makePagination(res.meta, res.links);
      }).catch(function (err) {
        return console.log(err);
      });
    },
    makePagination: function makePagination(meta, links) {
      var pagination = {
        current_page: meta.current_page,
        last_page: meta.last_page,
        next_page_url: links.next,
        prev_page_url: links.prev
      };

      this.pagination = pagination;
    },
    deleteArticle: function deleteArticle(id) {
      var _this2 = this;

      if (confirm('Are You Sure?')) {
        fetch('api/article/' + id, {
          method: 'delete'
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          alert('Article Removed');
          _this2.fetchArticles();
        }).catch(function (err) {
          return console.log(err);
        });
      }
    },
    addArticle: function addArticle() {
      var _this3 = this;

      if (this.edit === false) {
        // Add
        fetch('api/article', {
          method: 'post',
          body: JSON.stringify(this.article),
          headers: {
            'content-type': 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this3.clearForm();
          alert('Article Added');
          _this3.fetchArticles();
        }).catch(function (err) {
          return console.log(err);
        });
      } else {
        // Update
        fetch('api/article', {
          method: 'put',
          body: JSON.stringify(this.article),
          headers: {
            'content-type': 'application/json'
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this3.clearForm();
          alert('Article Updated');
          _this3.fetchArticles();
        }).catch(function (err) {
          return console.log(err);
        });
      }
    },
    editArticle: function editArticle(article) {
      this.edit = true;
      this.article.id = article.id;
      this.article.article_id = article.id;
      this.article.title = article.title;
      this.article.body = article.body;
    },
    clearForm: function clearForm() {
      this.edit = false;
      this.article.id = null;
      this.article.article_id = null;
      this.article.title = '';
      this.article.body = '';
    }
  }
});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h2", [_vm._v("Articles")]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "mb-3",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addArticle($event)
            }
          }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.article.title,
                  expression: "article.title"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Title" },
              domProps: { value: _vm.article.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.article, "title", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.article.body,
                  expression: "article.body"
                }
              ],
              staticClass: "form-control",
              attrs: { placeholder: "Body" },
              domProps: { value: _vm.article.body },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.article, "body", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-light btn-block",
              attrs: { type: "submit" }
            },
            [_vm._v("Save")]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-danger btn-block",
          on: {
            click: function($event) {
              _vm.clearForm()
            }
          }
        },
        [_vm._v("Cancel")]
      ),
      _vm._v(" "),
      _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
        _c("ul", { staticClass: "pagination" }, [
          _c(
            "li",
            {
              staticClass: "page-item",
              class: [{ disabled: !_vm.pagination.prev_page_url }]
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      _vm.fetchArticles(_vm.pagination.prev_page_url)
                    }
                  }
                },
                [_vm._v("Previous")]
              )
            ]
          ),
          _vm._v(" "),
          _c("li", { staticClass: "page-item disabled" }, [
            _c(
              "a",
              { staticClass: "page-link text-dark", attrs: { href: "#" } },
              [
                _vm._v(
                  "Page " +
                    _vm._s(_vm.pagination.current_page) +
                    " of " +
                    _vm._s(_vm.pagination.last_page)
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass: "page-item",
              class: [{ disabled: !_vm.pagination.next_page_url }]
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      _vm.fetchArticles(_vm.pagination.next_page_url)
                    }
                  }
                },
                [_vm._v("Next")]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.articles, function(article) {
        return _c(
          "div",
          { key: article.id, staticClass: "card card-body mb-2" },
          [
            _c("h3", [_vm._v(_vm._s(article.title))]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(article.body))]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-warning mb-2",
                on: {
                  click: function($event) {
                    _vm.editArticle(article)
                  }
                }
              },
              [_vm._v("Edit")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-danger",
                on: {
                  click: function($event) {
                    _vm.deleteArticle(article.id)
                  }
                }
              },
              [_vm._v("Delete")]
            )
          ]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-03ba8128", module.exports)
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[32]);