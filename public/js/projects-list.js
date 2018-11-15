webpackJsonp([1],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(16)
/* template */
var __vue_template__ = __webpack_require__(17)
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
Component.options.__file = "resources/js/datatable/Datatable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c09626a", Component.options)
  } else {
    hotAPI.reload("data-v-3c09626a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(20)
/* template */
var __vue_template__ = __webpack_require__(21)
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
Component.options.__file = "resources/js/datatable/Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40d39f43", Component.options)
  } else {
    hotAPI.reload("data-v-40d39f43", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(15)
/* template */
var __vue_template__ = __webpack_require__(22)
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
Component.options.__file = "resources/js/datatable/Projects.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ae76063", Component.options)
  } else {
    hotAPI.reload("data-v-3ae76063", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datatable_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datatable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Datatable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pagination_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Pagination_vue__);
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
    components: { datatable: __WEBPACK_IMPORTED_MODULE_0__Datatable_vue___default.a, pagination: __WEBPACK_IMPORTED_MODULE_1__Pagination_vue___default.a },
    created: function created() {
        this.getProjects();
    },
    data: function data() {
        var sortOrders = {};

        var columns = [{ width: '33%', label: 'Deadline', name: 'deadline' }, { width: '33%', label: 'Budget', name: 'budget' }, { width: '33%', label: 'Status', name: 'status' }];

        columns.forEach(function (column) {
            sortOrders[column.name] = -1;
        });
        return {
            projects: [],
            columns: columns,
            sortKey: 'deadline',
            sortOrders: sortOrders,
            perPage: ['10', '20', '30'],
            tableData: {
                draw: 0,
                length: 10,
                search: '',
                column: 0,
                dir: 'desc'
            },
            pagination: {
                lastPage: '',
                currentPage: '',
                total: '',
                lastPageUrl: '',
                nextPageUrl: '',
                prevPageUrl: '',
                from: '',
                to: ''
            }
        };
    },

    methods: {
        getProjects: function getProjects() {
            var _this = this;

            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/projects';

            this.tableData.draw++;
            axios.get(url, { params: this.tableData }).then(function (response) {
                var data = response.data;
                if (_this.tableData.draw == data.draw) {
                    _this.projects = data.data.data;
                    _this.configPagination(data.data);
                }
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        configPagination: function configPagination(data) {
            this.pagination.lastPage = data.last_page;
            this.pagination.currentPage = data.current_page;
            this.pagination.total = data.total;
            this.pagination.lastPageUrl = data.last_page_url;
            this.pagination.nextPageUrl = data.next_page_url;
            this.pagination.prevPageUrl = data.prev_page_url;
            this.pagination.from = data.from;
            this.pagination.to = data.to;
        },
        sortBy: function sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            this.tableData.column = this.getIndex(this.columns, 'name', key);
            this.tableData.dir = this.sortOrders[key] === 1 ? 'asc' : 'desc';
            this.getProjects();
        },
        getIndex: function getIndex(array, key, value) {
            return array.findIndex(function (i) {
                return i[key] == value;
            });
        }
    }
});

/***/ }),

/***/ 16:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["columns", "sortKey", "sortOrders"]
});

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "table",
    { staticClass: "table is-bordered data-table" },
    [
      _c("thead", [
        _c(
          "tr",
          _vm._l(_vm.columns, function(column) {
            return _c(
              "th",
              {
                key: column.name,
                class:
                  _vm.sortKey === column.name
                    ? _vm.sortOrders[column.name] > 0
                      ? "sorting_asc"
                      : "sorting_desc"
                    : "sorting",
                style: "width:" + column.width + ";" + "cursor:pointer;",
                on: {
                  click: function($event) {
                    _vm.$emit("sort", column.name)
                  }
                }
              },
              [
                _vm._v(
                  "\n                " + _vm._s(column.label) + "\n            "
                )
              ]
            )
          })
        )
      ]),
      _vm._v(" "),
      _vm._t("default")
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
    require("vue-hot-reload-api")      .rerender("data-v-3c09626a", module.exports)
  }
}

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("487c24bb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40d39f43\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-40d39f43\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.pagination {\n  -webkit-box-pack: end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important;\n}\n.pagination .page-stats {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-right: 5px;\n}\n.pagination i {\n    color: #3273dc !important;\n}\n", ""]);

// exports


/***/ }),

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

