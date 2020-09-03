export default (_self, h, item) => {
  return [
    h("el-cascader", {
      props: {
        ...(item.props || {}),
        value: _self.formData[item.valueKey],
      },
      on: {
        change(value) {
          _self.formData[item.valueKey] = value;
        },
      },
      scopedSlots: item.scopedSlots || {},
    }),
  ];
};
