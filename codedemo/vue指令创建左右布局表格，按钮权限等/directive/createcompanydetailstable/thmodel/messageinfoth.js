/* 经营风险 MANAGEMENT ------------------------------------*/
/*经营异常   */
const MANAGEMENTABNORMALS={
  name:'名称',department:'做出决定机关',in_date:'列入时间',out_date:'移出时间',in_reason:'列入原因',out_reason:'移出原因'
}
/* 股权出质  */
const MANAGEMENTEQUITY={
    date:'股权出质登记日期',status:'状态',number:'登记编号',pawnee:'质权人',pawnee_identify_no:'质权人证件号码',pledgor:'出质人',pledgor_identify_no:'出质人证件号码',pledgor_amount:'出质股权数',remark:'备注'
}

/* 股权冻结 */
const MANAGEMENTFREEZE = {
    name:'公司名称',start_date:'冻结开始时间',end_date:'冻结结束时间',status:"状态",amount:'股权数额',type:'类型',number:'执行通知文书号',court:"执行法院"   
}
/* 动产抵押 */
const MANAGEMENTMORTGAGE = {
    name:'名称',date: "登记日期", status :'状态',number:'登记编号',department:'登记机关',amount:'被担保债权数额',type:"被担保债权种类",period:'债务人履行债务的期限',scope:'担保范围',remarks:'备注',debit_type:'被担保债权概况-种类',debit_currency:'被担保债权数额币种',debit_amount:'被担保债权概况-数额',debit_scope:'被担保债权概况-担保的范围',debit_period:'被担保债权概况-债务人履行债务的期限',debit_remarks:'被担保债权概况-备注',close_date:'注销日期',close_reason:'注销原因',mortgagees:"抵押权人",mortgagees_seq_no:'抵押权人序号',mortgagees_name:'抵押权人名称',mortgagees_identify_type:'抵押权人证照/证件类型',mortgagees_identify_no:'抵押权人证照/证件号码',guarantees:'抵押物',guarantees_seq_no:'抵押物序号',guarantees_name:'抵押物名称',guarantees_belong_to:'抵押物所有权归属',guarantees_desc:'抵押物描述',guarantees_remarks:'抵押物备注'
}
/* 抽查检查 */
const MANAGEMENTCHECKUP={
    name:'公司名称',date:"抽查日期",reg_no:'注册号',province:'省份',result:'抽查结果',department:'抽查部门',type:'抽查类型'
}

/* 司法协助  ,start_date:'协助开始时间'*/
const MANAGEMENTJUDICIAL={
    name:'公司名称',number:'执行通知文书号',end_date:'协助结束时间',status:'状态',amount:'股权数额',type:'类型',court:'执行法院' ,start_date:'协助开始时间'
}

/*  司法风险 JUDICIAL  ------------------------------------*/

/* 司法拍卖 */
const JUDICIALAUCTION={
    name:'拍品简称',full_name:'拍品全称',date:"拍卖日期",owner:'拍品所有者',court:'处置法院',start_price:'起拍价(元)',restrict:'权利限制情况',basis:'权利来源',description:'拍品介绍'
}
/*  立案信息 */
const JUDICIALFILING={
    name:'公司名称',start_date:'立案时间',end_date:'结束时间',hearing_date:'开庭时间',case_status:'案件状态',case_no:'案号',agent:'代理人',court:'法庭',assistant:'法官助理',related_companies:'当事人',related_companies_type:'当事人类型',related_companies_role:'当事人角色',related_companies_name:'当事人名称',related_companies_item:'当事人',
  
}

/* 开庭公告  */
const JUDICIALCOURTNOTICE={
    court:'法院',tribunal:'法庭',hearing_date:'开庭日期',case_no:'案号',case_reason:'案由',department:'承办部门',judge:'审判长/主审人',plaintiff:'原告',plaintiff_name:'企业名',defendant:'被告',defendant_name:'企业名'
}
/* 法院公告 */
const JUDICIALNOTICE={
    name:'名称',date:'发布日期',type:'公告类型',court:'法院',content:'内容'
}
/* 裁判文书  */
 const JUDICIALJUDGMENT={
   date:'提交日期',title:'标题',court:'法院',type:'类型',case_cause:'案由',case_no:'案号',judgeresult:'判决结果'
}

/* 被执行人信息 */
const JUDICIALPERSONEXECUTED={
    name:'被执行人姓名',case_date:'立案日期',status:'执行状态',court:'执行法院',amount:'执行金额(元)',case_number:'执行依据文号'
}
/* 失信信息  */
const JUDICIALBREAKFAITH={
    name:'名称',date:"立案时间",publish_date:'发布日期',case_number:'案号',number:'组织机构代码',doc_number:"执行依据文号",oper_name:'法定代表人',court:'执行法院',final_duty :'生效法律文书确定的义务',execution_status:'被执行人履行情况',execution_desc:"失信被执行人行为具体情形",province:'省份',ex_department:'做出执行依据单位'
}
/* 限制高消费 */
const JUDICIALCONSUMPTION={
    name:'被限制消费人姓名',company_name:'关联企业名称',card_num:'身份证号',sex:'性别',filing_date:'立案时间',case_no:'案号',court:'执行法院',execution_applicant:'申请执行人',case_reason:'案由',release_date:'限制令发布日期',content:'原文全文',Source:'pdf 来源 url ',case_reason:'案由'
}
 
