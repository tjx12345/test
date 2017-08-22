webpackJsonp([0],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3900fa6_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(301);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f3900fa6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f3900fa6_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\home\\home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3900fa6", Component.options)
  } else {
    hotAPI.reload("data-v-f3900fa6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("d2c63a8a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3900fa6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f3900fa6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n\r\n/*去除九宫格上面margin*/\n.mui-table-view.mui-grid-view.mui-grid-9[data-v-f3900fa6] {\r\n    margin-top: 0px;\r\n    border: none;\r\n    /*background-color: white;*/\n}\r\n\r\n\r\n/* 去除li的颜色*/\n.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3[data-v-f3900fa6] {\r\n    background-color: white;\r\n    border: none;\n}\r\n\r\n\r\n/*清除ul下面的黑线*/\n.mui-table-view.mui-grid-view.mui-grid-9[data-v-f3900fa6]:after {\r\n    height: 0;\n}\r\n\r\n\r\n/*清除九宫格字体图标的样式*/\n.mui-icon[data-v-f3900fa6] {\r\n    height: 50px;\r\n    width: 50px;\n}\n.mui-icon-home[data-v-f3900fa6]:before,\r\n.mui-icon-email[data-v-f3900fa6]:before,\r\n.mui-icon-chatbubble[data-v-f3900fa6]:before,\r\n.mui-icon-location[data-v-f3900fa6]:before,\r\n.mui-icon-search[data-v-f3900fa6]:before,\r\n.mui-icon-phone[data-v-f3900fa6]:before {\r\n    content: '';\n}\n.mui-icon-home[data-v-f3900fa6] {\r\n    background-image: url(" + __webpack_require__(294) + ");\r\n    /*环绕显示，让图片自动填充满*/\r\n    background-repeat: round;\n}\n.mui-icon-email[data-v-f3900fa6] {\r\n    background-image: url(" + __webpack_require__(295) + ");\r\n    background-repeat: round;\n}\n.mui-icon-chatbubble[data-v-f3900fa6] {\r\n    background-image: url(" + __webpack_require__(296) + ");\r\n    background-repeat: round;\n}\n.mui-icon-location[data-v-f3900fa6] {\r\n    background-image: url(" + __webpack_require__(297) + ");\r\n    background-repeat: round;\n}\n.mui-icon-search[data-v-f3900fa6] {\r\n    background-image: url(" + __webpack_require__(298) + ");\r\n    background-repeat: round;\n}\n.mui-icon-phone[data-v-f3900fa6] {\r\n    background-image: url(" + __webpack_require__(299) + ");\r\n    background-repeat: round;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/news.15200d52c572004c6f1c893a6ffee15d.png";

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/picShare.64e2fbce2bce3d74ddf5d0d506d80d30.png";

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/goodShow.a99e8466b38999b4ae69e18c466b74d3.png";

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/feedback.64d2fcb9cb2f436b84e2e0483bfb7127.png";

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/search.28fc050c3f98f7c709ce456e9d89b57f.png";

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/callme.19ace7476c8d059caab5887ced2fddbd.png";

/***/ }),

/***/ 300:
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

exports.default = {
    data: function data() {
        return {
            home_imgs: [] //轮播图数据数组
        };
    },

    //初始化的时候发起请求获取轮播图数据
    created: function created() {
        var _this = this;

        this.$ajax.get(this.$httpConfig.lunbo).then(function (res) {
            _this.home_imgs = res.data.message;
        });
    }
};

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('my-swipe', {
    attrs: {
      "imgs": _vm.home_imgs
    }
  })], 1), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "mui-content"
  }, [_c('ul', {
    staticClass: "mui-table-view mui-grid-view mui-grid-9"
  }, [_c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'newsList'
      }
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-home"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("新闻资讯")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'photoShare'
      }
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-email"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("图文分享")])])], 1), _vm._v(" "), _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'goodsList'
      }
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-chatbubble"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("商品展示")])])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-location"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("留言反馈")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-search"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("搜索资讯")])])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('span', {
    staticClass: "mui-icon mui-icon-phone"
  }), _vm._v(" "), _c('div', {
    staticClass: "mui-media-body"
  }, [_vm._v("联系我们")])])])
}]
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f3900fa6", module.exports)
  }
}

/***/ })

});