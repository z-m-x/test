export default (_self, h,item) => {
    return [
      h(
        "el-radio-group",
        {
          props: {
            ...item.props || {},
            value:_self.formData[item.valueKey],
          },
          on: {
            input(value) {
                _self.formData[item.valueKey] = value
            }
          }
        },
        item.items.map(v => {
          return h(
            "el-radio",
            {
              props: {
                label: v.label
              }
            },
            v.name
          );
        })
      )
    ];
  };