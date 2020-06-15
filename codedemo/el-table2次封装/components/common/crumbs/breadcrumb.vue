<template>
  <div>
    <el-breadcrumb    >
      <el-breadcrumb-item
        v-for="item in breadList"
        :to="{path:item.path}"
        :key="item.name"
      >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  /* 面包屑 */
  name: "breadcrumb",
  props: {
    currentPageName: {
      required: true,
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      breadList: []
    };
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      this.breadList = this.$route.matched;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>