export default (_self, h,item) => {
    return [
      h("el-checkbox-group", {
          props: {
              value: _self.formData[item.valueKey],
              ...item.props || {}
          },
          on: {
            input(arr) {
                console.log(arr)
                _self.formData[item.valueKey] = arr;
            }
          }
        },
       
        item.items.map(v => {
          return h("el-checkbox", {
            props: {
              label: v.label
            }
          }, v.name)
        }))
    ];
  };
  