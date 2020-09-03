export default (_self, h, item) => {
  return [
    h("el-date-picker", {
      props: {
        ...item.props || {},
        value: _self.formData[item.valueKey],
      },
      on: {
        input(value) {
          _self.formData[item.valueKey] = value;
        },
      },
    }),
  ];
};