webpackJsonp([7],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a7c98f8_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__(321);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(318)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a7c98f8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6a7c98f8_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\news\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a7c98f8", Component.options)
  } else {
    hotAPI.reload("data-v-6a7c98f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("55d00d35", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a7c98f8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a7c98f8\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.mui-media-body p[data-v-6a7c98f8] {\r\n    color: #0bb0f5;\n}\n.news-desc p[data-v-6a7c98f8]:nth-child(1) {\r\n    float: left;\n}\n.news-desc p[data-v-6a7c98f8]:nth-child(2) {\r\n    float: right;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

//通用性好些 YYYY-MM-DD

exports.default = {
    data: function data() {
        return {
            newsList: [] //新闻列表数据
        };
    }
    //在组件创建的时候。。
    ,
    created: function created() {
        var _this = this;

        this.$ajax.get(this.$httpConfig.newslist).then(function (res) {
            //隐藏loadding close
            _this.newsList = res.data.message;
        }).catch(function (err) {
            console.log('新闻列表出异常了', err);
        });
    }
};

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tmpl"
  }, [_c('nav-bar', {
    attrs: {
      "title": "新闻列表"
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "mui-table-view"
  }, _vm._l((_vm.newsList), function(news) {
    return _c('li', {
      key: news.id,
      staticClass: "mui-table-view-cell mui-media"
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'newsDetail',
          params: {
            newsId: news.id
          }
        }
      }
    }, [_c('img', {
      staticClass: "mui-media-object mui-pull-left",
      attrs: {
        "src": news.img_url
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "mui-media-body"
    }, [_c('span', {
      domProps: {
        "textContent": _vm._s(news.title)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "news-desc"
    }, [_c('p', [_vm._v("点击数:" + _vm._s(news.click))]), _vm._v(" "), _c('p', [_vm._v("发表时间:" + _vm._s(_vm._f("convertTime")(news.add_time)))])])])])], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a7c98f8", module.exports)
  }
}

/***/ })

});