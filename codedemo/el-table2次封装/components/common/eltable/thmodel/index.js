import companydetailsth from './companydetailsth' //企业详情
import settingsth from './settingsth'//设置
/* 列配置（表头配置） */
const initTable = [
  {
    label: '日期',//对应lable
    prop: 'date',//对应prop
    width: "180",
  },
  {
    label: '姓名',//对应lable
    prop: 'name',//对应prop
    width: "180",

  },
  {
    label: '地址',//对应lable
    prop: 'address'//对应prop
  },
  {
    label: '详情',//对应lable
    prop: 'name',//对应prop
    width: "180",
    columnType: 'slot',//是否使用插槽显示内容
    slotName: 'details'//插槽名称
  }
]

/* 导出 */
const eltableConfig = {
  initTable,
  ...companydetailsth,
  ...settingsth,
}

export default eltableConfig
