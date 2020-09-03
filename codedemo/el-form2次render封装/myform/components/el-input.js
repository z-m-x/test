export default function (_self, h, item) {
    /* 使用slot插入前后的内容 */
    if('slot' in item ){
        // let res= item.slot.reduce(
        //     (pre,item)=>{
        //        if( item.children){
        //            pre.push(h(item.children))
        //            return pre
        //        }
        //     }
        //     ,[])
        //     console.log(res)
    }
        return [
            h('el-input', {
                props: {
                    value: _self.formData[item.valueKey],
                    // 针对 props 进行解构
                    ...item.props || {}
                },
                attrs: {
                    value: _self.formData[item.valueKey],
                    // 针对 attrs 进行解构
                    ...item.props || {}
                },
                on: {
                    input: function (value) {
                        _self.formData[item.valueKey] = value
                    }
                }
            })
        ];
    }
