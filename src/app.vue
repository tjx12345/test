<template>
    <div>
        <!-- 头部内容 -->
        <mt-header title="黑马8期信息管理系统" ></mt-header>
        <transition name="fade" mode="out-in">
         <router-view></router-view>
        </transition>
        <!-- 底部开始 -->
        <nav class="mui-bar mui-bar-tab" ref="tabbar">
            <router-link :to="{name:'home'}" class="mui-tab-item " href="#tabbar">
                <span class="mui-icon icon-shouye"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link :to="{name:'member'}" class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon icon-huiyuan"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link :to="{name:'shopcart'}" class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon icon-goods"><span class="mui-badge">{{pickNum}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link :to="{name:'search'}" class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">查找</span>
            </router-link>
        </nav>
        <!-- 底部结束 -->
    </div>
</template>
<script>
import myBus from './components/commons/myBus.js';
import prodTools from './components/commons/prodTools.js';
export default {
    data() {
            return {
                pickNum: prodTools.getProdCount()
            }
        },
        mounted() {

        },
        created() {
            //获取底部的高度
            myBus.$on('getTabbarHeight', fn => {
                fn(this.$refs.tabbar.offsetHeight);
            });
            //操作购物车数量
            myBus.$on('pickNum', num => {
                this.pickNum += num;
            });

        },
        // computed: { //结合vuex
        //     showNum() {
        //         //这样无法显示更新数据，不是this的属性
        //         return prodTools.getProdCount();
        //     }
        // }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>
