/* 配置跨域代理 */
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://22.163.72.64', //对应服务器地址
                changeOrigin: true, //允许跨域
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
/* 在企业级封装时
axios.get("api/test/login")
.then((res) => {
console.log(res)
})
相当于
axios.get("http://22.163.72.64/test/login")
.then((res) => {
console.log(res)
})
*/