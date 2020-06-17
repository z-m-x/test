// 集团台账查看-基本情况
const basicInformation = {
    'debtName': '项目名称',
    'occurrenceUnit': '发生单位',
    'caseStateText': '案件进度',
    "projectHandler": '项目承办人',
    'relatedName': '关联方',
    'principalAmount': '不良发生额',
    'principalAmountRemail': '不良余额',
    'debtDuedate': '债权到期日',
    'interestDesc': '利息说明',
    'feeDesc': '违约金等其他费用说明',
    'penaltyInterestDesc': '罚息说明'
}

// 集团台账查看-诉前情况

const preLitigationSituation = {
    filingCaseAmount: "诉讼主张金额",
    surveyExplain: "诉前调查情况",
    customerAndGuaranteesText: "相对人是否进入失信被执行人名单",
    beforePerservation: "诉前资产保全说明"
}



// 集团台账查看-诉讼情况

const litigation = {
    caseAceptanceTime: "立案时间",
    caseNum: "立案文号",
    initPerservation: "诉中保全财产类型及金额",
    firstDisposalNum: "一审判决文号",
    firstDisposalTime: "一审判决时间",
    firstDisposalResult: "一审判决结果",
    secondJudgementDesc: "二审/再审情况",
    judgmentAmount: "判决支持金额"

}


// 集团台账查看-执行情况

const implementation = {
    subCaseNum: "执行立案文号",
    subCaseTime: "执行立案时间",
    executionAmount: "执行申请金额",
    subInfo: "执行情况"
}


//集团台账查看-资产清收信息

const CollectionInformation = {
    mortgaged: "司法抵债资产",
    executionMoney: "已执行金额",
}

//集团台账查看-其他
const other = {
    caseDynamicTime: "最新跟进日期",
    other: "备注"
}


//集团台账查看-工作进展
const groupWorkProgress = {
    caseDynamicTime: '最近跟进日期',
    monthWork: "当前进展",
    nextStep: "下月计划",
    other: "备注",
}


//集团台账查看-诉讼风险
const litigationRisk = {
    lawClearText: "各方法律关系是否明确",
    evidenceFullyText: "我方证据是否充分",
    litigationRisk: "诉讼风险及成因",
    eliminateRisk: "消除风险措施"
}


const standing = {
    basicInformation,
    preLitigationSituation,
    litigation,
    implementation,
    CollectionInformation,
    other,
    groupWorkProgress,
    litigationRisk,
}


export default standing