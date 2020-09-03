export default (_self, h,item) => {
    return [
      h(
        "el-input-number",
        {
          props: {
            ...item.props || {},
            value:_self.formData[item.valueKey],
          },
          on: {
            change(value) {
                _self.formData[item.valueKey] = value
            }
          }
        }
      )
    ];
  };