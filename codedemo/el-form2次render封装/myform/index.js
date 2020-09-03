const ctx = require.context("./components", false, /\.js$/);
/* 引入所有render方法 */
const renderModules = {};
ctx.keys().forEach((item) => {
  renderModules[item.replace(/^\.\/(.*)\.\w+$/, "$1")] = ctx(item).default;
});
export default {
  name: "formfn",
  components: {},
  props: {
    // 传入配置
    configJson: {
      required: true,
    },
  },
  render(h) {
    let _self = this;
    let childs = this.configJson.map((item) => {
      console.log(item.span)
      // el-form-item
      let formItem = h(
        "el-form-item",
        {
          props: {
            ...item["form-item"],
          },
          attrs: {},
        },
        renderModules[item.type](_self, h, item)
      );
      // 栅格布局包裹 el-col
      let elcol = h(
        "el-col",
        {
          props: {
            span:item.span|| 6,
          },
        },
        [formItem]
      );

      return elcol;
    });
    // 栅格布局包裹 el-row
    let elrow = h(
      "el-row",
      {
        props: {
          gutter: 20,
        },
      },
      [childs]
    );
    // el-form-form
    let res = h(
      "el-form",
      {
        props: {
          model: _self.formData,
          inline: true,
          "label-position":"right",//对齐方式
          'label-width':"100px",//label宽度
        },
          ref:"myForm",
      },
      [elrow]
    );

    return res;
  },
  created() {
    /* 如果没有传入data */
    this.$attrs.formData ||
      this.configJson.forEach((item) => {
        if (item.type == "el-checkbox" || item.type == "el-cascader") {
          this.$set(this.formData, item.valueKey, []);
        } else if (item.type == "el-input-number") {
          this.$set(this.formData, item.valueKey, 0);
        } else {
          this.$set(this.formData, item.valueKey, "");
        }
      });
  },
  mounted() {
    console.log(this)
  },
  data() {
    return {
      formData: {},
    };
  },
  watch: {
    formData: {
      handler(v) {
        this.$emit("getFormData", v);
      },
      deep: true,
    },
  },
};
