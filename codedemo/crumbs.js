/* 面包屑 */
export default {
    namespaced: true,
    state: {
        crumbsList: []//面包屑路由数组 {name:'当前页面名称',route:'当前页面路由'}
    },
    mutations: {
        setCrumbsList(state, params) { //push跳转前路由到面包屑数组中
            /* 判断当前路由是否存在，存在表示没有通过面包屑一层一层返回或前进，即把此路由后面所有的元素删掉 */
            let crumbsLists = Object.values(state.crumbsList)
            let deepCloneCrumbs=JSON.stringify(state.crumbsList)//clone用于不删除state，因为slice会改变原数组，每次循环索引有变化
            deepCloneCrumbs=JSON.parse(deepCloneCrumbs)
            let flag = false
            let index//记录存在的索引
            crumbsLists.forEach((i, ind) => {
                console.log(i.name == params.name)
                i.name == params.name ? (flag = true, index = ind) : ''
            });
            if (flag) {
                for (let i = 0; i < state.crumbsList.length; i++) {
                    if(index<i){
                        for (let j = 0; j < deepCloneCrumbs.length; j++) {
                            if((state.crumbsList)[i].name==deepCloneCrumbs[j].name){
                                deepCloneCrumbs.splice(j, 1)
                            }
                        }
                    }
                }
                state.crumbsList=  deepCloneCrumbs//删除之后的数据赋值给state
            } else {
                state.crumbsList.push(params)
            }
        },
    }
}