/* 查看企业往来企业 */
const AFFILIATED = [
  {
    label: "关联企业名称",
    prop: "name",
    minwidth: "180",
  },
  {
    label: "发生单位",
    prop: "tenantName",
    minwidth: "180",
  },
  {
    label: "不良发生额(万元)",
    prop: "principalAmount",
    width: "180",
  },
  {
    label: "不良余额(万元)",
    prop: "principalAmountRemain",
    width: "180",
  },
  {
    label: "处置类型",
    prop: "disposalTypeName",
    width: "180",
  },
  {
    label: "案件状态",
    prop: "caseStateName",
    width: "180",
  },
  {
    label: "关联关系",
    prop: "title",
    minwidth: "180",
  },
  {
    label: "高管名称",
    prop: "employeesName",
    minwidth: "180",
  }
]
/* 股东关系 */
const SHAREHOLDER = [
  {
    label: "关联企业名称",
    prop: "name",
    minwidth: "180",
  },
  {
    label: "发生单位",
    prop: "tenantName",
    minwidth: "180",
  },
  {
    label: "不良发生额(万元)",
    prop: "principalAmount",
    width: "180",
  },
  {
    label: "不良余额(万元)",
    prop: "principalAmountRemain",
    width: "180",
  },
  {
    label: "处置类型",
    prop: "disposalTypeName",
    width: "180",
  },
  {
    label: "案件状态",
    prop: "caseStateName",
    width: "180",
  },
  {
    label: "关联关系",
    prop: "title",
    minwidth: "180",
  },
  {
    label: "高管名称",
    prop: "employeesName",
    minwidth: "180",
  }
]
/* 开庭公告 */
const COURTNOTICE = [
  {
    label: "开庭日期",
    prop: "hearing_date",
    width: "180",
  },
  {
    label: "案由",
    prop: "case_reason",
    minwidth: "180",
  },
  {
    label: "原告",
    prop: "plaintiff",
    minwidth: "400",
  },
  {
    label: "被告",
    prop: "defendant",
    minwidth: "800",
  }
]
/* 裁判文书 */
const JUDGMENT = [
  {
    label: "类型",
    prop: "type",
    minwidth: "100",
  },
  {
    label: "标题",
    prop: "title",
    minwidth: "500",
  },
  {
    label: "提交日期",
    prop: "date",
    minwidth: "150",
  },
  {
    label: "案号",
    prop: "case_no",
    minwidth: "220",
  },
  {
    label: "案由",
    prop: "case_cause",
    minwidth: "150",
  },
]
/* 立案信息 */
const FILING = [
  {
    label: "开庭日期",
    prop: "hearing_date",
    width: "180",
  },
  {
    label: "案号",
    prop: "case_no",
    width: "220",
  },
  {
    label: "立案时间",
    prop: "start_date",
    width: "200",
  },
  {
    label: "案件状态",
    prop: "case_status",
    width: "200",
  },
  {
    label: "被告",
    columnType: 'slot',
    slotName: 'accused',
    minwidth: "200",
  },
  {
    label: "原告",
    columnType: 'slot',
    slotName: 'plaintiff',
    minwidth: "200",
  },
]
/* 法院公告 */
const NOTICE = [
  {
    label: "发布日期",
    prop: "date",
    width: "180",
  },
  {
    label: "公告类型",
    prop: "type",
    width: "220",
  },
  {
    label: "公告内容",
    prop: "content",
    minwidth: "400",
  }
]
/* 行贿违法信息 */
const LAWSUIT = [
  {
    label: "标题",
    prop: "title",
    minwidth: "280",
  },
  {
    label: "法院",
    prop: "court",
    width: "220",
  },
  {
    label: "案由",
    prop: "case_cause",
    width: "200",
  },
  {
    label: "判决时间",
    prop: "date",
    width: "180",
  },
  {
    label: "被告",
    columnType: 'slot',
    slotName: 'defendants',
    minwidth: "400",
  }
]
/* 被执行信息 */
const EXECUTED = [
  {
    label: "执行依据文号",
    prop: "case_number",
    minwidth: "220",
  },
  {
    label: "执行状态",
    minwidth: "220",
    columnType: 'slot',
    slotName: 'executingState',
  },
  {
    label: "执行法院",
    prop: "court",
    minwidth: "400",
  },
  {
    label: "立案日期",
    prop: "case_date",
    width: "300",
  },
  {
    label: "执行金额",
    prop: "amount",
    minwidth: "300",
  }
]
/* 失信信息 */
const BREAKFAITH = [
  {
    label: "执行法院",
    prop: "court",
    minwidth: "200",
  },
  {
    label: "执行依据文号",
    prop: "doc_number",
    minwidth: "220",
  },
  {
    label: "立案时间",
    prop: "date",
    width: "200",
  },
  {
    label: "案号",
    prop: "case_number",
    minwidth: "300",
  },
  {
    label: "被执行人履行情况",
    prop: "execution_status",
    minwidth: "200",
  },
]
/* 限制高消费信息 */
const CONSUMPTION = [
  {
    label: "限制令发布日期",
    prop: "filingDate",
    width: "180",
  },
  {
    label: "案号",
    prop: "caseNo",
    width: "220",
  },
  {
    label: "限制高消费人",
    prop: "name",
    minwidth: "100",
  },
  {
    label: "限消人企业",
    prop: "companyName",
    minwidth: "300",
  },
  {
    label: "执行法院",
    prop: "court",
    minwidth: "200",
  },
  {
    label: "申请执行人",
    prop: "executionApplicant",
    minwidth: "200",
  },
]
/* 司法拍卖信息 */
const AUCTION = [
  {
    label: "标题",
    prop: "full_name",
    minwidth: "180",
  },
  {
    label: "处置法院",
    prop: "court",
    minwidth: "220",
  },
  {
    label: "拍卖日期",
    prop: "date",
    minwidth: "400",
  },
  {
    label: "起拍价",
    prop: "start_price",
    width: "300",
  },
]
/* 动产抵押 */
const MORTGAGE = [
  {
    label: "登记编号",
    prop: "number",
    minwidth: "180",
  },
  {
    label: "登记日期",
    prop: "date",
    minwidth: "180",
  },
  {
    label: "登记机关",
    prop: "department",
    minwidth: "400",
  },
  {
    label: "被担保债权数额",
    prop: "amount",
    minwidth: "200",
  },
]
/* 司法协助 */
const JUDICIAL = [
  {
    label: "协助公示通知书文号",
    prop: "number",
    minwidth: "300",
  },
  {
    label: "类型",
    prop: "type",
    width: "220",
  },
  {
    label: "股权数额",
    prop: "amount",
    width: "400",
  },
  {
    label: "被执行人",
    prop: "be_executed_person",
    minwidth: "300",
  },
]
/* 股权出质 */
const EQUITY = [
  {
    label: "股权出质登记日期",
    prop: "date",
    width: "180",
  },
  {
    label: "登记编号",
    prop: "number",
    width: "220",
  },
  {
    label: "出质人",
    prop: "pledgor",
    minwidth: "400",
  },
  {
    label: "质权人",
    prop: "pawnee",
    minwidth: "400",
  },
  {
    label: "状态",
    prop: "status",
    width: "100",
  },
]
/* 股权冻结 */
const FREEZE = [
  {
    label: "被执行人",
    prop: "be_executed_person",
    minwidth: "300",
  },
  {
    label: "股权数额",
    prop: "amount",
    width: "200",
  },
  {
    columnType: 'slot',
    slotName: 'notice_no',
    label: "执行通知书文号",
    width: "200",
  },
  {
    columnType: 'slot',
    slotName: 'freeze_date',
    label: "起止日期",
    width: "400",
  },
  {
    label: "类型",
    prop: "type",
    width: "200",
  },
  {
    label: "状态",
    prop: "status",
    width: "200",
  }
]
/* 经营异常 */
const ABNORMALS = [
  {
    label: "企业名称",
    prop: "name",
    minwidth: "200",
  },
  {
    label: "注册号",
    prop: "regNo",
    width: "200",
  },
  {
    label: "省份",
    prop: "province",
    width: "80",
  },
  {
    label: "列入原因",
    prop: "inReason",
    minwidth: "100",
  },
  {
    label: "列入时间",
    prop: "inDate",
    width: "200",
  },
  {
    label: "移出原因",
    prop: "outReason",
    minwidth: "200",
  },
  {
    label: "移出时间",
    prop: "outDate",
    width: "200",
  },
  {
    label: "做出决定机关",
    prop: "department",
    minwidth: "200",
  },
]
/* 严重违法 */
const SERIOUSILLEGAL = [
  {
    label: "列入严重违法失信企业名单（黑名单）原因",
    prop: "in_reason",
    minwidth: "200",
  },
  {
    label: "列入日期",
    prop: "in_date",
    width: "200",
  },
  {
    label: "作出决定机关（列入）",
    prop: "in_department",
    minwidth: "200",
  },
  {
    label: "移出严重违法失信企业名单（黑名单）原因 ",
    prop: "out_reason",
    minwidth: "200",
  },
  {
    label: "移出日期",
    prop: "out_date",
    width: "200",
  },
  {
    label: "作出决定机关（移出）",
    prop: "out_department",
    minwidth: "200",
  },
]
/* 工商清算组人员信息 */
const CLEARCOUNTINFO = [
  {
    label: "清算组负责人",
    prop: "leader",
    minwidth: "200",
  },
  {
    label: "清算组负责人",
    minwidth: "900",
    columnType: 'slot',
    slotName: 'employees',
  },
]
/*抽查检查信息  */
const CHECKUP = [
  {
    label: "检查抽查编号",
    prop: "id",
    minwidth: "300",
  },
  {
    label: "检查实施机关",
    prop: "department",
    minwidth: "220",
  },
  {
    label: "类型",
    prop: "type",
    minwidth: "200",
  },
  {
    label: "日期",
    prop: "date",
    minwidth: "200",
  },
  {
    label: "结果",
    prop: "result",
    minwidth: "200",
  },
]

