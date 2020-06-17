/*填报任务查看详情  */
const detfilldetail = {
    'debtName': '项目名称',
    'occurrenceUnit': '发生单位',
    'caseState': '案件进度',
    "projectHandler": '项目承办人',
    'relatedName': '关联方',
    'principalAmount': '不良发生额',
    'principalAmountRemail': '不良余额',
    'debtDuedate': '债权到期日',
    'interestDesc': '利息说明',
    'feeDesc': '违约金等其他费用说明',
    'penaltyInterestDesc': '罚息说明'
}

/*  诉前   */
const prePleading = {
    filingCaseAmount: "诉讼主张金额",
    surveyExplain: "诉前调查情况",
    customerAndGuarantees: "相对人是否进入失信被执行人名单",
    beforePerservation: "诉前资产保全说明"
}
/*  诉讼 */
const LitigationCases = {
    caseAceptanceTime: "立案时间",
    caseNum: "立案文号",
    initPerservation: "诉中保全财产类型及金额",
    firstDisposalNum: "一审判决文号",
    firstDisposalTime: "一审判决时间",
    firstDisposalResult: "一审判决结果",
    secondJudgementDesc: "二审/再审情况",
    judgmentAmount: "判决支持金额"
}
/*   诉讼风险  */
const litigationRisk_fillIn = {
    lawClear: "各方法律关系是否明确",
    evidenceFully: "我方证据是否充分",
    litigationRisk: "诉讼风险及成因",
    eliminateRisk: "消除风险措施"
}
/*   资产清收信息   */
const AssetRecovery = {
    mortgaged: "司法抵债资产",
    executionMoney: "已执行金额",
}
/*  执行信息      */
const ExecutiveInfo = {
    subCaseNum: "执行立案文号",
    subCaseTime: "执行立案时间",
    executionAmount: "执行申请金额",
    subInfo: "执行情况"
}
/* 工作进展  */
const workProgress = {
    caseDynamicTime: '最近跟进日期',
    monthWork: "当前进展",
    nextStep: "下月计划",
    other: "备注",
}
/*  项目风险详情 */
const riskfilldetail = {
    happenuUnit: "风险发生单位",
    riskDesc: "项目概况及风险描述",
    preventTime: "风险预警时间",
    reportTime: "风险报告时间",
    riskType: "风险类型",
    riskGrade: "风险等级",
    correlationMoney: "涉及金额",
    urgencyDegree: "风险程度",
    happenProbability: "风险概率",
    approvalOpinion: "集团领导批示情况",
    counselorOpinion: "公司法律顾问意见",
    lastDesc: "上一次最新推进情况描述",
    lastTime: "上一次最新推进时间",
    renewal: "本月是否有进度更新",
    evolveDesc: "本月进展情况描述",
    remark: "备注",
}
const fillth = {
    detfilldetail,
    prePleading,
    LitigationCases,
    litigationRisk_fillIn,
    AssetRecovery,
    ExecutiveInfo,
    workProgress,
    riskfilldetail
}
export default fillth