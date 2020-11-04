//入口文件
//导入Vue
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入MUI样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入App
import App from './app.vue'

//导入路由文件
import router from './router'


var vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    render: c => c(App),
    router
})