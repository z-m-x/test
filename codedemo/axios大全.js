
// 创建实例
import axios from 'axios'
let $axios= axios.create({
        baseURL:'/api',
        timeout:8000,
        // headers: {’X-Custom-Header’: ’foobar’}
})
/* 请求拦截 */
$axios.interceptors.request.use(
        config => {
                //config是axios配置对象
                //每次发送请求前都会进入此拦截器处理函数，可以在此处统一携带上token，每次请求都会自
                config.headers.common['token'] = localStorage.getItem('token');
                debugger

                return config
        },
        err => {
                //请求出错的处理函数
                return Promise.reject(err)
                
        })
/* 响应拦截 */
$axios.interceptors.response.use(function (res) {
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
export default $axios
/* 引入实例 */
import $http from '@/request/request'

/*客户风险动态请求  */
export const getCustomerRiskDynamics=()=>{
    return $http({
        url: '/project/update',
        method: 'post',
        data
      })
}
/* 终止请求 */
$axios.abort()
// get数据请求
/* axios.get('url',{
  params:{
    id:'接口配置参数（相当于url?id=xxxx）'，
  },
}).then(function(res){
  console.log(res);//处理成功的函数 相当于success
}).catch(function(error){
  console.log(error)//错误处理 相当于error
}) */
// post数据发送
/* axios.post('uel',{data:xxx},{
  headers:xxxx,
}).then(function(res){
  console.log(res);//处理成功的函数 相当于success
}).catch(function(error){
  console.log(error)//错误处理 相当于error
}) */
// API 通过相关配置
/* axios({
  method:'delete',
  url:'xxx',
  cache:false,
  params:{id:123},
  headers:xxx,
})
//------------------------------------------//
axios({
  method: ’post’,
  url: ’/user/12345’,
  data: {
    firstName: ’Fred’,
    lastName: ’Flintstone’
  }
}); */
// axios的并发(axios.all,axios.spread)
// let axiosList=[
//   axios.get('url1',{params:xxx,dateType:'JSON'}),
//   axios.get('url2',{params:xxx,dateType:'TEXT'}),
// ]
// axios.all(axiosList).then(axios.spread(function(res1,res2){
//  console.log(res1,res2)//分别是两个请求的返回值
// })