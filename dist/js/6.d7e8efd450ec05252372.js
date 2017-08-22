webpackJsonp([6],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetail_vue__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7275de44_node_modules_vue_loader_lib_selector_type_template_index_0_newsDetail_vue__ = __webpack_require__(325);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(322)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7275de44"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_newsDetail_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7275de44_node_modules_vue_loader_lib_selector_type_template_index_0_newsDetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\news\\newsDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] newsDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7275de44", Component.options)
  } else {
    hotAPI.reload("data-v-7275de44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(323);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("baf0333e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7275de44\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./newsDetail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7275de44\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./newsDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.news-title p[data-v-7275de44] {\r\n    color: #0a87f8;\r\n    font-size: 20px;\r\n    font-weight: bold;\n}\n.news-title span[data-v-7275de44] {\r\n    margin-right: 30px;\n}\n.news-title[data-v-7275de44] {\r\n    margin-top: 5px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\r\n\r\n\r\n/*主体文章的左右距离*/\n.news-content[data-v-7275de44] {\r\n    padding: 10 5;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 324:
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

exports.default = {
    data: function data() {
        return {
            title: '', //标题
            newsInfo: {} //新闻详情
        };
    },

    //组件创建的时候获取路由参数，发起请求
    created: function created() {
        var _this = this;

        var id = this.$route.params.newsId;

        //发请求
        this.$ajax.get(this.$httpConfig.newsdetail + id).then(function (res) {
            _this.newsInfo = res.data.message[0]; //其就是一个数组中的一个对象
        });
    },

    //组件内的路由钩子可以操作数据，
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        var title = '';
        if (from.name === 'newsList') {
            title = '新闻详情';
        } else if (from.name === 'goodsDetail') {
            title = '图文详情';
        }
        next(function (vm) {
            //vm就是未来的this对象
            vm.title = title;
        });
    }
};

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tmpl"
  }, [_c('nav-bar', {
    attrs: {
      "title": _vm.title
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "news-title"
  }, [_c('p', {
    domProps: {
      "textContent": _vm._s(_vm.newsInfo.title)
    }
  }), _vm._v(" "), _c('div', [_c('span', [_vm._v(_vm._s(_vm.newsInfo.click) + "次点击")]), _vm._v(" "), _c('span', [_vm._v("分类:民生经济")]), _vm._v(" "), _c('span', [_vm._v("添加时间:" + _vm._s(_vm._f("convertTime")(_vm.newsInfo.add_time)))])])]), _vm._v(" "), _c('div', {
    staticClass: "news-content",
    domProps: {
      "innerHTML": _vm._s(_vm.newsInfo.content)
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7275de44", module.exports)
  }
}

/***/ })

});