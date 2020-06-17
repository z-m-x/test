<template>
  <div style="height:auto">
    <el-row v-for="(item,index) in dataList" :key="index">
      <el-col :span="24" style="margin-bottom:10px;">
        <span style="font-size:25px;color:blue;font-weight:900">丨</span>
        <span style="font-size:15px;font-weight:600">{{item.title}}</span>
      </el-col>
      <el-col :span="24">
        <table class="table_style" >
          <tr v-for="(tableData,i) in item.list" :key="i">
            <th class="table_th_style">{{tableData.th}}</th>
            <td class="table_td_style"></td>
          </tr>
        </table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "drawer-table",
  props: ["dataList", "activeName"],
  data() {
    return {};
  }
};
</script>
<style  >
.table_style {
  margin: 0 auto;
  width: 95%;
  border-collapse: collapse;
}
.table_th_style,
.table_td_style {
  border: 1px solid #eee;
  height: 40px;
}
th {
  color: #e1e1e1;
  font-weight: 500;
  width: 30%;
}
.el-drawer__body {
  overflow: auto;
}
</style>