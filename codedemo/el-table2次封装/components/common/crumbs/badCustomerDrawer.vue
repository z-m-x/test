<template>
  <el-drawer
    :visible="drawer"
    :append-to-body="true"
    :lock-scroll="false"
    :with-header="false"
    size="40%"
    @close="colseDrawer"
  >
    <div style="padding:0 32px">
      <div class="drawer-close" @click="colseDrawer">返回</div>
      <div class="item-name" style="padding:32px 0 24px 0">
        <div class="name-left">
          <div class="befor-line"></div>
          <h4 class="name">不良余额明细</h4>
        </div>
      </div>
      <el-table
        border
        :data="badTableData"
        :header-cell-style="{'font-weight':400,'color':'#92929D','background':'rgba(250,250,250,1)',}"
        :cell-class-name="function(){return 'table_td_style'}"
      >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column property="principalAmountRemain" label="不良余额（万元）"></el-table-column>
        <el-table-column property="unitName" label="发生单位"></el-table-column>
      </el-table>
    </div>
  </el-drawer>
</template>


<script>
export default {
  name: "badCustomerDrawer", //不良客户抽屉
  data() {
    return {};
  },
  props: ["badTableData", "drawer"],
  modules() {},
  methods: {
    colseDrawer() {
      this.$emit("closeDrawer", false);
    }
  }
};
</script>

<style lang="scss" scope>
.drawer-close {
  height: 55px;
  border-radius: 2px;
  border-bottom: 1px solid #ccc;
  line-height: 55px;
  cursor: pointer;
  color: #007cff;
}

.item-name {
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  .name-left {
    display: flex;
    .befor-line {
      margin-right: 8px;
      width: 4px;
      height: 25px;
      background: rgba(0, 124, 255, 1);
      border-radius: 1px;
    }
    .name {
      height: 25px;
      font-size: 18px;
      font-weight: 600;
      color: rgba(48, 49, 51, 1);
      line-height: 25px;
    }
  }
  .name-right {
    height: 32px;
    padding: 0 20px;
  }
}
</style>