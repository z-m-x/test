export default {
  inserted: function(el, binding){//el当前指令插入的dom，binding指令属性的值
    function createTable(binding) {
         /* 过滤出没超过25个字符长度的内容的数据 */
         let normalLenghtData = binding.value.data.filter(item => {
           return item.value.length < 25;
         });
         /* 过滤出超过或等于25个字符长度的内容的数据 */
         let superLongData = binding.value.data.filter(item => {
           return item.value.length >= 25;
         });
         /*  */
         /* 处理正常长度数据 */
         let nextDataIndex = null; //下一个数据的索引，避免重复循环
         var res = ""; //初始化搜集器
         res;
         normalLenghtData.forEach(function(currentI, index, array) {
           if (nextDataIndex == index) return;
           if (index + 1 >= array.length) {
             res += `
              <tr>
                 <td style='border: 1px solid #E8E8E8; padding:${binding.value.tableConfig.padding}px;' width=${binding.value.tableConfig.width[0]+'px'} >${currentI.td}</td>
                 <td style='border: 1px solid #E8E8E8; padding:${binding.value.tableConfig.padding}px;' width=${binding.value.tableConfig.width[1]+'px'} colspan='3'>${currentI.value}</td>
              </tr>
              `;
             return;
           }
           res += `
              <tr>
                 <td  style='border: 1px solid #E8E8E8; padding:${binding.value.tableConfig.padding}px;'  width=${binding.value.tableConfig.width[0]+'px'}>${currentI.td}</td>
                 <td style='border: 1px solid #E8E8E8; padding:${binding.value.tableConfig.padding}px;'  width=${binding.value.tableConfig.width[1]+'px'}>${currentI.value}</td>
                 <td  style='border: 1px solid #E8E8E8; padding:${binding.value.tableConfig.padding}px;' width=${binding.value.tableConfig.width[2]+'px'}>${array[index + 1].td}</td>
                 <td  style='border: 1px solid #E8E8E8; padding:${binding.value.tableConfig.padding}px;' width=${binding.value.tableConfig.width[3]+'px'}>${array[index + 1].value}</td>
              </tr>
              `;
           nextDataIndex = index + 1;
         });
         /* 处理超长数据 */
         superLongData.forEach(function(currentI) {
           res += `
              <tr>
                 <td style='border: 1px solid #E8E8E8; padding:${binding.value.tableConfig.padding}px;' width=${binding.value.tableConfig.width[0]+'px'}>${currentI.td}</td>
                 <td style='border: 1px solid #E8E8E8; padding:${binding.value.tableConfig.padding}px;' width=${binding.value.tableConfig.width[1]+'px'} colspan='3'>${currentI.value}</td>
              </tr>
              `;
         });
         res=`<table   class='my-table' style='border: 1px solid #E8E8E8;margin-bottom:30px; border-collapse:collapse;' >${res}</table>`;
         document.getElementById(`${binding.value.id}`).innerHTML = res;
       }
    /* 判断是否有表格数据传入。如果没有，不创建表格dom，创建空提示框 */
    if(binding.value.data.length===0){
     let nulldom=`<div  class="info-null-box" ><p>暂无信息</p></div>`;
      document.getElementById(`${binding.value.id}`).innerHTML = nulldom;
      return
    }
    createTable(binding)
    
  },
  updated:function(el,binding){
     /* 判断是否有表格数据传入。如果没有，不创建表格dom，创建空提示框 */
     if(binding.value.data.length===0){
      let nulldom=`<div  class="info-null-box" ><p>暂无信息</p></div>`;
       document.getElementById(`${binding.value.id}`).innerHTML = nulldom;
       return
     }
     createTable(binding)
  }
}