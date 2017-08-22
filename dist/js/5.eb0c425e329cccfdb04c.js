webpackJsonp([5],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a4a3d8c0_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__(335);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(332)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a4a3d8c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a4a3d8c0_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\photo\\detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a4a3d8c0", Component.options)
  } else {
    hotAPI.reload("data-v-a4a3d8c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(333);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("0f12eba0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a4a3d8c0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a4a3d8c0\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\nli[data-v-a4a3d8c0] {\r\n    list-style: none;\n}\nul[data-v-a4a3d8c0] {\r\n    margin: 0;\r\n    padding: 0;\n}\n.photo-title[data-v-a4a3d8c0] {\r\n    overflow: hidden;\n}\n.photo-title[data-v-a4a3d8c0],\r\n.photo-desc[data-v-a4a3d8c0] {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r\n    padding-bottom: 5px;\r\n    margin-bottom: 5px;\r\n    padding-left: 5px;\n}\n.photo-title p[data-v-a4a3d8c0] {\r\n    color: #13c2f7;\r\n    font-size: 20px;\r\n    font-weight: bold;\n}\n.photo-title span[data-v-a4a3d8c0] {\r\n    margin-right: 20px;\n}\n.mui-table-view.mui-grid-view.mui-grid-9[data-v-a4a3d8c0] {\r\n    background-color: white;\r\n    border: 0;\n}\n.mui-table-view.mui-grid-view.mui-grid-9 li[data-v-a4a3d8c0] {\r\n    border: 0;\n}\n.photo-desc p[data-v-a4a3d8c0] {\r\n    font-size: 18px;\n}\n.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3[data-v-a4a3d8c0] {\r\n    padding: 2 2;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 334:
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

exports.default = {
    data: function data() {
        return {
            info: {}, //图片信息
            imgs: [] //缩略图

        };
    },

    //在创建组件的时候。。。。
    created: function created() {
        var _this = this;

        var pid = this.$route.query.photoId;
        //发起请求，需求正常是all来解决
        //但是老师要求一定保证顺序请求，为了熟悉顺序请求的使用
        // getimageInfo、getthumimages
        //先请求info
        this.$ajax.get(this.$httpConfig.getimageInfo + pid).then(function (res) {
            _this.info = res.data.message[0];
            //then的参数是成功后的回调函数,这里的return是为了后面的then保证顺序并且接受返回值准备
            return _this.$ajax.get(_this.$httpConfig.getthumimages + pid);
        }).then(function (res) {
            //操作缩略图
            _this.imgs = res.data.message;
            //手动加上w/h
            _this.imgs.forEach(function (ele) {
                ele.h = 300;
                ele.w = 300;
            });
        });
    }
};

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tmpl"
  }, [_c('nav-bar', {
    attrs: {
      "title": "图片详情"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "photo-title"
  }, [_c('p', {
    domProps: {
      "textContent": _vm._s(_vm.info.title)
    }
  }), _vm._v(" "), _c('span', [_vm._v("发起日期：" + _vm._s(_vm._f("convertTime")(_vm.info.add_time)))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.info.click) + "次浏览")]), _vm._v(" "), _c('span', [_vm._v("分类：民生经济")])]), _vm._v(" "), _c('ul', {
    staticClass: "mui-table-view mui-grid-view mui-grid-9"
  }, _vm._l((_vm.imgs), function(img, index) {
    return _c('li', {
      key: index,
      staticClass: "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
    }, [_c('img', {
      staticClass: "preview-img",
      attrs: {
        "src": img.src,
        "height": "100"
      },
      on: {
        "click": function($event) {
          _vm.$preview.open(index, _vm.imgs)
        }
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "photo-desc"
  }, [_c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.info.content)
    }
  })]), _vm._v(" "), _c('comment', {
    attrs: {
      "cid": _vm.$route.query.photoId
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a4a3d8c0", module.exports)
  }
}

/***/ })

});