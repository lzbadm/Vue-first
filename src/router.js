//路由文件
import VueRouter from 'vue-router'

//导入路由
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photo/photoList.vue'
import photoInfo from './components/photo/photoInfo.vue'
import GoodsList from './components/goods/goodsList.vue'
import GoodsInfo from './components/goods/goodsInfo.vue'
import GoodsDesc from './components/goods/goodsDesc.vue'
import GoodsComment from './components/goods/goodsComment.vue'


const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home, },
        { path: '/home/newsList', component: newsList },
        { path: '/home/newsInfo/:id', component: newsInfo },
        { path: '/home/photoList', component: photoList },
        { path: '/home/photoInfo/:id', component: photoInfo },
        { path: '/home/goodsList', component: GoodsList },
        { path: '/home/goodsInfo/:id', component: GoodsInfo, name: 'goodsinfo' },
        { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
        { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' },
        { path: '/member', component: member },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
    ],
    linkActiveClass: 'mui-active'
})

export default router