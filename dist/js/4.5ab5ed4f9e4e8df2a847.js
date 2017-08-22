webpackJsonp([4],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_share_vue__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_share_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_share_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef98c240_node_modules_vue_loader_lib_selector_type_template_index_0_share_vue__ = __webpack_require__(331);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(328)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_share_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ef98c240_node_modules_vue_loader_lib_selector_type_template_index_0_share_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\photo\\share.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] share.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef98c240", Component.options)
  } else {
    hotAPI.reload("data-v-ef98c240", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(329);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("574a3614", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ef98c240\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./share.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ef98c240\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./share.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*图片懒加载的样式*/\nimage[lazy=loading] {\r\n    width: 40px;\r\n    height: 300px;\r\n    margin: auto;\n}\n.photo-header li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n    height: 30px;\n}\n.photo-header ul {\r\n    /*强制不换行*/\r\n    white-space: nowrap;\r\n    overflow-x: auto;\r\n    padding-left: 0px;\r\n    margin: 5;\n}\r\n\r\n\r\n/*下面的图片*/\n.photo-list li {\r\n    list-style: none;\r\n    position: relative;\n}\n.photo-list li img {\r\n    width: 100%;\r\n    height: 230px;\r\n    vertical-align: top;\n}\n.photo-list ul {\r\n    padding-left: 0px;\r\n    margin: 0;\n}\n.photo-list p {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    color: white;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    margin-bottom: 0px;\n}\n.photo-list p span:nth-child(1) {\r\n    font-weight: bold;\r\n    font-size: 16px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 330:
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

exports.default = {
    data: function data() {
        return {
            categorys: [], //分类
            imgs: [] //图片对象
        };
    },
    created: function created() {
        var _this = this;

        //合并请求
        this.$ajax.all([this.$ajax.get(this.$httpConfig.getimgs + '0'), this.$ajax.get(this.$httpConfig.category)]).then(this.$ajax.spread(function (imgsRes, categoryRes) {
            //(imgsRes,categoryRes) 参数位置对应all函数数组元素位置的响应
            _this.categorys = categoryRes.data.message;

            //Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新
            _this.categorys.unshift({
                id: 0,
                title: '全部'
            });

            _this.imgs = imgsRes.data.message;
        })).catch(function (err) {
            console.log('图片模块请求数据失败', err);
        });
    },

    //点击分类后获取图片
    methods: {
        getImgs: function getImgs(gid) {
            var _this2 = this;

            this.$ajax.get(this.$httpConfig.getimgs + gid).then(function (res) {
                _this2.imgs = res.data.message;
            }).catch(function (err) {
                console.log('分类图片获取失败');
            });
        }
    }
};

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tmpl"
  }, [_c('nav-bar', {
    attrs: {
      "title": "图文分享"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "photo-header"
  }, [_c('ul', _vm._l((_vm.categorys), function(category) {
    return _c('li', {
      key: category.id
    }, [_c('a', {
      attrs: {
        "href": "javascript:;"
      },
      on: {
        "click": function($event) {
          _vm.getImgs(category.id)
        }
      }
    }, [_vm._v(_vm._s(category.title))])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "photo-list"
  }, [_c('ul', _vm._l((_vm.imgs), function(img) {
    return _c('li', {
      key: img.id
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'photoDetail',
          query: {
            photoId: img.id
          }
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy",
        rawName: "v-lazy",
        value: (img.img_url),
        expression: "img.img_url"
      }]
    }), _vm._v(" "), _c('p', [_c('span', {
      domProps: {
        "textContent": _vm._s(img.title)
      }
    }), _vm._v(" "), _c('br'), _vm._v(" "), _c('span', {
      domProps: {
        "textContent": _vm._s(img.zhaiyao)
      }
    })])])], 1)
  }))])], 1)
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef98c240", module.exports)
  }
}

/***/ })

});