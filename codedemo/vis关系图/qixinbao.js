const delSvg =
    "path://M512 1024C229.238154 1024 0 794.761846 0 512S229.238154 0 512 0s512 229.238154 512 512-229.238154 512-512 512z m236.307692-551.384615H275.692308a39.384615 39.384615 0 1 0 0 78.76923h472.615384a39.384615 39.384615 0 0 0 0-78.76923z";
const addSvg =
    "path://M512 0C228.266667 0 0 228.266667 0 512s228.266667 512 512 512 512-228.266667 512-512S795.733333 0 512 0z m256 533.333333H533.333333v234.666667c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333333-21.333333V533.333333H256c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333h234.666667V256c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333333 21.333333v234.666667h234.666667c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333333z";
/* 企业搜索，启信宝工商信息、股东高管、关联企业 */
import {
    businessQuery,
    affiliatedQuery,
    shareholderQuery,
    queryCompanyAndDebt
} from "@/api/revlettertreasure/qixinbao";

export default {
    namespaced: true,
    state: {
        companyInformation: {}, //企业基本信息
        businessDatas: {}, //工商信息
        affiliatedDatas: [], //关联企业
        chartAffiliatedDatas: {}, //穿透图所需格式的关联企业
        shareholderDatas: [], //股东高管
        chartShareholderDatas: {}, //关系图所需格式的股东高管

        AFFILIATEDtotal: 0, //关联总条数
        AFFILIATEDtableInfo: { //关联企业分页
            pageNumber: 1,
            pageSize: 10
        },
        SHAREHOLDERtotal: 0, // 股东高管总条数
        SHAREHOLDERtableInfo: { // 股东高管分页
            pageNumber: 1,
            pageSize: 10
        },

        searchCondition: {}, //表格搜索条件 组件中通过 'eltablestore/setSearchCondition'修改此对象
        customerDetails: {}, //客户详情
        companyAndDebt: [], //企业关联不良

    },
    mutations: {
        setCompanyInformation(state, params) { //设置公司基本信息
            state.companyInformation = params
        },

        setBusinessQuery(state, params) { //设置工商信息
            state.businessDatas = params
        },
        setAffiliatedQuery(state, params) { //设置关联企业
            !params ? (state.affiliatedDatas = [], state.chartAffiliatedDatas = {}) : (state.affiliatedDatas = params.data, state.chartAffiliatedDatas = params.enterpriseDatas)
        },
        setShareholderQuery(state, params) { //设置股东高管
            !params ? (state.shareholderDatas = [], state.chartShareholderDatas = {}) : (state.shareholderDatas = params.res, state.chartShareholderDatas = params.graphArrays)
        },

        setTotal(state, params) { //设置总条数
            state.total = params
        },

        setCurrentPage(state, params) { //设置当前页码,分页展示条数
            state[`${params.tableId}tableInfo`].pageNumber = params.pageNumber
        },
        setCurrentSize(state, params) {
            state[`${params}tableInfo`].pageSize = params
        },
        setSearchCondition(state, params) { //设置搜索条件
            state.searchCondition = params
        },
        setCustomerDetails(state, params) { //设置客户详情
            state.customerDetails = params
        },
        setQueryCompanyAndDebt(state, params) { //设置关联不良项目
            state.companyAndDebt = params
        },
    },
    actions: {
        /*工商信息*/
        getBusinessQuery({
            state,
            commit
        }, params) {
            let reqData = {
                data: {
                    name: params || state.companyInformation.name
                }
            }
            businessQuery(reqData).then(res => {
                let {
                    data
                } = res //解构
                commit('setBusinessQuery', data)
            }).catch(err => {
                commit('setBusinessQuery', {})
            })
        },
        /*关联企业*/
        getAffiliatedQuery({
            state,
            commit
        }, params) {
            let reqData = {
                data: {
                    name: state.companyInformation.name
                }
            }
            // let reqData = { data: { name: '成都好吃屋服务有限公司' } }
            affiliatedQuery(reqData).then(res => {
                if (!res || !res.data || res.data.c_trees.length == 0) {
                    commit('setAffiliatedQuery', false)
                } else {
                    let {
                        data
                    } = res //解构响应数据外面包有data
                    let enterpriseDatas = JSON.stringify(data)
                    enterpriseDatas = JSON.parse(enterpriseDatas)
                    deepThreeData(enterpriseDatas)

                    function deepThreeData(obj) {
                        /* 如果是对象不循环 */
                        if (obj instanceof Object && !(obj instanceof Array)) {
                            obj.items ? (obj.children = obj.items) : (obj.children = obj.c_trees);
                            if (obj.children.length !== 0) {
                                obj.level === "0" ?
                                    ((obj.symbol = ""), (obj.symbolSize = 0.1)) :
                                    (obj.symbol = addSvg); //第一级打开状态，所以是del，并且展开
                                deepThreeData(obj.children);
                            } else {
                                obj.symbol = delSvg;
                            }
                        } else {
                            for (let i of obj) {
                                i.children = i.items;
                                if (i.children.length !== 0) {
                                    i.symbol = addSvg;
                                    deepThreeData(i.children);
                                } else {
                                    i.symbol = delSvg;
                                }
                            }
                        }
                    }
                    commit('setAffiliatedQuery', {
                        data,
                        enterpriseDatas
                    })
                }
            }).catch(err => {
                console.log(err)
                commit('setAffiliatedQuery', false)
            })
        },
        /*股东高管 */
        getShareholderQuery({
            state,
            commit
        }, params) {
            let reqData = {
                data: {
                    name: state.companyInformation.name
                }
            }
            // let reqData = { data: { name: '成都好吃屋服务有限公司' } }
            shareholderQuery(reqData).then(res => {
                console.log('res', res)
                if (!res || res.length == 0) {
                    commit('setShareholderQuery', false)
                } else {
                    let graphDatas = JSON.stringify(res)
                    graphDatas = JSON.parse(graphDatas)
                    let dataInfo = {}; //过滤掉董监高重复的name,并把titles关系提取到一个title数组属性上 ,分组2
                    graphDatas.forEach((item, index) => {
                        let {
                            name,
                            title,
                            positions
                        } = item;
                        if (!dataInfo[name]) {
                            dataInfo[name] = {
                                group: 2,
                                name,
                                nodeLabel: name,
                                edgeLabel: title || "",
                                title: [],
                                positions
                            };
                        }
                        dataInfo[name].title.push(title);
                    });
                    let directorsSupervisors = Object.values(dataInfo); // 处理后的董监高
                    // 处理数据分组，分组3
                    for (let i of directorsSupervisors) {
                        let newPerInfo = []; //处理后的主要人员信息
                        for (let j in i.positions) {
                            for (let k of i.positions[j]) {
                                k.group = 3;
                                k.nodeLabel = k.company;
                                k.edgeLabel = k.title || "";
                                newPerInfo.push(k);
                            }
                            i.items = newPerInfo;
                        }
                    }
                    //把董监高和主要人员信息 相同名字的对象归类,即连接到董监高和主要人员信息
                    // for (let i of directorsSupervisors) {
                    //   i.items = [];
                    //   i.title ? (i.title = i.title.join(",")) : "";
                    //   i.edgeLabel = i.title || "";
                    //   for (let j of newPerInfo) {
                    //     if (i.name === j.name) {
                    //       i.items.push(j);
                    //     }
                    //   }
                    // }
                    let keepDirectorsSupervisors = JSON.stringify(directorsSupervisors);
                    keepDirectorsSupervisors = JSON.parse(keepDirectorsSupervisors);
                    let nodeObject = [{
                        label: state.companyInformation.name,
                        group: 1, //分组1
                        name: state.companyInformation.name,
                        items: [...keepDirectorsSupervisors]
                    }]; //组合本企业，董监高，主要人员 3层关系数据

                    let nodeS = JSON.stringify(nodeObject);
                    nodeS = JSON.parse(nodeS);

                    let edgeS = JSON.stringify(nodeObject);
                    edgeS = JSON.parse(edgeS);
                    /* 处理整个对象具备node和edges属性 */
                    let nodeId = 0;

                    function resnNodeObject(obj, parentId) {
                        for (let i of obj) {
                            if (i.group === 1) {
                                i.id = nodeId;
                                i.to = nodeId;
                                i.label = i.name;
                                i.from = parentId;
                            } else {
                                i.id = nodeId;
                                i.to = nodeId;
                                i.from = parentId;
                                i.label = i.nodeLabel;
                            }
                            ++nodeId;
                            if (i.items) {
                                resnNodeObject(i.items, i.id);
                            }
                        }
                    }
                    let edgesId = 0;

                    function resnEdgesObject(obj, parentId) {
                        for (let i of obj) {
                            i.id = edgesId;
                            i.to = edgesId;
                            i.from = parentId;
                            i.label = i.edgeLabel || "";
                            ++edgesId;
                            if (i.items) {
                                resnEdgesObject(i.items, i.id);
                            }
                        }
                    }
                    resnNodeObject(nodeS);
                    resnEdgesObject(edgeS);
                    let nodeArrays = [];
                    let edgeArrays = [];

                    function flatArray(array) {
                        for (let i of array) {
                            if (Array.isArray(i.title)) {
                                i.title = i.title.join(",");
                            }
                            nodeArrays.push(i);
                            if (i.items) {
                                flatArray(i.items);
                            }
                        }
                    }

                    function flatArrays(array) {
                        for (let i of array) {
                            i.length = 300;
                            if (Array.isArray(i.title)) {
                                i.title = i.title.join(",");
                            }
                            edgeArrays.push(i);
                            if (i.items) {
                                flatArrays(i.items);
                            }
                        }
                    }
                    flatArray(nodeS);
                    flatArrays(edgeS);
                    edgeArrays.shift(0);
                    commit('setShareholderQuery', {
                        res,
                        graphArrays: {
                            nodeArrays,
                            edgeArrays
                        }
                    })


                }
            }).catch(err => {
                commit('setShareholderQuery', false)
            })
        },
        /* 根据类型查询关联不良项目 */
        getQueryCompanyAndDebt({
            state,
            commit
        }, params) {
            let reqData = {}
            reqData.data = {
                ...params,
                ...{
                    name: state.companyInformation.name
                }
            }
            queryCompanyAndDebt(reqData).then(res => {

                commit('setQueryCompanyAndDebt', res)

            })
        },
    },
    getters: {
        getCompanyInformation(state) {
            return state.companyInformation
        },
        getBusinessDatas(state) {
            return state.businessDatas
        },
        getAffiliatedDatas(state) {
            return state.affiliatedDatas
        },
        getChartAffiliatedDatas(state) {
            return state.chartAffiliatedDatas
        },
        getShareholderDatas(state) {
            return state.shareholderDatas
        },
        getChartShareholderData(state) {
            return state.chartShareholderDatas
        },
        getCompanyAndDebtdatas(state) {
            return state.companyAndDebt
        },
    }
}