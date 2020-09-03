export default (_self, h, item) => {

/* 触发的钩子*/
// 成功触发

  return [
    h("el-upload", {
      props: {
        ...item.props || {},
        value: _self.formData[item.valueKey],
      },
      on: {
        change(value) {
          _self.formData[item.valueKey] = value;
        },
     
      },
    }),
  ];
};