/***/ 20:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['pagination', 'client', 'filtered']
});

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return !_vm.client
    ? _c("nav", { staticClass: "pagination" }, [
        _c("span", { staticClass: "page-stats" }, [
          _vm._v(
            _vm._s(_vm.pagination.from) +
              " - " +
              _vm._s(_vm.pagination.to) +
              " of " +
              _vm._s(_vm.pagination.total)
          )
        ]),
        _vm._v(" "),
        _vm.pagination.prevPageUrl
          ? _c(
              "a",
              {
                staticClass: "button is-small pagination-previous",
                on: {
                  click: function($event) {
                    _vm.$emit("prev")
                  }
                }
              },
              [_vm._v("\n        Prev\n    ")]
            )
          : _c(
              "a",
              {
                staticClass: "button is-small pagination-previous",
                attrs: { disabled: true }
              },
              [_vm._v("\n       Prev\n    ")]
            ),
        _vm._v(" "),
        _vm.pagination.nextPageUrl
          ? _c(
              "a",
              {
                staticClass: "button is-small pagination-next",
                on: {
                  click: function($event) {
                    _vm.$emit("next")
                  }
                }
              },
              [_vm._v("\n        Next\n    ")]
            )
          : _c(
              "a",
              {
                staticClass: "button is-small pagination-next",
                attrs: { disabled: true }
              },
              [_vm._v("\n        Next\n    ")]
            )
      ])
    : _c("nav", { staticClass: "pagination" }, [
        _c("span", { staticClass: "page-stats" }, [
          _vm._v(
            "\n        " +
              _vm._s(_vm.pagination.from) +
              " - " +
              _vm._s(_vm.pagination.to) +
              " of " +
              _vm._s(_vm.filtered.length) +
              "\n        "
          ),
          _vm.filtered.length < _vm.pagination.total
            ? _c("span", [
                _vm._v(
                  "(filtered from " +
                    _vm._s(_vm.pagination.total) +
                    " total entries)"
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _vm.pagination.prevPage
          ? _c(
              "a",
              {
                staticClass: "button is-small pagination-previous",
                on: {
                  click: function($event) {
                    _vm.$emit("prev")
                  }
                }
              },
              [_vm._v("\n        Prev\n    ")]
            )
          : _c(
              "a",
              {
                staticClass: "button is-small pagination-previous",
                attrs: { disabled: true }
              },
              [_vm._v("\n       Prev\n    ")]
            ),
        _vm._v(" "),
        _vm.pagination.nextPage
          ? _c(
              "a",
              {
                staticClass: "button is-small pagination-next",
                on: {
                  click: function($event) {
                    _vm.$emit("next")
                  }
                }
              },
              [_vm._v("\n        Next\n    ")]
            )
          : _c(
              "a",
              {
                staticClass: "button is-small pagination-next",
                attrs: { disabled: true }
              },
              [_vm._v("\n        Next\n    ")]
            )
      ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-40d39f43", module.exports)
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "projects" },
    [
      _c("div", { staticClass: "tableFilters" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.tableData.search,
              expression: "tableData.search"
            }
          ],
          staticClass: "input",
          attrs: { type: "text", placeholder: "Search Table" },
          domProps: { value: _vm.tableData.search },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.tableData, "search", $event.target.value)
              },
              function($event) {
                _vm.getProjects()
              }
            ]
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "control" }, [
          _c("div", { staticClass: "select" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tableData.length,
                    expression: "tableData.length"
                  }
                ],
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.tableData,
                        "length",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                    function($event) {
                      _vm.getProjects()
                    }
                  ]
                }
              },
              _vm._l(_vm.perPage, function(records, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: records } },
                  [_vm._v(_vm._s(records))]
                )
              })
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "datatable",
        {
          attrs: {
            columns: _vm.columns,
            sortKey: _vm.sortKey,
            sortOrders: _vm.sortOrders
          },
          on: { sort: _vm.sortBy }
        },
        [
          _c(
            "tbody",
            _vm._l(_vm.projects, function(project) {
              return _c("tr", { key: project.id }, [
                _c("td", [_vm._v(_vm._s(project.deadline))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(project.budget))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(project.status))])
              ])
            })
          )
        ]
      ),
      _vm._v(" "),
      _c("pagination", {
        attrs: { pagination: _vm.pagination },
        on: {
          prev: function($event) {
            _vm.getProjects(_vm.pagination.prevPageUrl)
          },
          next: function($event) {
            _vm.getProjects(_vm.pagination.nextPageUrl)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3ae76063", module.exports)
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(24)
/* template */
var __vue_template__ = __webpack_require__(25)
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
Component.options.__file = "resources/js/datatable/ProjectsClientSide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6eab6185", Component.options)
  } else {
    hotAPI.reload("data-v-6eab6185", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datatable_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Datatable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Datatable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pagination_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Pagination_vue__);
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
    components: { datatable: __WEBPACK_IMPORTED_MODULE_0__Datatable_vue___default.a, pagination: __WEBPACK_IMPORTED_MODULE_1__Pagination_vue___default.a },
    created: function created() {
        this.getProjects();
    },
    data: function data() {
        var sortOrders = {};

        var columns = [{ width: '33%', label: 'Deadline', name: 'deadline', type: 'date' }, { width: '33%', label: 'Budget', name: 'budget', type: 'number' }, { width: '33%', label: 'Status', name: 'status' }];

        columns.forEach(function (column) {
            sortOrders[column.name] = -1;
        });
        return {
            projects: [],
            columns: columns,
            sortKey: 'deadline',
            sortOrders: sortOrders,
            length: 10,
            search: '',
            tableData: {
                client: true
            },
            pagination: {
                currentPage: 1,
                total: '',
                nextPage: '',
                prevPage: '',
                from: '',
                to: ''
            }
        };
    },

    methods: {
        getProjects: function getProjects() {
            var _this = this;

            var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/projects';

            axios.get(url, { params: this.tableData }).then(function (response) {
                _this.projects = response.data;
                _this.pagination.total = _this.projects.length;
            }).catch(function (errors) {
                console.log(errors);
            });
        },
        paginate: function paginate(array, length, pageNumber) {
            this.pagination.from = array.length ? (pageNumber - 1) * length + 1 : ' ';
            this.pagination.to = pageNumber * length > array.length ? array.length : pageNumber * length;
            this.pagination.prevPage = pageNumber > 1 ? pageNumber : '';
            this.pagination.nextPage = array.length > this.pagination.to ? pageNumber + 1 : '';
            return array.slice((pageNumber - 1) * length, pageNumber * length);
        },
        resetPagination: function resetPagination() {
            this.pagination.currentPage = 1;
            this.pagination.prevPage = '';
            this.pagination.nextPage = '';
        },
        sortBy: function sortBy(key) {
            this.resetPagination();
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        },
        getIndex: function getIndex(array, key, value) {
            return array.findIndex(function (i) {
                return i[key] == value;
            });
        }
    },
    computed: {
        filteredProjects: function filteredProjects() {
            var _this2 = this;

            var projects = this.projects;
            if (this.search) {
                projects = projects.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(_this2.search.toLowerCase()) > -1;
                    });
                });
            }
            var sortKey = this.sortKey;
            var order = this.sortOrders[sortKey] || 1;
            if (sortKey) {
                projects = projects.slice().sort(function (a, b) {
                    var index = _this2.getIndex(_this2.columns, 'name', sortKey);
                    a = String(a[sortKey]).toLowerCase();
                    b = String(b[sortKey]).toLowerCase();
                    if (_this2.columns[index].type && _this2.columns[index].type === 'date') {
                        return (a === b ? 0 : new Date(a).getTime() > new Date(b).getTime() ? 1 : -1) * order;
                    } else if (_this2.columns[index].type && _this2.columns[index].type === 'number') {
                        return (+a === +b ? 0 : +a > +b ? 1 : -1) * order;
                    } else {
                        return (a === b ? 0 : a > b ? 1 : -1) * order;
                    }
                });
            }
            return projects;
        },
        paginated: function paginated() {
            return this.paginate(this.filteredProjects, this.length, this.pagination.currentPage);
        }
    }
});

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "projects" },
    [
      _c("div", { staticClass: "tableFilters" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.search,
              expression: "search"
            }
          ],
          staticClass: "input",
          attrs: { type: "text", placeholder: "Search Table" },
          domProps: { value: _vm.search },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search = $event.target.value
              },
              function($event) {
                _vm.resetPagination()
              }
            ]
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "control" }, [
          _c("div", { staticClass: "select" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.length,
                    expression: "length"
                  }
                ],
                on: {
                  change: [
                    function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.length = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                    function($event) {
                      _vm.resetPagination()
                    }
                  ]
                }
              },
              [
                _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "20" } }, [_vm._v("20")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "30" } }, [_vm._v("30")])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "datatable",
        {
          attrs: {
            columns: _vm.columns,
            sortKey: _vm.sortKey,
            sortOrders: _vm.sortOrders
          },
          on: { sort: _vm.sortBy }
        },
        [
          _c(
            "tbody",
            _vm._l(_vm.paginated, function(project) {
              return _c("tr", { key: project.id }, [
                _c("td", [_vm._v(_vm._s(project.deadline))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(project.budget))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(project.status))])
              ])
            })
          )
        ]
      ),
      _vm._v(" "),
      _c("pagination", {
        attrs: {
          pagination: _vm.pagination,
          client: true,
          filtered: _vm.filteredProjects
        },
        on: {
          prev: function($event) {
            --_vm.pagination.currentPage
          },
          next: function($event) {
            ++_vm.pagination.currentPage
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6eab6185", module.exports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(2);

window.Vue = __webpack_require__(7);

Vue.component('projects', __webpack_require__(14));
Vue.component('projects-client-side', __webpack_require__(23));

var app = new Vue({
  el: '#app-projects'
});

/***/ })

},[96]);