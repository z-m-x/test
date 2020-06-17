import headerCollection from './thmodel'//表头信息
let nulldom = `<div  style='height: 53px;background: rgba(250, 250, 250, 1);border-radius: 4px 4px 0px 0px;border: 1px solid #e9e9e9;padding-left: 26px;margin-bottom: 30px;' ><p style='height: 53px;font-weight: 400;color: rgba(102, 102, 102, 1);line-height: 53px;'>暂无信息</p></div>`;
function createTable(el, binding) {
    let tableConfig = binding.value.tableConfig//传过来的表格配置
    let parentId = binding.value.parentId || el.id//传过来的承载table的容器id，如果不传默认绑定指令的元素id
    let id = binding.value.id//传过来的表唯一id
    let data = binding.value.data//传过来的表格数据
    /* 取出对应表头信息 */
    let currentHeader = headerCollection[id]
    /* 根据表头字段过滤表格展示数据 */
    let filterData = []//存放需要展示的数据
    /* 判断传入的数据格式，不同的方式处理数据 */
    if (data instanceof Object && !(data instanceof Array)) {
        for (let i in data) {
            if (Object.keys(currentHeader).includes(i)) {
                filterData.push({ [i]: data[i] })
            }
        }
    } else {
        for (let i of data) {
            if (Object.keys(currentHeader).includes(Object.keys(i)[0])) {
                filterData.push(i)
            }
        }
    }
    /* 合并数据与表头 */
    let assignTableDatas = filterData.map((currenti) => {
        if (Object.keys(currentHeader).includes(Object.keys(currenti)[0])) {
            return Object.assign({}, currenti, { th: currentHeader[Object.keys(currenti)[0]] }, { value: currenti[Object.keys(currenti)[0]] })
        }
    })
    /* 分别存储需要合并和不需要合并单元格的数据 */
    var normalData = []
    var mergeData = []

    /* 获取唯一标识判断是哪一张表，用于展示不同结构的table-例如哪个字段需要合并单元格拉通展示 */
    switch (id) {
        case 'COURTNOTICE'://开庭公告
            /* 过滤出此表不需要合并单元格数据 */
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'plaintiff' && Object.keys(item)[0] !== 'defendant') return item
            });
            /* 过滤出此表需要合并单元格数据 */
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'plaintiff' || Object.keys(item)[0] === 'defendant') return item
            });
            break;
        case 'businessInformation'://工商信息
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'scope') return item
            });
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'scope') return item
            });
            break;
        case 'FILING'://立案信息
            /* 处理被告原告 */
            normalData = assignTableDatas.map(item => {
                if (Object.keys(item)[0] === 'related_items') {
                    let assignPlaintiff = `被告：${((item['related_items'])[0]).items[0].name}    原告：${((item['related_items'])[1]).items[0].name}`
                    return Object.assign({}, { th: item.th }, { value: assignPlaintiff })
                }
                return item
            });
            break;
        case 'NOTICE'://法院公告
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'content') return item
                // if (Object.keys(item)[0] === 'content') {
                //     let assignPlaintiff = `被告：${((item['related_items'])[0]).items[0].name}    原告：${((item['related_items'])[1]).items[0].name}`
                //     return Object.assign({}, { th: item.th }, { value: assignPlaintiff })
                // }
            });
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'content') {
                    return item
                }
            });
            break;
        case 'LAWSUIT'://行贿违法信息
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'url' && Object.keys(item)[0] !== 'judgeresult') return item
            });
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'url' || Object.keys(item)[0] === 'judgeresult') {
                    if (Object.keys(item)[0] === 'url') {
                        item.value = `<a style='color:#3471FA' target=blank href=${item.value}>${item.value}</a>`
                        return item
                    } else {
                        return item
                    }
                }
            });
            break;
        case 'BREAKFAITH'://失信信息
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'final_duty') return item
            });
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'final_duty') {
                    return item
                }
            });
            break;
        case 'CONSUMPTION'://限制高消费信息
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'content') return item
            });
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'content') {
                    return item
                }
            });
            break;
        case 'JUDICIALCOURTNOTICE'://企业最新动态详情开庭公告详情
            normalData = assignTableDatas.map(item => {
                /* 处理原告 被告*/
                if (Object.keys(item)[0] == 'plaintiff' || Object.keys(item)[0] == 'defendant') {
                    let str = ''
                    for (let i of item['plaintiff'] || item['defendant']) {
                        str += i.name + ' ; '
                    }
                    return Object.assign({}, { th: item.th }, { value: str })
                }
                return item
            });
            break;
        case 'MANAGEMENTMORTGAGE'://企业最新动态详情动产抵押详情
            normalData = assignTableDatas.map(item => {
                /* 处理原告 被告*/
                if (Object.keys(item)[0] == 'mortgagees' || Object.keys(item)[0] == 'guarantees') {
                    let str = ''
                    for (let i of item['mortgagees'] || item['guarantees']) {
                        str += i.name + ' ;'
                    }
                    return Object.assign({}, { th: item.th }, { value: str })
                }
                return item
            });
            break;
        case 'JUDICIALFILING'://企业最新动态详情立案信息详情
            normalData = assignTableDatas.map(item => {
                /* 处理原告 被告*/
                if (Object.keys(item)[0] == 'related_companies') {
                    let str = ''
                    for (let i of item['related_companies']) {
                        i.role == '被告' ? str += "被告:" + i.name + ' ;' : str += "原告:" + i.name + ' ;'

                    }
                    return Object.assign({}, { th: item.th }, { value: str })
                }
                return item
            });
            break;
        case 'JUDICIALCONSUMPTION'://企业最新动态详情限制高消费详情
            /* 过滤出此表不需要合并单元格数据 */
            for (let i of assignTableDatas) {//处理性别
                if (i.th == '性别') {
                    i.value == 1 ? i.value = '男' : i.value = '女'
                }
            }
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'content') return item
            });
            /* 过滤出此表需要合并单元格数据 */
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'content') return item
            });
            break;
        case 'JUDICIALAUCTION'://企业最新动态详情司法拍卖详情
            /* 过滤出此表不需要合并单元格数据 */
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'description') return item
            });
            /* 过滤出此表需要合并单元格数据 */
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'description') return item
            });
            break;
        case "MANAGEMENTJUDICIAL"://企业最新动态详情司法协助详情
            let endIndex//保存截止日期所在索引
            let startIndex//保存开始日期索引
            let startObj  //保存开始日期对象
            for (let i in assignTableDatas) {//开始日期结束日期合并展示
                if (Object.keys(assignTableDatas[i])[0] == 'end_date') {
                    endIndex = Number(i)
                } else if (Object.keys(assignTableDatas[i])[0] == 'start_date') {
                    startObj = assignTableDatas[i]
                    startIndex = i
                }
            }
            assignTableDatas.splice((startIndex), 1);
            assignTableDatas.splice(endIndex, 0, startObj);
            normalData = assignTableDatas.map(item => item);
            break;
        case 'OTHERTRADEMARK'://企业最新动态详情商标信息详情
            normalData = assignTableDatas.map(item => {
                let str = ''
                /*商品/服务项目*/
                if (Object.keys(item)[0] == 'products') {
                    for (let i of item['products']) {
                        str += i.name + ';'
                    }
                    return Object.assign({}, { th: item.th }, { value: str })
                } else if (Object.keys(item)[0] == 'image_url') {
                    str = `<img src=${item.value} alt='抱歉，图片加载失败' height=100px>`
                    return Object.assign({}, { th: item.th }, { value: str })
                } else if (Object.keys(item)[0] == 'type_num') {
                    switch (item['type_num']) {
                        case '01': return Object.assign({}, { th: item.th }, { value: '化学原料' })
                            break;
                        case '02': return Object.assign({}, { th: item.th }, { value: '颜料油漆' })
                            break;
                        case '03': return Object.assign({}, { th: item.th }, { value: '日化用品' })
                            break;
                        case '04': return Object.assign({}, { th: item.th }, { value: '燃料油脂' })
                            break;
                        case '05': return Object.assign({}, { th: item.th }, { value: '医药' })
                            break;
                        case '06': return Object.assign({}, { th: item.th }, { value: '金属材料' })
                            break;
                        case '07': return Object.assign({}, { th: item.th }, { value: '机械设备' })
                            break;
                        case '08': return Object.assign({}, { th: item.th }, { value: '手工器械' })
                            break;
                        case '09': return Object.assign({}, { th: item.th }, { value: '科学仪器' })
                            break;
                        case '10': return Object.assign({}, { th: item.th }, { value: '医疗器械' })
                            break;
                        case '11': return Object.assign({}, { th: item.th }, { value: '灯具空调' })
                            break;
                        case '12': return Object.assign({}, { th: item.th }, { value: '运输工具' })
                            break;
                        case '13': return Object.assign({}, { th: item.th }, { value: '军火烟火' })
                            break;
                        case '14': return Object.assign({}, { th: item.th }, { value: '珠宝钟表' })
                            break;
                        case '15': return Object.assign({}, { th: item.th }, { value: '乐器' })
                            break;
                        case '16': return Object.assign({}, { th: item.th }, { value: '办公用品' })
                            break;
                        case '17': return Object.assign({}, { th: item.th }, { value: '橡胶制品' })
                            break;
                        case '18': return Object.assign({}, { th: item.th }, { value: '皮革皮具' })
                            break;
                        case '19': return Object.assign({}, { th: item.th }, { value: '建筑材料' })
                            break;
                        case '20': return Object.assign({}, { th: item.th }, { value: '家具' })
                            break;
                        case '21': return Object.assign({}, { th: item.th }, { value: '厨房洁具' })
                            break;
                        case '22': return Object.assign({}, { th: item.th }, { value: '绳网袋蓬' })
                            break;
                        case '23': return Object.assign({}, { th: item.th }, { value: '纱线丝' })
                            break;
                        case '24': return Object.assign({}, { th: item.th }, { value: '布料床单' })
                            break;
                        case '25': return Object.assign({}, { th: item.th }, { value: '服装鞋帽' })
                            break;
                        case '26': return Object.assign({}, { th: item.th }, { value: '钮扣拉链' })
                            break;
                        case '27': return Object.assign({}, { th: item.th }, { value: '地毯席垫' })
                            break;
                        case '28': return Object.assign({}, { th: item.th }, { value: '健身器材' })
                            break;
                        case '29': return Object.assign({}, { th: item.th }, { value: '食品' })
                            break;
                        case '30': return Object.assign({}, { th: item.th }, { value: '方便食品' })
                            break;
                        case '31': return Object.assign({}, { th: item.th }, { value: '饲料种籽' })
                            break;
                        case '32': return Object.assign({}, { th: item.th }, { value: '啤酒饮料' })
                            break;
                        case '33': return Object.assign({}, { th: item.th }, { value: '酒' })
                            break;
                        case '34': return Object.assign({}, { th: item.th }, { value: '烟草烟具' })
                            break;
                        case '35': return Object.assign({}, { th: item.th }, { value: '广告销售' })
                            break;
                        case '36': return Object.assign({}, { th: item.th }, { value: '金融物管' })
                            break;
                        case '37': return Object.assign({}, { th: item.th }, { value: '建筑修理' })
                            break;
                        case '38': return Object.assign({}, { th: item.th }, { value: '通讯服务' })
                            break;
                        case '39': return Object.assign({}, { th: item.th }, { value: '运输贮藏' })
                            break;
                        case '40': return Object.assign({}, { th: item.th }, { value: '材料加工' })
                            break;
                        case '41': return Object.assign({}, { th: item.th }, { value: '教育娱乐' })
                            break;
                        case '42': return Object.assign({}, { th: item.th }, { value: '科技服务' })
                            break;
                        case '43': return Object.assign({}, { th: item.th }, { value: '餐饮住宿' })
                            break;
                        case '44': return Object.assign({}, { th: item.th }, { value: '医疗园艺' })
                            break;
                        case '45': return Object.assign({}, { th: item.th }, { value: '社会服务' })
                            break;
                    }
                }
                return item
            });
            break;
        case 'OTHERPATENT'://企业最新动态详情专利信息详情
            /* 过滤出此表不需要合并单元格数据 */
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'brief') return item
            });
            /* 过滤出此表需要合并单元格数据 */
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'brief') return item
            });
            break;
        case 'OTHEROPERATION'://企业最新动态详情招投标信息详情
            /* 处理招标单位 代理机构 招标状态*/
            normalData = assignTableDatas.map(item => {
                if (Object.keys(item)[0] == 'tender_agent_desc' || Object.keys(item)[0] == 'tender_desc') {
                    let str = ''
                    for (let i of item['tender_agent_desc'] || item['tender_desc']) {
                        str += i.name + ';'
                    }
                    return Object.assign({}, { th: item.th }, { value: str })
                } else if (Object.keys(item)[0] == 'status') {
                    switch (item['status']) {
                        case 0: return Object.assign({}, { th: item.th }, { value: '预告' })
                            break;
                        case 1: return Object.assign({}, { th: item.th }, { value: '招标' })
                            break;
                        case 2: return Object.assign({}, { th: item.th }, { value: '招标变更' })
                            break
                        case 3: return Object.assign({}, { th: item.th }, { value: '中标' })
                            break
                        case 4: return Object.assign({}, { th: item.th }, { value: '中标变更' })
                            break
                        case 5: return Object.assign({}, { th: item.th }, { value: '废标' })
                            break
                    }
                }
                return item
            })
            break;
        case 'OTHERNEWS'://企业最新动态详情新闻动态详情
            normalData = assignTableDatas.map(item => {
                let str = ''
                if (Object.keys(item)[0] == 'url') {
                    str = `<a style=color:#3471FA href=${item['url']}  target=blank>${item['url']}</a>`
                    return Object.assign({}, { th: item.th }, { value: str })
                }
                return item
            })
            break;
        case 'OTHERVIOLATIONS'://企业最新动态详情重大税收违法详情
            normalData = assignTableDatas.map(item => {
                let str = ''
                if (Object.keys(item)[0] == 'url') {
                    str = `<a style=color:#3471FA href=${item['url']}  target=blank>${item['url']}</a>`
                    return Object.assign({}, { th: item.th }, { value: str })
                }
                return item
            })
            break;
        case 'OTHERRECRUIT'://企业最新动态详情招聘信息详情
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'description') return item
            });
            /* 过滤出此表需要合并单元格数据 */
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'description') return item
            });
            break;
        default:
            normalData = assignTableDatas
            break;
    }
    /* 处理不需要合并单元格的数据 */
    let nextDataIndex; //下一个数据的索引，避免重复循环
    var res = ""; //初始化搜集器
    let rowColumns = ''  // 一行的列字符串 
    let columnWI = 0//每列宽度的索引，因为第一行索引0 ，后面累加此值达到索引遍历
    normalData.forEach(function (currentI, index, array) {
        if (nextDataIndex >= index) return

        if (index + tableConfig.columnsNumber - 1 >= array.length) {
            res += `
             <tr>
                <td style='font-weight:600;border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;'  bgcolor='#FAFAFA'  width=${tableConfig.width[0] + 'px'} >${array[index].th}</td>
                <td style='border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;' width=${tableConfig.width[1] + 'px'} colspan=${tableConfig.columnsNumber + tableConfig.columnsNumber - 1}>${array[index].value}</td>
             </tr>
             `;
            return;
        }
        rowColumns = ''//清空字符串避免累加上次数据
        columnWI = 0//每列宽度索引归0
        for (var i = 0; i < tableConfig.columnsNumber; i++) {
            rowColumns += `
            <td  style='font-weight:600;border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;' bgcolor='#FAFAFA'  width=${tableConfig.width[0 + columnWI] + 'px'}>${array[index + i].th}</td>
            <td style='border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;'   width=${tableConfig.width[1 + columnWI] + 'px'}>${array[index + i].value}</td>
            `
            columnWI += 2
        }
        res += `
          <tr>
             ${rowColumns}
          </tr>
          `;
        nextDataIndex = index + tableConfig.columnsNumber - 1;
    });
    /* 处理需要合并单元格的数据 */
    mergeData.forEach(function (currentI, index, array) {
        res += `
          <tr>
             <td style='font-weight:600;border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;' bgcolor='#FAFAFA' width=${tableConfig.width[0] + 'px'}>${array[index].th}</td>
             <td style='border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;'     width=${tableConfig.width[1] + 'px'} colspan=${tableConfig.columnsNumber + tableConfig.columnsNumber - 1}>${array[index].value}</td>
          </tr>
          `;
    });
    res = `<table   class='my-table' style='border: 1px solid #E8E8E8;margin-bottom:30px; border-collapse:collapse;' >${res}</table>`;
    document.getElementById(`${parentId}`).innerHTML = res;
}
export default {
    inserted: function (el, binding) {//el当前指令插入的dom，binding指令属性的值
        /* 判断是否有表格数据传入。如果没有，不创建表格dom，创建空提示框 */
        if (binding.value.data.length === 0 || Object.keys(binding.value.data).length === 0) {
            binding.value.parentId ? document.getElementById(`${binding.value.parentId}`).innerHTML = nulldom : document.getElementById(`${el.id}`).innerHTML = nulldom
            return
        }
        createTable(el, binding)

    },
    updated: function (el, binding) {
        /* 判断是否有表格数据传入。如果没有，不创建表格dom，创建空提示框 */
        if (binding.value.data.length === 0 || Object.keys(binding.value.data).length === 0) {
            binding.value.parentId ? document.getElementById(`${binding.value.parentId}`).innerHTML = nulldom : document.getElementById(`${el.id}`).innerHTML = nulldom
            return
        }
        createTable(el, binding)
    }
}









