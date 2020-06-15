<template>
  <div>
    <eltable :tableDatas='tableDatas'
             @handelSelected='handelSelected'>
      <!-- 具名插槽 只读展示内容 -->
      <!-- <template #details>-->
      <!-- </template> -->
      <!--作用域插槽 :details为插槽名称=后面为值 获取具体值需要使用slotData.自定义属性key（key在子组件slot标签上）-->
      <template v-slot:details='slotData'>
        <!-- 显示需要绑定交互数据 -->
        <el-button size="mini"
                   @click="handleDetails(slotData.currentRowData,slotData.currentSelect)">查看详情</el-button>
        <!-- 展示复杂数据值 -->
        {{slotData.currentRowData.name}}
      </template>
    </eltable>
  </div>
</template>


<script>
export default {
  name: 'tabletest',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      tableDatas: {
      },
      tableDatas1: {},
      selectedItem: [],
    }
  },
  created () {
    this.$nextTick(function () {
      this.tableDatas = {
        show: ['selection'],
        tableId: 'initTable',
        data: this.tableData
      },
        this.tableDatas1 = {
          show: [],
          tableId: 'initTable',
          data: this.tableData
        }
    })
  },
  methods: {
    /* 获取当前行信息 */
    handleDetails (row) {
      console.log("当前行信息：", row)
    },
    /* 多选框变化触发接收从子类回传的值 */
    handelSelected (v) {
      console.log(v)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>