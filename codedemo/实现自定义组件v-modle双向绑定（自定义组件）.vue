<template>
  <div>
    <ul>
      <li
        @click="changeactive(item.id)"
        v-for="item in propsobj.namelist"
        :key="item.id"
        :class="{active:propsobj.activeindex===item.id}"
      >{{item.name}}</li>
    </ul>
  </div>
</template>>

<script>
export default {
    /* 接受父组件传入的value属性 */
  props: ["value"],
  data() {
    return {
      propsobj: this.value
    };
  },
  methods: {
    changeactive(ID) {
      this.propsobj.activeindex = ID;
      /* 父组件v-modle事件监听input事件，实现双向绑定 */
      this.$emit("input", this.propsobj);
    }
  }
};
</script>
<style lang="less">
.active {
  background: red;
  color: #fff;
}
</style>