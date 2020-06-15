<template>
  <div>
    <el-table
      :border='tableData.border'
      :data="tableData.data"
      style="width: 100%"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      :header-cell-style="{	'font-weight':'900','background':'rgba(250,250,250,1)','color':'#000'}"
    >
      <!-- 最左侧单选 -->
      <el-table-column fixed="left" v-if="isShowSelection" type="selection" width="55"></el-table-column>
      <!-- 序号 -->
      <el-table-column type="index" v-if="isShowIndex" width="50">
        <template slot="header">
          <p>序号</p>
        </template>
      </el-table-column>
      <template v-for="(item,index) in tableData.thConfig">
        <!-- 需要从复杂数据结构中自定义单元格内容 在以下做出处理即可-->
        <!--
         参数说明：
          v-if="item.columnType==='slot'  配置表格头此列是否需要使用插槽，如没有配置则不会使用插槽
         :currentRowData 给父组件使用插槽的模板传递当前行的信息
         :name='item.slotName'  配置表格头此列需要使用插槽的名称，在表格配置文件对象中配置
        -->
        <el-table-column
          :key="index"
          :label="item.label"
          :width="item.width?item.width:0"
          :min-width="item.minwidth?item.minwidth:0"
          v-if="item.columnType==='slot'"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :currentRowData="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- 需要从复杂数据结构中自定义单元格内容 在以上做出处理即可-->

        <!--不需要做处理的普通数据 -->
        <el-table-column
          v-else
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width?item.width:0"
          :min-width="item.minwidth?item.minwidth:0"
        ></el-table-column>
      </template>
      <!-- 最右侧操作详情 -->
      <el-table-column v-if="isShowOperation" fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="handelDetails(scope.$index,scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
      
    </el-table>
    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination background layout="prev, pager, next" :total="tableData.total" :hide-on-single-page="true" ></el-pagination>
    </div>
  </div>
</template>


<script>
/* 引入表格配置文件 */
import eltableConfig from "./eltableconfig.js";
let eltableConfigs = eltableConfig;
export default {
  name: "eltable",
  props: {
    tableDatas: {
      type: Object,
      default: () => {
        return {
          border:true,
          total:1,
          show: ["selection", "index"], //需要显示的基础列type类型，传入数组可覆盖默认值
          tableId: "initTable", //表格唯一id，用于映射表格配置文件获取对应表头
          data: [
            {
              date: "2016-05-02",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1518 弄"
            }
          ]
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    /* 多选框变化触发事件回传给父组件 */
    handleSelectionChange(selectedVlues) {
      this.$emit("handelSelected", selectedVlues);
    },
    /* 点击详情触发事件回传给父组件 */
    handelDetails(currentRowIndex, currentRow) {
      this.$emit("handelDetails", { currentRowIndex, currentRow });
    }
  },
  computed: {
    tableData() {
      let tableId = this.$props.tableDatas.tableId; //获取传入的当前表格id
      return {
        border:this.$props.tableDatas.border,//纵向边框
        thConfig: eltableConfigs[tableId], //获取表格配置中对应的表格配置信息赋值给thConfig
        data: this.$props.tableDatas.data ,//表格数据
        total:this.$props.tableDatas.total,//总条数
      };
    },
    isShowIndex() {
      if (this.$props.tableDatas.show instanceof Array) {
        let show = [...this.$props.tableDatas.show];
        if (show.includes("index")) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    isShowSelection() {
      if (this.$props.tableDatas.show instanceof Array) {
        let show = [...this.$props.tableDatas.show];
        if (show.includes("selection")) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    /* 查看详情 */
    isShowOperation() {
      if (this.$props.tableDatas.show instanceof Array) {
        let show = [...this.$props.tableDatas.show];
        if (show.includes("operation")) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    /* 最右侧操作组，是否需要CRUD功能判断*/
      isShowOperation() {
      if (this.$props.tableDatas.show instanceof Array) {
        let show = [...this.$props.tableDatas.show];
        for (let i of show) {
          if (Object.keys(i)[0] === "operation") {
            return {show:true,i}
          }else {
             return {show:false}
          }
        }
      }
      return {show:false};
    }

  }
};
</script>

<style lang="scss" scoped>
.pagination-container {
  padding: 24px 24px 0 24px;
  background: white;
  display: block;
  text-align: right;
}
</style>