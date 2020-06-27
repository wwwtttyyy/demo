// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//掌控所有的资源
import Vue from 'vue'
import App from './App'
import router from './router'
import ant from 'ant-design-vue' //引用所有的组件？

import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import { request } from "./api/request"
import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/dist/antd.css';


// Vue.component(Button.name, Button);

Vue.use(ant)

Vue.config.productionTip = false

// request({
//     url: '/home/multidata'
// }, res => {
//     console.log('res');
//     console.log(res);
// }, err => {
//     console.log('err');
//     console.log(err);
// })
request({
    base: {
        url: '/home/multidata'
    },
    success: function(res) {
        console.log('res');
    },
    faliure: function(err) {
        console.log('err');
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, //在index.js中
    components: { App },
    template: '<App/>'
})


// axios({
//     url: 'http://123.207.32.32:8000/home/multidata', //默认情况下就是get请求
//     method: get,
//     //专门针对get请求的参数拼接
//     params: {
//         type: 'pop',
//         page: 1
//     }

// }).then(res => {

//     console.log(res);
// })