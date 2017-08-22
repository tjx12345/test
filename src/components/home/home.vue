<template>
    <div>
        <div>
            <my-swipe :imgs="home_imgs"></my-swipe>
        </div>
        <div>
            <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link :to="{name:'newsList'}">
                            <span class="mui-icon mui-icon-home"></span>
                            <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link :to="{name:'photoShare'}">
                            <span class="mui-icon mui-icon-email"></span>
                            <div class="mui-media-body">图文分享</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link :to="{name:'goodsList'}">
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">商品展示</div>
                        </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">留言反馈</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">搜索资讯</div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <a href="#">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">联系我们</div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                home_imgs: [], //轮播图数据数组
            }
        },
        //初始化的时候发起请求获取轮播图数据
        created() {
            this.$ajax.get(this.$httpConfig.lunbo)
                .then((res) => {
                    this.home_imgs = res.data.message;
                })
        }
}
</script>
<style scoped>

/*去除九宫格上面margin*/

.mui-table-view.mui-grid-view.mui-grid-9 {
    margin-top: 0px;
    border: none;
    /*background-color: white;*/
}


/* 去除li的颜色*/

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    background-color: white;
    border: none;
}


/*清除ul下面的黑线*/

.mui-table-view.mui-grid-view.mui-grid-9:after {
    height: 0;
}


/*清除九宫格字体图标的样式*/

.mui-icon {
    height: 50px;
    width: 50px;
}

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
}

.mui-icon-home {
    background-image: url('../../static/img/news.png');
    /*环绕显示，让图片自动填充满*/
    background-repeat: round;
}

.mui-icon-email {
    background-image: url('../../static/img/picShare.png');
    background-repeat: round;
}

.mui-icon-chatbubble {
    background-image: url('../../static/img/goodShow.png');
    background-repeat: round;
}

.mui-icon-location {
    background-image: url('../../static/img/feedback.png');
    background-repeat: round;
}

.mui-icon-search {
    background-image: url('../../static/img/search.png');
    background-repeat: round;
}

.mui-icon-phone {
    background-image: url('../../static/img/callme.png');
    background-repeat: round;
}
</style>
