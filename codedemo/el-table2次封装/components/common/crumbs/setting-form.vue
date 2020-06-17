<template>
  <el-form :rules="rules" ref="form" :model="formData" size="medium" label-width="100px">
    <el-row v-for="(data,index) in data" :key="index" type="flex" style="flex-wrap:wrap">
      <el-col v-if="data.label" :span="24" style="margin-bottom:20px;">
        <span style="font-size:25px;color:blue;font-weight:900">丨</span>
        {{data.label}}
      </el-col>
      <el-col v-for="(e,index) in data.child" :key="index" :span="e.span">
        <el-form-item
          :label="e.label"
          :prop="e.key"
          :label-width="e.labelWidth? e.labelWidth:'40%'"
        >
          <!-- 输入框 / 密码框/ 备注框 -->
          <el-input
            v-if="e.type === 'textarea' || e.type === 'input'|| e.type==='number'"
            :max="e.max"
            :min="e.min"
            @change="a"
            :type="e.type"
            v-model="formData[e.key]"
            :placeholder="e.placeholder"
            :disabled="e.disabled"
            :clearable="e.clearable"
            :style="{width: e.contentWidth ? e.contentWidth: '100%'}"
          ></el-input>
          <!-- 下拉框 -->
          <el-select
            v-model="formData[e.key]"
            v-if="e.type === 'select'"
            :placeholder="e.placeholder"
            :disabled="e.disabled"
            :clearable="e.clearable"
            :style="{width: e.contentWidth ? e.contentWidth: '100%'}"
          >
            <el-option
              v-for="item in e.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <!-- 时间/日期选择器 -->
          <el-date-picker
            :value-format="e.format?e.format:'yyyy-MM-dd'"
            v-if="e.type === 'date' ||e.type === 'year'||e.type === 'daterange' "
            v-model="formData[e.key]"
            :type="e.type"
            :placeholder="e.placeholder"
            :start-placeholder="e.startPlaeholder"
            :end-placeholder="e.endPlaeholder"
            :disabled="e.disabled"
            :clearable="e.clearable"
            :style="{width: e.contentWidth ? e.contentWidth: '100%'}"
          ></el-date-picker>

          <div v-if="e.type === 'yearAndMonth'">
            <el-date-picker
              v-model="formData[e.key]"
              type="year"
              value-format="yyyy"
              style="margin-right:6%;"
              placeholder="选择年"
              :clearable="e.clearable"
              :style="{width:'45%'}"
            ></el-date-picker>
            <el-select
              v-model="formData[e.secondKey]"
              placeholder="请选择月份"
              :clearable="e.clearable"
              :style="{width:'45%'}"
            >
              <el-option
                v-for="item in e.option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <!-- radio选择框 -->
          <div class="radio_style">
            <el-radio
              v-if="e.type === 'radio'"
              v-for="(item,index) in e.options"
              :key="index"
              v-model="formData[e.key]"
              :label="item.value"
              :disabled="e.disabled"
              :clearable="e.clearable"
              :style="{width: '50%'}"
            >{{item.label}}</el-radio>
          </div>
          <!-- 区间输入框 -->
          <div class="scetion_input_style" v-if="e.type === 'sectionInput'">
            <el-input
              :disabled="e.disabled"
              :style="{width: e.contentWidth ? e.contentWidth: '100%'}"
              v-model="formData[e.key]"
              @change="a"
              :clearable="e.clearable"
              type="number"
            ></el-input>&nbsp;至&nbsp;
            <el-input
              :disabled="e.disabled"
              :style="{width: e.contentWidth ? e.contentWidth: '100%'}"
              v-model="formData[e.secondKey]"
              type="number"
              :clearable="e.clearable"
            ></el-input>&nbsp;万
          </div>

          <div v-if="e.type === 'searhReset'" class="button_style">
            <el-button @click="resetForm" size="mini">重置</el-button>
            <el-button @click="searchBtn" size="mini" type="primary" style="margin-right:10px">查询</el-button>
          </div>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "page1",
  props: ["data", "rules", "formData"],
  data() {
    return {};
  },
  methods: {
    a() {
      // console.log(this.formData);
    },
    submitForm(form) {
      this.$refs["form"].validate(valid => {
        if (valid) {
          // return this.$refs['form'].formData;
          console.log(this.formData);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置
    resetForm(form) {
      this.$emit("callBackFormData", {});
    },
    searchBtn() {
      this.$emit("callBackFormData", this.formData);
    }
    // showInputAddress(keyName) {
    //   if (!this.formData[keyName][0] || !this.formData[keyName][1]) {
    //     console.log(123)
    //     this.$refs[this.formName].validateField(keyName,(keyNameError)=>{
    //       console.log(33333)
    //     });
    //   }
    // }
  }
};
</script>

<style scope>
.radio_style {
  display: flex;
  /* margin-top: 11px; */
}
.scetion_input_style {
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
  padding: 0;
}
.button_style {
  display: flex;
  flex-direction: row-reverse;
  margin-top: -10px;
}
</style>
