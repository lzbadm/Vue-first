//入口文件
//导入Vue
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

const store = new Vuex.Store({
    state: {
        car: car
    },
    mutations: {
        addToCar(state, goodsinfo) {
            var flag = false
            state.car.some(item => {
                if (item.id === goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }

            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) {
            state.car.some(item => {
                if (item.id === goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFromCar(state, id) {
            state.car.some((item, i) => {
                if (item.id === id) {
                    state.car.splice(i, 1);
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateSelected(state, info) {
            state.car.some(item => {
                if (item.id === info.id) {
                    item.selected = info.selected
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var object = {}
            state.car.forEach(item => {
                object[item.id] = item.count
            })
            return object
        },
        getGoodsSelected(state) {
            var object = {}
            state.car.forEach(item => {
                object[item.id] = item.selected
            })
            return object
        },
        getCountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += (item.count * item.price)
                }
            })
            return o;
        }
    }
})

//请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//导入MUI样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//按需导入
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import Mint from 'mint-ui'
Vue.use(Mint)
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入App
import App from './app.vue'

//导入路由文件
import router from './router'


var vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    render: c => c(App),
    router,
    store
})