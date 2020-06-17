<template>
  <div>
    <el-table
      :border="getTableData.border"
      :data="getTableData.data"
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
      <template v-for="(item,index) in getTableData.thConfig">
        <!-- 需要从复杂数据结构中自定义单元格内容 在以下做出处理即可-->
        <!--
         参数说明：
          v-if="item.columnType==='slot'  配置表格头此列是否需要使用插槽，如没有配置则不会使用插槽
         :currentRowData 给父组件使用插槽的模板传递当前行的信息
         :name='item.slotName'  配置表格头此列需要使用插槽的名称，在表格配置文件对象中配置
        -->
        <el-table-column
          :key="index"
          :show-overflow-tooltip='true'
          :label="item.label"
          :width="item.width?item.width:0"
          :min-width="item.minwidth?item.minwidth:0"
          v-if="item.columnType==='slot'"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :currentRowData="scope.row" :currentRowIndex="scope.$index"></slot>
          </template>
        </el-table-column>
        <!-- 需要从复杂数据结构中自定义单元格内容 在以上做出处理即可-->

        <!--不需要做处理的普通数据 -->
        <el-table-column
          v-else
          :show-overflow-tooltip='true'
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width?item.width:0"
          :min-width="item.minwidth?item.minwidth:0"
        ></el-table-column>
      </template>
      <!-- 最右侧操作详情 -->
      <el-table-column v-if="isShowOperation" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handelDetails(scope.$index,scope.row)" type="text">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination
        @current-change="changePageNumber"
        background
        :pageSize="getTableData.pageSize"
        layout="prev, pager, next"
        :total="getTableData.total"
        :current-page.sync="getTableData.pageNumber"
        :hide-on-single-page="true"
      ></el-pagination>
    </div>
  </div>
</template>


<script>
/* 引入表格配置文件 */
import eltableConfig from "./thmodel";
let eltableConfigs = eltableConfig;
export default {
  name: "eltable",
  watch: {
    tableDatas: {
      deep: true,
      handler: function(v, old) {
        this.$nextTick(() => {
          this.tableData.pageNumber = v.currentPage;
          this.tableData.data = v.datas;
          this.tableData.total = v.total;
        });
      }
    }
  },
  props: ["tableDatas"],
  data() {
    return {
      tableData: {
        border: this.$props.tableDatas.border, //纵向边框
        thConfig: eltableConfigs[this.$props.tableDatas.tableId], //获取表格配置中对应的表格配置信息赋值给thConfig
        data: this.$props.tableDatas.datas, //表格数据
        total: this.$props.tableDatas.total, //总条数
        pageSize: this.$props.tableDatas.pageSize, //每页显示条数
        pageNumber: this.$props.tableDatas.currentPage //当前页码
      }
    };
  },
  methods: {
    /* 当前页码改变 */
    changePageNumber(pageNumber) {
      this.$emit("getPageNumber", pageNumber,this.$props.tableDatas.tableId);
    },
    /* 多选框变化触发事件回传给父组件 */
    handleSelectionChange(selectedVlues) {
      this.$emit("handelSelected", selectedVlues);
    },
    /* 点击详情触发事件回传给父组件 */
    handelDetails(currentRowIndex, currentRow) {
      this.$emit("handelDetails", { currentRowIndex, currentRow ,tableId:this.$props.tableDatas.tableId});
    }
  },
  computed: {
    getTableData() {
      return this.tableData;
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

::v-deep {
  .el-button {
    padding: 0 !important;
  }
}
</style>