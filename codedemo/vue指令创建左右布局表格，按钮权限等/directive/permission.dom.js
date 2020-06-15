import router from '@/router'
// 按钮权限指令
export default {
  // 被绑定元素插入父节点时调用
  inserted(el, binding, vnode) {
      debugger
    const currentMeta = router.currentRoute.meta
    if (currentMeta.buttons&&currentMeta.buttons.lenght!=0) {
      if (currentMeta.buttons[0].code.indexOf('view') >= 0) {//判断此路由元数据有无权限操作还是只能查看
        // 不具备权限删除按钮
        el.parentNode.removeChild(el)
      }
    }
  },
}