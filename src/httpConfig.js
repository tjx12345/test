const remoteHost = 'http://182.254.146.100:8899';
const config = {
    lunbo: remoteHost + '/api/getlunbo', //获取轮播图
    newslist: remoteHost + '/api/getnewslist', //获取新闻列表数据
    newsdetail: remoteHost + '/api/getnew/', //将id拼接上以后获取新闻详情数据
    category: remoteHost + '/api/getimgcategory', //获取分类数据
    getimgs: remoteHost + '/api/getimages/', //将id拼接上以后获取图片数据
    getimageInfo: remoteHost + '/api/getimageInfo/', //将id拼接上以后获取图片详情
    getthumimages: remoteHost + '/api/getthumimages/', //将id拼接上以后获取图片缩略图数组
    getcomments: remoteHost + '/api/getcomments/', //此处拼接aid
    postcomment: remoteHost + '/api/postcomment/', //此处拼接cid
    getgoods: remoteHost + '/api/getgoods?pageindex=', //此处拼接上页码
    getinfo: remoteHost + '/api/goods/getinfo/', //此处需要拼接上商品id
    getshopcart: remoteHost + '/api/goods/getshopcarlist/', //此处拼接id,id
}

//需要让外部拿到
module.exports = config;
