/* 面包屑 */
export default {
    namespaced: true,
    state: {
        crumbsList: [{ name: '当前页面名称', route: '当前页面路由' },{ name: '当前页面名称1', route: '当前页面路由1' }]//面包屑路由数组 {name:'当前页面名称',route:'当前页面路由'}
    },
    mutations: {
        setCrumbsList(state, params) { //push跳转前路由到面包屑数组中
            /* 判断当前路由是否存在，存在表示没有通过面包屑一层一层返回或前进，即把此路由后面所有的元素删掉 */
            let crumbsLists = Object.values(state.crumbsList)
            console.log('面包屑', Object.values(state.crumbsList))
            let flag = false
            let index//记录存在的索引
            crumbsLists.forEach((i, ind) => {
                i.name == params.name ? (flag = true, index = ind) : ''
            });
            if (flag) {
                state.crumbsList.splice(index+1, state.crumbsList.length- (index+1))//+1是从哪里开始删除，只能从当前索引下一个索引开始删除，并且删除数组索引元素个数=数组长度-当前存在的元素位置，元素索引从0开始
            } else {
              state.crumbsList.push(params)
            }
        },
    }
}