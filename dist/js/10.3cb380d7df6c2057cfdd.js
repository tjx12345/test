webpackJsonp([10],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b235bfc_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__(342);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(339)
}
var normalizeComponent = __webpack_require__(9)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b235bfc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_detail_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b235bfc_node_modules_vue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\goods\\detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b235bfc", Component.options)
  } else {
    hotAPI.reload("data-v-6b235bfc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("2bc87371", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b235bfc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b235bfc\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*有一个name叫ball的transition中的元素如果在被插入的时候我要执行bounce-in*/\n.ball-enter-active[data-v-6b235bfc] {\r\n    animation: bounce-in-data-v-6b235bfc 1s;\n}\n@keyframes bounce-in-data-v-6b235bfc {\n0% {\r\n        /*translate3d流畅一点*/\r\n        transform: translate3d(0, 0, 0);\n}\n50% {\r\n        transform: translate3d(140px, -50px, 0);\n}\n75% {\r\n        transform: translate3d(160px, 0px, 0);\n}\n100% {\r\n        transform: translate3d(140px, 300px, 0);\n}\n}\n.swiper[data-v-6b235bfc] {\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 8px;\r\n    width: 95%;\r\n    border-radius: 15px;\r\n    overflow: hidden;\n}\n.outer-swiper[data-v-6b235bfc],\r\n.product-desc[data-v-6b235bfc],\r\n.product-props[data-v-6b235bfc],\r\n.product-info[data-v-6b235bfc] {\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 3px;\n}\r\n\r\n\r\n/*请ulpadding*/\n.outer-swiper ul[data-v-6b235bfc],\r\n.product-desc ul[data-v-6b235bfc],\r\n.product-props ul[data-v-6b235bfc],\r\n.product-info ul[data-v-6b235bfc] {\r\n    padding: 0;\n}\n.product-desc ul li[data-v-6b235bfc],\r\n.product-props ul li[data-v-6b235bfc],\r\n.product-info ul li[data-v-6b235bfc] {\r\n    list-style: none;\r\n    font-size: 15px;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    margin-top: 8px;\n}\n.product-desc ul >:nth-child(1) span[data-v-6b235bfc] {\r\n    color: blue;\r\n    font-size: 22px;\r\n    font-weight: bold;\n}\n.product-desc ul[data-v-6b235bfc] >:nth-child(1) {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.product-desc ul[data-v-6b235bfc],\r\n.product-info ul[data-v-6b235bfc],\r\n.product-props ul[data-v-6b235bfc] {\r\n    padding-left: 10px;\n}\n.price-li span[data-v-6b235bfc] {\r\n    color: red;\r\n    font-size: 25px;\n}\n.price-li s[data-v-6b235bfc] {\r\n    margin-right: 16px;\n}\r\n\r\n\r\n/*加减*/\n.number-li span[data-v-6b235bfc] {\r\n    display: inline-block;\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\r\n    width: 25px;\n}\r\n\r\n\r\n/*商品参数*/\n.product-props ul[data-v-6b235bfc] >:nth-child(1) {\r\n    text-align: left;\n}\n.product-props ul[data-v-6b235bfc]:not(:nth-child(1)) {\r\n    margin-left: 40px;\n}\n.product-info ul[data-v-6b235bfc] {\r\n    margin-bottom: 70px;\r\n    padding: 0 5;\n}\n.number-li span[data-v-6b235bfc] {\r\n    text-align: center;\n}\n.number-li[data-v-6b235bfc] >:nth-child(2) {\r\n    width: 40px;\n}\n.ball[data-v-6b235bfc] {\r\n    border-radius: 50%;\r\n    background-color: red;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 440px;\r\n    left: 120px;\r\n    display: inline-block;\r\n    z-index: 9999;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _myBus = __webpack_require__(167);

var _myBus2 = _interopRequireDefault(_myBus);

var _prodTools = __webpack_require__(168);

var _prodTools2 = _interopRequireDefault(_prodTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            goodsInfo: {}, //商品详情信息
            isShow: false, //小球是否显示
            goods_imgs: [], //缩略图
            pickNum: 1 //挑选数量
        };
    },
    created: function created() {
        var _this = this;

        //从路由参数获取id
        var id = this.$route.params.goodsId;
        // this.$ajax.get(this.$httpConfig.getinfo + id)
        //     .then(res => {
        //         this.goodsInfo = res.data.message[0];
        //     })


        this.$ajax.all([this.$ajax.get(this.$httpConfig.getthumimages + id), this.$ajax.get(this.$httpConfig.getinfo + id)]).then(this.$ajax.spread(function (imgRes, infoRes) {
            _this.goodsInfo = infoRes.data.message[0];
            _this.goods_imgs = imgRes.data.message;
        })).catch(function (err) {
            console.log('商品详情获取数据失败', err);
        });
    },

    methods: {
        //通过路由显示商品评论
        goGoodsComment: function goGoodsComment() {
            //去到商品评论组件
            //1:去哪里,1.5:要不要参数
            this.$router.push({
                name: 'goodsComment',
                params: {
                    goodsId: this.$route.params.goodsId
                }
            });
        },

        //通过路由显示图文详情-> 复用新闻详情
        goPicInfo: function goPicInfo() {
            this.$router.push({
                name: 'newsDetail',
                params: {
                    newsId: this.$route.params.goodsId
                }
            });
        },
        substract: function substract() {
            if (this.pickNum <= 1) return;
            this.pickNum--;
        },
        add: function add() {
            //不要超出库存数量或者小于1
            if (this.pickNum >= this.goodsInfo.stock_quantity) return;
            this.pickNum++;
        },

        //添加购物车
        addShopcart: function addShopcart() {
            //通信app.vue
            _myBus2.default.$emit('pickNum', this.pickNum);

            //调用工具对象的insertOrUpdate函数
            _prodTools2.default.addOrUpdate({
                id: this.goodsInfo.id,
                num: this.pickNum
            });
            //让小球飞一会，元素被插入
            this.isShow = true;
        },

        //处理小球元素进入的动画完毕以后，隐藏小球
        afterEnter: function afterEnter(el) {
            this.isShow = false; //隐藏小球
        }
    }
};

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav-bar', {
    attrs: {
      "title": "商品详情"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "outer-swiper"
  }, [_c('div', {
    staticClass: "swiper"
  }, [_c('my-swipe', {
    attrs: {
      "imgs": _vm.goods_imgs
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "product-desc"
  }, [_c('ul', [_c('li', [_c('span', {
    staticClass: "product-desc-span",
    domProps: {
      "textContent": _vm._s(_vm.goodsInfo.title)
    }
  })]), _vm._v(" "), _c('li', {
    staticClass: "price-li"
  }, [_vm._v("市场价：\n                "), _c('s', [_vm._v("￥" + _vm._s(_vm.goodsInfo.market_price))]), _vm._v(" 销售价："), _c('span', [_vm._v("￥" + _vm._s(_vm.goodsInfo.sell_price))])]), _vm._v(" "), _c('li', {
    staticClass: "number-li"
  }, [_vm._v("购买数量："), _c('span', {
    on: {
      "click": _vm.substract
    }
  }, [_vm._v("-")]), _c('span', [_vm._v(_vm._s(_vm.pickNum))]), _c('span', {
    on: {
      "click": _vm.add
    }
  }, [_vm._v("+")])]), _vm._v(" "), _c('li', [_c('mt-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("立即购买")]), _vm._v(" "), _c('mt-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.addShopcart
    }
  }, [_vm._v("加入购物车")])], 1)])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "ball"
    },
    on: {
      "after-enter": _vm.afterEnter
    }
  }, [(_vm.isShow) ? _c('div', {
    staticClass: "ball"
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "product-props"
  }, [_c('ul', [_c('li', [_vm._v("商品参数")]), _vm._v(" "), _c('li', [_vm._v("商品货号：" + _vm._s(_vm.goodsInfo.goods_no))]), _vm._v(" "), _c('li', [_vm._v("库存情况：" + _vm._s(_vm.goodsInfo.stock_quantity) + "件")]), _vm._v(" "), _c('li', [_vm._v("上架时间：" + _vm._s(_vm._f("convertTime")(_vm.goodsInfo.add_time)))])])]), _vm._v(" "), _c('div', {
    staticClass: "product-info"
  }, [_c('ul', [_c('li', [_c('mt-button', {
    attrs: {
      "type": "primary",
      "size": "large",
      "plain": ""
    },
    on: {
      "click": _vm.goPicInfo
    }
  }, [_vm._v("图文介绍")])], 1), _vm._v(" "), _c('li', [_c('mt-button', {
    attrs: {
      "type": "danger",
      "size": "large",
      "plain": ""
    },
    on: {
      "click": _vm.goGoodsComment
    }
  }, [_vm._v("商品评论")])], 1)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
/* harmony default export */ __webpack_exports__["a"] = ({ render: render, staticRenderFns: staticRenderFns });
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b235bfc", module.exports)
  }
}

/***/ })

});