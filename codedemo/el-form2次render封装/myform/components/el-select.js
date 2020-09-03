export default function (_self, h, item) {
    return [
        h(
            "el-select", {
                on: {
                    change(value) {
                        _self.formData[item.valueKey] = value
                    }
                },
                props: {
                    value:_self.formData[item.valueKey],
                    ...item.props || {}
                },
            },
            item.options.map(v => {
                return h(
                    "el-option", {
                        props: {
                            label: v.label,
                            value: v.value
                        }
                    }
                );
            })
        )
    ];
}