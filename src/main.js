//引入vue/vue-router/axios
import Vue from 'vue';


//引入自己的组件 home,app
import App from './app.vue';

//const Foo = resolve => require(['./Foo.vue'], resolve)
//分块懒加载，在路由匹配的时候才请求发起获取组件对象
const Home = r => require(['./components/home/home.vue'], r);
const Member = r => require(['./components/member/member.vue'], r);
const Search = r => require(['./components/search/search.vue'], r);
const Shopcart = r => require(['./components/shopcart/shopcart.vue'], r);
const NewsList = r => require(['./components/news/list.vue'], r);
const NewsDetail = r => require(['./components/news/newsDetail.vue'], r);
const PhotoShare = r => require(['./components/photo/share.vue'], r);
const PhotoDetail = r => require(['./components/photo/detail.vue'], r);
const GoodsList = r => require(['./components/goods/list.vue'], r);
const GoodsDetail = r => require(['./components/goods/detail.vue'], r);
const GoodsComment = r => require(['./components/goods/goodsComment.vue'], r);

//引入配置对象
import HttpConfig from './httpConfig.js';
Vue.prototype.$httpConfig = HttpConfig;


//引入Mint-ui

//mint-ui 的css
import 'mint-ui/lib/style.css'

import Header from 'mint-ui/lib/header';
import Switch from 'mint-ui/lib/switch';
import Swipe from 'mint-ui/lib/swipe';
import SwipeItem from 'mint-ui/lib/swipe-item';
import Lazyload from 'mint-ui/lib/lazyload';
import Loadmore from 'mint-ui/lib/loadmore';
import Indicator from 'mint-ui/lib/indicator';
import Button from 'mint-ui/lib/button';
Vue.component(Header.name, Header);
Vue.component(Switch.name, Switch);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Button.name, Button);
Vue.use(Lazyload);
console.log('xxx')
// import mint from 'mint-ui';
// Vue.use(mint);

//引入mui的css
import './static/vendor/mui/dist/css/mui.css';

//引入自己的css
import './static/css/global.css';



//引入axios
import Axios from 'axios';

//配置拦截器，加载loadding的图标
//添加一个请求拦截器
Axios.interceptors.request.use(function(config) {
    //在请求发送之前做一些事

    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });


    return config;
}, function(error) {
    //当出现请求错误是做一些事
    return Promise.reject(error); //  相当于是new Promise(结果是失败)
});

//添加一个返回拦截器
Axios.interceptors.response.use(function(response) {

    Indicator.close();

    //对返回的数据进行一些处理
    return response;
}, function(error) {
    //对返回的错误进行一些处理
    return Promise.reject(error);
});


Vue.prototype.$ajax = Axios; //可以使用this.$ajax了

//安装vue-preview
import VuePreView from 'vue-preview';
Vue.use(VuePreView); // 给Vue的原型挂载属性，让this.$preview能拿到对象

//引入qs库
import Qs from 'qs';
Vue.prototype.$qs = Qs;




//vue-router
import VueRouter from 'vue-router';
//安装插件
Vue.use(VueRouter);
//构建路由对象
let router = new VueRouter({
    linkActiveClass: 'mui-active'
});
router.addRoutes([
    //默认路由规则 重定向 redirect
    { name: 'default', path: '/', redirect: { name: 'home' } },
    { name: 'home', path: '/home', component: Home }, //首页
    { name: 'member', path: '/member', component: Member }, //会员
    { name: 'shopcart', path: '/shopcart', component: Shopcart }, //购物车
    { name: 'search', path: '/search', component: Search }, //查找
    { name: 'newsList', path: '/news/list', component: NewsList }, //新闻列表
    { name: 'newsDetail', path: '/news/detial/:newsId', component: NewsDetail }, //新闻详情
    { name: 'photoShare', path: '/photo/share', component: PhotoShare }, //图片分享
    { name: 'photoDetail', path: '/photo/detail', component: PhotoDetail }, //图片详情
    { name: 'goodsList', path: '/goods/list', component: GoodsList }, // 商品列表
    { name: 'goodsDetail', path: '/goods/detail/:goodsId', component: GoodsDetail }, //商品详情
    { name: 'goodsComment', path: '/goods/comment/:goodsId', component: GoodsComment }, //商品评论组件
    { path: '/test', component: Comment }, //测试组件
]);

//设置全局路由钩子（放不放行）
router.beforeEach((to, from, next) => {

    if (to.name === 'newsDetail') {
        if (from.name === 'newsList') {
            console.log('是从新闻过来的');
        } else {
            console.log('是从图文详情过来的');
        }
    }
    next(); //放行

})





//引入moment
import Moment from 'moment';
//声明一个全局的过滤器
Vue.filter('convertTime', function(value) { //{{value|convertTime}}

    return Moment(value).format('YYYY-MM-DD');
})

//注册一个全局的组件
import NavBar from './components/commons/navBar.vue';
Vue.component('nav-bar', NavBar);
//注册评论全局组件
import Comment from './components/commons/comment.vue';
Vue.component('comment', Comment);
//注册轮播图全局组件
import MySwipe from './components/commons/mySwipe.vue';
Vue.component('my-swipe', MySwipe);

//加入进vue的实例中
new Vue({
    el: '#app',
    router,
    render: (c) => c(App), //c(App)就是return
})