/*客户管理 */
const customermanagement = [
  {
    prop: 'customerName',
    label: "客户名称",
    minwidth: "180",
  },
  {
    label: "客户类型",
    prop: "customerTypeName",
    width: "180",
  },
  {
    label: "是否不良",
    prop: "badName",
    minwidth: "180",
  },
  {
    label: "创建时间",
    prop: "createTime",
    minwidth: "180",
  },
  {
    label: "是否更新",
    prop: "renewName",
    minwidth: "180",
  },
  {
    label: "更新时间",
    prop: "updateTime",
    minwidth: "180",
  },
  {
    columnType: 'slot',
    slotName: 'customermanagementDR',
    label: "操作",
    width: "180",
  },
]

/* 不良处置*/

/* 工作动态 */
const workTrend = [
  {
    label: "跟进日期",
    prop: "followTime",
    width: "180",
  },
  {
    label: "本月跟进内容",
    prop: "followDetails",
    minwidth: "180",
  },
  {
    label: "下月计划",
    prop: "nextStagePlan",
    minwidth: "180",
  },
  {
    columnType: 'slot',
    slotName: 'workTrendDR',
    label: "操作",
    width: "180",
  },
]
/* 发生额 */
const accrual = [
  {
    label: "本金/租金（万）",
    prop: "principalAmount",
    minwidth: "180",
  },
  {
    label: "代垫费用（万）",
    prop: "advanceAmount",
    minwidth: "180",
  },
  {
    label: "违约金（万）",
    prop: "liquidatedDamagesAmount",
    minwidth: "180",
  },
  {
    prop: 'nominalPrice',
    label: "名义货价（万）",
    minwidth: "180",
  },
  {
    prop: 'cashDepositAmount',
    label: "保证金（万）",
    minwidth: "180",
  },
  {
    prop: 'disposalTime',
    label: "债权到期日",
    minwidth: "180",
  },
  {
    columnType: 'slot',
    slotName: 'accrualDR',
    label: "操作",
    width: "180",
  },
]
/* 清收额 */
const collectForehead = [
  {
    label: "回款方式",
    prop: "progressTypeName",
    minwidth: "180",
  },
  {
    label: "本金金额（万）",
    prop: "principalAmount",
    minwidth: "180",
  },
  {
    label: "违约金（万）",
    prop: "liquidatedDamagesAmount",
    minwidth: "180",
  },
  {
    prop: 'interestAmount',
    label: "利息（万）",
    minwidth: "180",
  },
  {
    prop: 'disposalTime',
    label: "回款日期",
    minwidth: "180",
  },
  {
    columnType: 'slot',
    slotName: 'collectForeheadDR',
    label: "操作",
    width: "180",
  },
]
/* 处置进度管理*/
const followProgress = [
{
    label: "进度名称",
    prop: "progressTypeName",
    minwidth: "180",
  },
   {
    label: "受理日期",
    prop: "disposalTime",
    minwidth: "180",
  },
  {
    label: "创建时间",
    prop: "createTime",
    minwidth: "180",
  },
  {
    columnType: 'slot',
    slotName: 'followProgresslDR',
    label: "操作",
    width: "180",
  },
]
/* 担保管理 */
const securityManagement = [
  {
    label: "担保类型",
    prop: "guaranteeTypeName",
    minwidth: "180",
  }, {
    label: "主体类型",
    prop: "subjectTypeName",
    minwidth: "180",
  }, {
    label: "身份证号/企业唯一识别号",
    prop: "idnOrCompany",
    minwidth: "180",
  },
  {
    label: "联系方式",
    prop: "contactWay",
    minwidth: "180",
  },
  {
    label: "主体名称",
    prop: "subjectName",
    minwidth: "180",
  },
  {
    label: "是否纳入失信被执行人名单",
    prop: "executeeName",
    minwidth: "180",
  },
  {
    label: "是否纳入限高名单",
    prop: "limitHeightName",
    minwidth: "180",
  },
  {
    columnType: 'slot',
    slotName: 'securityManagementDR',
    label: "操作",
    width: "180",
  },
]
const companydetailsth = {
  AFFILIATED,
  SHAREHOLDER,
  COURTNOTICE,
  JUDGMENT,
  FILING,
  NOTICE,
  LAWSUIT,
  EXECUTED,
  BREAKFAITH,
  CONSUMPTION,
  AUCTION,
  MORTGAGE,
  JUDICIAL,
  EQUITY,
  FREEZE,
  ABNORMALS,
  SERIOUSILLEGAL,
  CLEARCOUNTINFO,
  CHECKUP,
  customermanagement,
  workTrend,
  followProgress,
  accrual,
  collectForehead,
  securityManagement
}
export default companydetailsth