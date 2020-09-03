<template>
  <div>
    <helloword a="1" placeholder="使用$attrs"></helloword>
    <myform :configJson="configJson" @getFormData="getFormData" />
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="resetForm">重置</el-button>
  </div>
</template>

<script>
var formInstance;
import { configJson } from "@/views/formfn/config.js";

import myform from "@/views/myform";

import helloword from "@/components/HelloWorld";
export default {
  components: {
    helloword,
    myform,
  },
  data() {
    return {
      configJson,
    };
  },
  mounted() {
    this.getFormInstance();
  },
  methods: {
    getFormData(formData) {
      console.log(formData);
    },

    getFormInstance() {
      this.$children.forEach((i) => {
        if (i.$refs.myForm) {
          formInstance = i.$refs.myForm;
        }
      });
    },
    resetForm() {
      formInstance.resetFields();
    },
    onSubmit() {
      formInstance.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>