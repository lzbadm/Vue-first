//入口文件
//导入Vue
import Vue from 'vue'

//导入MUI样式文件
import './lib/mui/css/mui.css'

//按需导入
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入App
import App from './app.vue'


var vm = new Vue({
    el: "#app",
    data: {},
    methods: {},
    render: c => c(App)
})