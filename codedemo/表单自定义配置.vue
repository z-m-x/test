/* 
    使用步骤http://docs.form.xiaoyaoji.cn/guide.html#%E4%BB%8B%E7%BB%8D
    表单生成器设计器api http://docs.form.xiaoyaoji.cn/components.html#%E8%A1%A8%E5%8D%95%E7%94%9F%E6%88%90%E5%99%A8-%EF%BC%88generateform%EF%BC%89

 */
<template>
  <div>
    <!-- 表单设计器 -->
    <fm-making-form ref="makingform" style="height: 500px;" preview>
      <template slot="action">
        <!-- 自定义顶部按钮 -->
        <el-button type="text" icon="el-icon-upload" @click="getJSON">保存</el-button>
      </template>
    </fm-making-form>
    <!-- 表单生成器 -->
    <!-- <fm-generate-form :data="jsonData" :remote="remoteFuncs" :value="editData" ref="generateForm"></fm-generate-form> -->
    <fm-generate-form :data="jsonData" ref="generateForm"></fm-generate-form>
    <el-button type="primary" @click="createPage">生成页面</el-button>
  </div>
</template>

<script>
export default {
  name: "GROUP_MANAGE",
  data() {
    return {
      jsonData: {}
    };
  },
  methods: {
    createPage() {
      this.$refs.generateForm.getData();
    },
    getJSON() {
      debugger
      this.jsonData = this.$refs.makingform.getJSON();
    }
  },
  created() {
    this.$nextTick(() => {});
  }
};
</script>

<style lang="scss" scoped>
</style>