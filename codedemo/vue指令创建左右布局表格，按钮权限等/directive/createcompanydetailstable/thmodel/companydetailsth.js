/* 工商信息表头 */
const businessInformation = { creditNo: '统一社会信用代码', regNo: '注册号', econKind: '公司类型', operName: '法定代表人', registCapi: '注册资本', address: '企业地址', orgNo: '组织机构代码', status: '经营状态', startDate: '成立日期', termStart: '营业开始日期 ', termEnd: '营业结束日期 ', checkDate: '核准日期', belongOrg: '登记机关', scope: '经营范围' }
/* 开庭公告表头 */
const COURTNOTICE =
    { court: "法庭", hearing_date: "开庭日期", case_no: "案号", case_reason: "案由", department: "承办部门", judge: "审判长/主审人", plaintiff: "原告", defendant: "被告" }
/* 立案信息表头 */
const FILING =
    { hearing_date: '开庭日期', case_no: '案号', start_date: '立案时间', case_status: '案件状态', agent: '承办人', assistant: '助理法官', end_date: '结束时间', related_items: '被告/原告' }

/* 法院公告表头 */
const NOTICE = { type: "公告类型 ", content: "内容", date: " 发布日期", court: "法院", person: "当事人" }

/*行贿违法信息表头  */
const LAWSUIT =
    { title: '标题', court: '法院', case_cause: '案由', date: '判决时间', defendants: '被告', url: '链接', judgeresult: '判决结果', sub_amount: '判决金额​ ', pub_date: '发布日期' }

/* 失信信息表头 */
const BREAKFAITH =
    { court: '执行法院 ', oper_name: '法定代表人', doc_number: '执行依据文号', date: '立案时间', case_number: '案号', ex_department: '做出执行依据单位', final_duty: '生效法律文书确定的义务', execution_status: '被执行人履行情况', execution_desc: '失信被执行人行为具体情形', publish_date: '发布日期', number: '组织机构号' }

/* 限制高消费信息表头 */
const CONSUMPTION =
    { name: '限制高消费人', companyName: '限消人企业', sex: '性别', releaseDate: '立案时间', caseNo: '案号', filingDate: '限制令发布日期', court: '执行法院', executionApplicant: '申请执行人', caseReason: '案由', content: '限消正文' }
/* 司法拍卖信息 */
const AUCTION = {
    full_name: '标题',
    object_name: ' 标的物',
    restrict: ' 权利限制情况 ',
    basis: '权利来源',
    court: '处置法院 ',
    start_price: ' 起拍价',
    date: '拍卖日期 ',
    transaction_date: ' 交易时间',
    transaction_price: '交易价格 ',
}
/* 动产抵押 */
const MORTGAGE = {
    number: '登记编号',
    date: '登记日期 ',
    status: '状态',
    department: '登记机关',
    amount: ' 被担保债权数额 ',
    type: '被担保债权种类',
    period: '债务人履行债务的期限',
    scope: '担保范围',
    remarks: '备注 ',
    debit_type: ' 被担保债权概况-种类',
    debit_currency: '被担保债权数额币种',
    debit_amount: '被担保债权概况-数额',
    debit_scope: '被担保债权概况-担保的范围',
    debit_period: '被担保债权概况-债务人履行债务的期限',
    debit_remarks: '被担保债权概况-备注',
    close_date: '注销日期 ',
    close_reason: ' 注销原因',
    mortgagees_seq_no: '抵押权人序号',
    mortgagees_name: '抵押权人名称',
    mortgagees_identify_type: '抵押权人证照/证件类型',
    mortgagees_identify_no: '抵押权人证照/证件号码 ',
    guarantees_seq_no: '抵押物序号',
    guarantees_name: '抵押物名称',
    guarantees_belong_to: '抵押物所有权归属',
    guarantees_remarks: '抵押物备注',

}
/* 股权出质 */
const EQUITY = {
    date: '登记日期', status: '状态', pledgor: '出质人', pledgor_amount: '出质股权数', pledgor_identify_no: '出质人证件号码', number: '登记编号', object_company: '标的方', pawnee: '质权人', pawnee_identify_no: '质权人证件号码',
}
/* 股权冻结 */
const FREEZE = {
    un_freeze_details_execute_court: '执行法院',
    // un_freeze_details_notice_no: '执行通知书文号',
    number: '执行通知书文号',
    detail_assist_item: '执行事项',
    detail_adjudicate_no: '执行裁定书文号',
    detail_assist_name: '被执行人',
    detail_freeze_start_date: '冻结期限自',
    detail_freeze_end_date: '冻结期限至',
    detail_freeze_year_month: '冻结期限',
    detail_public_date: '公示日期',
    amount: "被执行人持有股权、其它投资权益的数额",
    detail_assist_ident_type: '被执行人证件种类',
    pc_freeze_detail_assist_ident_no: '被执行人证件号码',
    lose_efficacy_date: '失效时间',
    lose_efficacy_reason: '失效原因',
}
/* 客户管理个人详情 */
const customerManagementPersonalDetails = {
    customerName: '客户名称',
    customerTypeName: '客户类型',
    badName:'是否不良',
    renewName:'是否更新',
    uniqueId:'证件号码',
    principalAmountRemain:'不良余额（万）'
}
/* 客户管理企业详情 */
const customerManagementBusinessDetails = {
    customerName: '客户名称',
    customerTypeName: '客户类型',
    badName:'是否不良',
    renewName:'是否更新',
    uniqueId:'企业机构代码',
    principalAmountRemain:'不良余额（万）'
}

/* 不良处置*/
/* 基本信息 */
const basicinformation = {
    debtDuedate:'债权到期日',
    projectHandler:'项目承办人',
    customerTypeName: "客户类型",
    customerName: "客户名称",
    relatedName: "关联方",
    liquidatedDamagesDesc:'违约金等其他费用说明',
    interestDesc: "利息说明",
    penaltyInterestDesc: "罚息说明",
    caseStateName: "案件进度",
    statisticsName: "是否计入统计",
    guaranteeEffectiveDuedate: "保证有效到期日",
    limitationOfActionDuadate: "诉讼时效到期日",
}
/* 诉讼风险 */
const litigationRisks = {
    evidenceAdequateName: '我方证据是否充分',
    legalRelationshipName: '各方法律关系是否明确',
    lawsuitRisk: '诉讼风险及成因',
    eliminateRisk: '消除风险措施'
}
const companydetailsth = {
    COURTNOTICE,
    businessInformation,
    FILING,
    NOTICE,
    LAWSUIT,
    BREAKFAITH,
    CONSUMPTION,
    AUCTION,
    MORTGAGE,
    EQUITY,
    FREEZE,
    customerManagementPersonalDetails,
    customerManagementBusinessDetails,
    basicinformation,
    litigationRisks
}
export default companydetailsth