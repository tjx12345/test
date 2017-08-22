webpackJsonp([1],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_shopcart_vue__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_shopcart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_shopcart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9816cfe6_node_modules_vue_loader_lib_selector_type_template_index_0_shopcart_vue__ = __webpack_require__(317);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(310)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9816cfe6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_shopcart_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9816cfe6_node_modules_vue_loader_lib_selector_type_template_index_0_shopcart_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\shopcart\\shopcart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shopcart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9816cfe6", Component.options)
  } else {
    hotAPI.reload("data-v-9816cfe6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(311);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("183b8d2d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9816cfe6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shopcart.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9816cfe6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shopcart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n.pay-detail ul li[data-v-9816cfe6] {\r\n    list-style: none;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin-bottom: 3px;\n}\n.pay-detail ul[data-v-9816cfe6] {\r\n    padding-left: 5px;\r\n    margin-top: 5px;\n}\n.pay-detail ul li img[data-v-9816cfe6] {\r\n    width: 80px;\r\n    height: 80px;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    margin-top: 10px;\n}\n.pay-detail ul li[data-v-9816cfe6] >:nth-child(1),\r\n.pay-detail ul li[data-v-9816cfe6] >:nth-child(3) {\r\n    display: inline-block;\n}\n.pay-calc p[data-v-9816cfe6] {\r\n    display: inline-block;\r\n    width: 250px;\r\n    overflow: hidden;\r\n    color: blue;\r\n    font-size: 15px;\r\n    margin-bottom: 10px;\n}\n.pay-detail ul li[data-v-9816cfe6] >:nth-child(1) {\r\n    line-height: 80px;\n}\n.calc[data-v-9816cfe6]:nth-child(1) {\r\n    color: red;\r\n    font-size: 20px;\n}\n.calc span[data-v-9816cfe6]:not(:nth-child(1)) {\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n    display: inline-block;\r\n    width: 20px;\r\n    text-align: center;\n}\n.calc a[data-v-9816cfe6] {\r\n    margin-left: 20px;\n}\n.show-1[data-v-9816cfe6],\r\n.show-2[data-v-9816cfe6] {\r\n    display: inline-block;\n}\n.show-1[data-v-9816cfe6],\r\n.show-2[data-v-9816cfe6] {\r\n    margin-left: 30px;\n}\n.show-price[data-v-9816cfe6] {\r\n    background-color: rgba(0, 0, 0, 0.2);\n}\r\n", ""]);

// exports


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(313);

var _keys2 = _interopRequireDefault(_keys);

var _prodTools = __webpack_require__(168);

var _prodTools2 = _interopRequireDefault(_prodTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            goodsList: [] //商品数组
        };
    },
    created: function created() {
        var _this = this;

        //操作获取id
        var prods = _prodTools2.default.getProds(); //{ "87":10 }
        //Object.keys(prods) ->["87", "88"] -> "88,87"
        var ids = (0, _keys2.default)(prods).join(',');
        this.$ajax.get(this.$httpConfig.getshopcart + ids).then(function (res) {
            _this.goodsList = res.data.message;
            //自己挂载属性，不会引起响应式
            _this.goodsList.forEach(function (ele) {
                //该属性不是响应式的，属性改变以后不会触发视图更新
                // ele.pickNum = prods[ele.id];
                // ele.isSelected = false;
                _this.$set(ele, 'pickNum', prods[ele.id]);
                _this.$set(ele, 'isSelected', false);
            });
        }).catch(function (err) {
            console.log('获取购物车商品数据失败', err);
        });
    },

    methods: {
        sub: function sub(index) {
            this.goodsList[index].pickNum--;
        },
        add: function add(index) {
            this.goodsList[index].pickNum++;
        },
        del: function del(index) {
            if (confirm('亲，很优惠哟，真的要删除吗？')) {
                _prodTools2.default.delProd(this.goodsList[index].id);
                this.goodsList.splice(index, 1);
            }
        }
    },
    computed: {
        payment: function payment() {

            //件数： 遍历数组，如果当前的isSelected->true，自加一
            //总价: 当前的isSelected->true，将该元素的pickNum* sell_price 累加到总金额中
            //最终返回该对象，具备两个属性: count,totalPrice
            var count = 0;
            var totalPrice = 0;
            this.goodsList.forEach(function (ele) {
                if (ele.isSelected) {
                    count++;
                    totalPrice += ele.sell_price * ele.pickNum;
                }
            });

            return {
                count: count,
                totalPrice: totalPrice
                //根据在该函数体内部的this相关属性的修改，所触发这个函数
                //返回新的计算的数据，也就是return 的任何东西
            };
        }
    },
    //当前路由离开之前问一问，如果false取消用户导航行为，否则放行
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        if (confirm('真的要离开吗？程序猿好不舍哟！')) {
            next();
        } else {
            next(false); //取消导航
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(314), __esModule: true };

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(315);
module.exports = __webpack_require__(5).Object.keys;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(29)
  , $keys    = __webpack_require__(28);

__webpack_require__(316)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(18)
  , core    = __webpack_require__(5)
  , fails   = __webpack_require__(19);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav-bar', {
    attrs: {
      "title": "购物车"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pay-detail"
  }, [_c('ul', _vm._l((_vm.goodsList), function(goods, index) {
    return _c('li', {
      key: goods.id,
      staticClass: "p-list"
    }, [_c('mt-switch', {
      model: {
        value: (goods.isSelected),
        callback: function($$v) {
          goods.isSelected = $$v
        },
        expression: "goods.isSelected"
      }
    }), _vm._v(" "), _c('img', {
      attrs: {
        "src": goods.thumb_path
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "pay-calc"
    }, [_c('p', {
      domProps: {
        "textContent": _vm._s(goods.title)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "calc"
    }, [_c('span', [_vm._v("￥" + _vm._s(goods.sell_price))]), _vm._v(" "), _c('span', {
      on: {
        "click": function($event) {
          _vm.sub(index)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(goods.pickNum))]), _vm._v(" "), _c('span', {
      on: {
        "click": function($event) {
          _vm.add(index)
        }
      }
    }, [_vm._v("+")]), _vm._v(" "), _c('a', {
      attrs: {
        "href": "javascript:;"
      },
      on: {
        "click": function($event) {
          _vm.del(index)
        }
      }
    }, [_vm._v("删除")])])])], 1)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "show-price"
  }, [_c('div', {
    staticClass: "show-1"
  }, [_c('p', [_vm._v("总计(不含运费):")]), _vm._v(" "), _c('span', [_vm._v("已经选择商品" + _vm._s(_vm.payment.count) + "件，总价￥" + _vm._s(_vm.payment.totalPrice) + "元")])]), _vm._v(" "), _c('div', {
    staticClass: "show-2"
  }, [_c('mt-button', {
    attrs: {
      "type": "danger",
      "size": "large"
    }
  }, [_vm._v("去结算")])], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9816cfe6", module.exports)
  }
}

/***/ })

});