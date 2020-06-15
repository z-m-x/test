// 引入指令模块
import permissionbutton from './permission.button'
import permissiondom from './permission.dom'
import createtable from './createtable'
import createcompanydetailstable from './createcompanydetailstable/index'
/* 按需导出指令模块 */
export {
    permissionbutton,
    permissiondom,
    createtable,
    createcompanydetailstable
}

/* 最后在main中注册全局指令 */
/* 指令注册 */
import * as directives from './libs/directive'
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))