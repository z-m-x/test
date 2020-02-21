import axios from 'axios'
export let axioss= axios.create({
        baseURL:'/api',
        timeout:8000
})
/* 请求拦截 */
 axios.interceptors.request.use(
        config => {
                //config是axios配置对象
                //每次发送请求前都会进入此拦截器处理函数，可以在此处统一携带上token，每次请求都会自
                config.headers.common['token'] = localStorage.getItem('token');
                return config
        },
        err => {
                //请求出错的处理函数
                return Promise.reject(err)
        })
/* 响应拦截 */
axios.interceptors.response.use(function (res) {
        //收到响应后，可以先统一处理错误码
        switch (res.data.code) {
                case 10001: alert('非法操作'); break
                case 10002: alert('权限不足');break
        }
        return res;
}, function (err) {
        //响应出错进入的函数
        return Promise.reject(err);
});