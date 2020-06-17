/* 条件筛选添加监控表 */
const notification_npl_total_top_10 = [
    {
      label: "客户名称",
      prop: "companyName",
      minwidth: "180",
    },
    {
      label: "不良总额(万元)",
      prop: "nplTotal",
      width: "180",
    },
    {
      label: "不良余额(万元)",
      prop: "nplBalance",
      width: "180",
    }
  ]
  const notification_npl_balance_top_10 = [
    {
      label: "客户名称",
      prop: "companyName",
      minwidth: "180",
    },
    {
      label: "不良总额(万元)",
      prop: "nplTotal",
      width: "180",
    },
    {
      label: "不良余额(万元)",
      prop: "nplBalance",
      width: "180",
    }
  ]
  const notification_custom_search = [
    {
      label: "客户名称",
      prop: "companyName",
      minwidth: "180",
    },
    {
      label: "不良总额(万元)",
      prop: "nplTotal",
      width: "180",
    },
    {
      label: "不良余额(万元)",
      prop: "nplBalance",
      width: "180",
    }
  ]
  const notification_custom_confirm = [
    {
      label: "客户名称",
      prop: "companyName",
      minwidth: "180",
    },
    {
      label: "不良总额(万元)",
      prop: "nplTotal",
      width: "180",
    },
    {
      label: "不良余额(万元)",
      prop: "nplBalance",
      width: "180",
    }
  ]

  const bad_treatment_asset_list = [
    {
      label: "资产属性",
      prop: "assetPropertyName",
      minwidth: "180",
    },
    {
      label: "资产类型",
      prop: "assetTypeName",
      minwidth: "180",
    },
    {
      label: "资产说明",
      prop: "assetDetail",
      minwidth: "360",
    },
    {
      columnType: 'slot',
      slotName: 'assetOperation', 
      label: "操作",
      width: "180",
    }
  ]

const settingsth={
    notification_npl_total_top_10,
    notification_npl_balance_top_10,
    notification_custom_search,
    notification_custom_confirm,
    bad_treatment_asset_list
}
  export default settingsth