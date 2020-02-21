
<template>
  <!--
    实现一个组件 <user-form /> 
    v-modle双向绑定/>
  -->
  <div @touchmove="touch">
    <!-- 等效于 -->
    <!-- <userform :value='namelist' @input='getstate'/> -->
    <user-form v-model="obj" @input="input" ></user-form>
    {{this.obj.activeindex}}
  </div>
</template>

<script>
import UserForm from './user-form'
export default {
  data() {
    return {
      obj: {
        activeindex: 0,
        namelist: [
          { id: 0, name: "张三" },
          { id: 1, name: "里斯" }
        ]
      },
      /* obj封印 */
      obj1: { a: 1, b: 2, c: 3 }
    };
  },
  created() {
    /* obj封印，添加对象双向绑定 */
    //   Object.freeze(this.obj1)
    //  this.$set(this.obj1,'d',11)
  },
  mounted() {
    /* 监听按键按下事件 */
    document.addEventListener("keydown", function(e) {
      e;
    });
  },
  components: { UserForm },
  methods: {
    /* v-modle监听input事件 */
    input(e) {
      console.log(e, this.obj.activeindex);
    },
    /* 监听touchmove事件获取xy坐标的元素 */
    touch(e) {
        document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY)
    }
  }
};
</script>
<style lang="less">
</style>