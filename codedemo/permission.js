import Vue from 'vue'
import router from '@/router.js'
/* main引入import './utils/permission.js' */
Vue.directive('permission', {
  inserted: function(el, binding){//el当前指令插入的dom，binding指令属性的值
    const action = binding.value.action 
    const currentMeta = router.currentRoute.meta
    if(currentMeta&&currentMeta.auth) {
      if(currentMeta.action) {//判断此路由元数据有无自定义属性值
        // 不具备权限
        const type = binding.value.effect
        if(type === 'disabled') {
          el.disabled = true
          el.classList.add('is-disabled')//给元素添加类 classList.add() 和 classList.remove() 
        } else {
          el.parentNode.removeChild(el)
        }
        
      } 
    }
    
  }
})
/* 实现按钮权限逻辑
利用自定义属性可获取到此按钮的做的什么行动行为 binding.value   v-permission='{action:'add',...各种操作权限}'
结合当前页面路由上的mate标注此用户是否有此权限 router.currentRoute.meta
对按钮做出对应的处理（删除，禁用等）
*/