/* 其他 OTHER------------------------------------------------- */
/* 非正常户 */
const OTHERABNORMAL={
    certificates_type:'证件种类',ID_num:'证件号',judge_department:'认定单位',judge_area:'认定单位地址',judge_date:'认定日期',reason:'认定原因',state:'纳税人状态',overdue_type:'欠税税务种类',pub_date:'公告日期'
}
/* 行政处罚 */
const OTHERSANCTION={
    number:'决定文书号',illegal_type:'处罚类型',department:'处罚机关',date:'处罚日期',content:'处罚内容'
}
/* 欠税公告 */
const OTHERARREARS={
    pub_date:'发布时间',taxpayer_num:'纳税人识别号',overdue_type:'欠税税种',overdue_amount:'欠税金额(元)',curr_overdue_amount:"当前新发生的欠税额(元)"
}

/* 商标信息 */
const OTHERTRADEMARK={
    image_url:'图形要素',name:'商标名称',reg_number:'商标注册号',type_num:'商标类别',status:'商标状态',agent:'申请人',apply_date:'申请日期',first_pubdate:'初审公告日',reg_pubdate:'注册公告日',period:'专用期限',notices:'商标公告',products:'商品/服务项目',step:'商标动态'
}
/* 专利信息 */
const OTHERPATENT={
    patent_name:'专利名称',type_name:'专利类型',request_num:'申请号',request_date:'申请日期',brief:'详细信息'
}
/* 招投标信息 */
const OTHEROPERATION={
    title:'公告标题',date:'发布时间',area_name:'城市',notice_type:'类型',tender_desc:'招标单位',tender_agent_desc:'代理机构',tender_corpnames:'中标单位',status:'招标状态'
}
/* 新闻动态 */
const OTHERNEWS={
    title:'标题',date:'动态时间',source:'来源',url:'地址'
}
/* 对外投资 */
const OTHERINVESTMENT={
    date:'动态时间',company:'公司名称',desc:'描述'
}
/* 著作权 */
const OTHERCOPYRIGHT={
    entries_name:'作品名称',number:'登记号',type_name:'类别',success_date:'创作完成日期',approval_date:'登记日期',first_date:'首次发布日期'
}
/* 软件著作权 */
const OTHERSOFTWARECOPYRIGHT={
    software_name:'软件名称',number:'登记号',version:'版本号',type_num:'分类号',approval_date:'登记批准日期',short_software_name:'软件简称'
}
/* 重大税收违法 */
const OTHERVIOLATIONS={
    financial_people:'财务负责人姓名、性别、身份证号码',agency_people:'负有直接责任的中介机构',time:'发布时间',pub_department:'所属税务机关',check_department:'检察机关',url:'来源',case_type:'案件性质',truth:'主要违法事实',law_punishment:'相关法律依据及税务处理处罚情况',police:'移送公安情况'
}
/* 招聘信息 */
const OTHERRECRUIT={
    title:"职位名称",date:'发布日期',location:'工作地点',salary:'薪资待遇(元)',education:'学历要求',years:'工作经验',job_type:'工作类型',age:'年龄要求',number:'招聘人数',source:'信息来源',description:'职位描述'
}

/* 终本案件 */
const OTHERFINAL={
    name:'被执行人',card_num:'组织机构代码/身份证号',filing_date:'立案时间',case_no_terminal:'案号',terminate_date:'终本日期',court:'执行法院',amount:'执行标的(元)',fail_perform_amount:'未履行金额(元)'
}
 const messageinfoth = {
    MANAGEMENTABNORMALS,
    MANAGEMENTEQUITY,
    MANAGEMENTFREEZE,
    MANAGEMENTMORTGAGE,
    MANAGEMENTCHECKUP,
    MANAGEMENTJUDICIAL,
    JUDICIALAUCTION,
    JUDICIALFILING,
    JUDICIALCOURTNOTICE,
    JUDICIALNOTICE,
    JUDICIALJUDGMENT,
    JUDICIALPERSONEXECUTED,
    JUDICIALBREAKFAITH,
    JUDICIALCONSUMPTION,
    OTHERABNORMAL,
    OTHERSANCTION,
    OTHERARREARS,
    OTHERTRADEMARK,
    OTHERPATENT,
    OTHEROPERATION,
    OTHERNEWS,
    OTHERINVESTMENT,
    OTHERCOPYRIGHT,
    OTHERSOFTWARECOPYRIGHT,
    OTHERVIOLATIONS,
    OTHERRECRUIT,
    OTHERFINAL
}
export default messageinfoth







