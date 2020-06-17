/* 引入公用组件组件 */
import eltable from "./eltable";
function commonComponent (Vue) {//作为函数传入Vue.use，会被作为install函数传入Vue实例
  Vue.component("eltable", eltable);//参数为组件名，引入的组件
}
export default commonComponent;

/* 
下一步：
 main全局表单组件注册 
import commonComponent from './components/common'
//注意必须在构建Vue实例之前就将需要的组件注册进去
Vue.use(commonComponent);
*/