import axios from 'axios'


//封装axios
export function request(config) {
    const instance = axios.create({
        timeout: 5000,
        baseURL: 'http://123.207.32.32:8000',
    })

    //拦截器
    // 请求拦截
    instance.interceptors.request.use(config => {
        console.log('aaa'); //拦截config
        console.log(config);
        //1.config中的一些信息不符合服务器的要求，需要处理再发送

        //2.发送网络请求的时候可以显示一些请求的图标

        //3.某些网络请求（登录token）必须携带一些信息
        return config; //还回去
    }, err => {

    });

    //响应拦截
    instance.interceptors.request.use(res => {
        // 取数据data
        return res.data; //返回data就可以了
    }, err => {

    })



    instance(config.base)
        .then(res => {
            console.log(res);
            config.success(res);
        }).catch(err => {
            console.log(err);
            config.faliure(err);
        })
        // return instance(config.base); //返回一个promise

}