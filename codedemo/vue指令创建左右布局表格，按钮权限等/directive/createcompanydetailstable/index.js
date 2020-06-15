import headerCollection from './tableth'//表头信息
function createTable(el,binding) {
    let tableConfig = binding.value.tableConfig//传过来的表格配置
    let parentId = binding.value.parentId||el.id//传过来的承载table的容器id，如果不传默认绑定指令的元素id
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
        case 'hearingAnnouncement'://开庭公告
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
        case 'fileInformation'://立案信息
            /* 处理被告原告 */
            normalData = assignTableDatas.map(item => {
                if (Object.keys(item)[0] === 'related_items') {
                    let assignPlaintiff = `被告：${((item['related_items'])[0]).items[0].name}    原告：${((item['related_items'])[1]).items[0].name}`
                    return Object.assign({}, { th: item.th }, { value: assignPlaintiff })
                }
                return item
            });
            break;
        case 'courtAnnouncement'://法院公告
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
        case 'briberyIllegalInfo'://行贿违法信息
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'url' && Object.keys(item)[0] !== 'judgeresult') return item
                // if (Object.keys(item)[0] === 'content') {
                //     let assignPlaintiff = `被告：${((item['related_items'])[0]).items[0].name}    原告：${((item['related_items'])[1]).items[0].name}`
                //     return Object.assign({}, { th: item.th }, { value: assignPlaintiff })
                // }
            });
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'url' || Object.keys(item)[0] === 'judgeresult') {
                    return item
                }
            });
            break;
        case 'credibilityInformation'://失信信息
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'final_duty') return item
                // if (Object.keys(item)[0] === 'content') {
                //     let assignPlaintiff = `被告：${((item['related_items'])[0]).items[0].name}    原告：${((item['related_items'])[1]).items[0].name}`
                //     return Object.assign({}, { th: item.th }, { value: assignPlaintiff })
                // }
            });
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'final_duty') {
                    return item
                }
            });
            break;
        case 'credibilityInformation'://限制高消费信息
            normalData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] !== 'content') return item
            });
            mergeData = assignTableDatas.filter(item => {
                if (Object.keys(item)[0] === 'content') {
                    return item
                }
            });
            break;
        default:
            normalData = assignTableDatas
            break;
    }
    /* 处理不需要合并单元格的数据 */
    let nextDataIndex ; //下一个数据的索引，避免重复循环
    var res = ""; //初始化搜集器
    let rowColumns = ''  // 一行的列字符串 
    let columnWI = 0//每列宽度的索引，因为第一行索引0 ，后面累加此值达到索引遍历
    normalData.forEach(function (currentI, index, array) {
        if (nextDataIndex >= index) return

        if (index + tableConfig.columnsNumber - 1 >= array.length) {
            res += `
             <tr>
                <td style='font-weight:600;border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;'  bgcolor='#FAFAFA'  width=${tableConfig.width[0] + 'px'} >${array[index].th}</td>
                <td style='border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;' width=${tableConfig.width[1] + 'px'} colspan=${tableConfig.columnsNumber + tableConfig.columnsNumber - 1}><span>${array[index].value}</span></td>
             </tr>
             `;
            return;
        }
        rowColumns = ''//清空字符串避免累加上次数据
        columnWI = 0//每列宽度索引归0
        for (var i = 0; i < tableConfig.columnsNumber; i++) {
            rowColumns += `
            <td  style='font-weight:600;border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;' bgcolor='#FAFAFA'  width=${tableConfig.width[0 + columnWI] + 'px'}>${array[index + i].th}</td>
            <td style='border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;'   width=${tableConfig.width[1 + columnWI] + 'px'}><span>${array[index + i].value}</span></td>
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
             <td style='border: 1px solid #E8E8E8; padding:${tableConfig.padding}px;'     width=${tableConfig.width[1] + 'px'} colspan=${tableConfig.columnsNumber + tableConfig.columnsNumber - 1}><span>${array[index].value}</span></td>
          </tr>
          `;
    });
    res = `<table   class='my-table' style='border: 1px solid #E8E8E8;margin-bottom:30px; border-collapse:collapse;' >${res}</table>`;
    document.getElementById(`${parentId}`).innerHTML = res;
}
export default {
    inserted: function (el, binding) {//el当前指令插入的dom，binding指令属性的值
        /* 判断是否有表格数据传入。如果没有，不创建表格dom，创建空提示框 */
        if (binding.value.data.length === 0) {
            let nulldom = `<div  class="info-null-box" ><p>暂无信息</p></div>`;
            document.getElementById(`${binding.value.parentId}`).innerHTML = nulldom;
            return
        }
        createTable(el,binding)

    },
    updated: function (el, binding) {
        /* 判断是否有表格数据传入。如果没有，不创建表格dom，创建空提示框 */
        if (binding.value.data.length === 0) {
            let nulldom = `<div  class="info-null-box" ><p>暂无信息</p></div>`;
            document.getElementById(`${binding.value.parentId}`).innerHTML = nulldom;
            return
        }
        createTable(el,binding)
    }
}