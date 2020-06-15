<template>
  <div class="business-risks">
    <!-- 股权冻结 -->
    <div class="table-box">
      <div class="table-name">
        <div class="befor-line"></div>
        <h4 class="name">{{tableData[0].title}}</h4>
      </div>
      <div class="table-container" v-if="tableData[0].tableDatas.data.length===0?false:true">
        <eltable :tableDatas="tableData[0].tableDatas" @handelDetails="handelDetails">
          <template v-slot:notice_no="slotData">
            <p>{{slotData.currentRowData.detail.notice_no}}</p>
          </template>
          <template v-slot:freeze_date="slotData">
            <p>{{slotData.currentRowData.detail.freeze_start_date+slotData.currentRowData.detail.freeze_end_date}}</p>
          </template>
        </eltable>
      </div>
      <div class="info-null-box" v-if="tableData[0].tableDatas.data.length===0?true:false">
        <P>暂无数据</P>
      </div>
    </div>
    <!-- 详情弹框 -->
    <el-dialog
      title
      :visible.sync="dialogTableVisible"
      :append-to-body="true"
      :center="true"
      :lock-scroll="false"
      top="38vh"
    >
      <div
        id="tableDetai"
        class="table-container"
        v-createcompanydetailstable="{data:tableDetailsData[currentOpenDetailsTable],parentId:'tableDetai',tableConfig:tableConfig,id:currentOpenDetailsTable}"
      ></div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  /* 经营风险 */
  name: "businessrisks",
  data() {
    return {
      dialogTableVisible: false,
      /* 当前打开dialog的表格key */
      currentOpenDetailsTable: "equityFreeze",
      tableConfig: {
        width: [190, 600, 342, 600], //每一列的宽度
        padding: 15,
        columnsNumber: 2 //列数量，例如2列（表头和具体值为1列）
      },
      /* table显示内容 */
      tableData: [
        {
          title: "股权冻结 (0)",
          tableDatas: {
            show: ["index", "operation"],
            tableId: "equityFreeze",
            data: [
              {
                be_executed_person: "被执行人",
                amount: "股权数额",
                detail: {
                  notice_no: "执行通知书文号",
                  freeze_start_date: "冻结期限自",
                  freeze_end_date: "冻结期限至"
                },
                type: "类型",
                status: "状态"
              }
            ]
          }
        },
      ],
      /*打开dialog的详情数据 */
      tableDetailsData: {
        equityFreeze: {
          un_freeze_details: {
            execute_court: "执行法院",
            notice_no: "执行通知书文号"
          },
          detail: {
            assist_item: "执行事项",
            adjudicate_no: "执行裁定书文号",
            assist_name: "被执行人",
            freeze_start_date: "冻结期限自",
            freeze_end_date: "冻结期限至",
            freeze_year_month: "冻结期限",
            public_date: "公示日期"
          },
          pc_freeze_detail: {
            freeze_amount: "被执行人持有股权、其它投资权益的数额",
            assist_ident_type: "被执行人证件种类",
            assist_ident_no: "被执行人证件号码"
          },
          lose_efficacy: {
            date: "失效时间",
            reason: "失效原因"
          }
        }
      }
    };
  },
  created() {
    this.$nextTick(() => {
      this.disposeChattelMortgage(this.currentOpenDetailsTable); //处理数据函数调用 传入当前点击的表格key
    });
  },
  methods: {
    /* 查看详情 */
    handelDetails(currentRowIndex) {
      console.log(currentRowIndex);
      this.dialogTableVisible = true;
    },
    /* 处理打开dialog的详情数据以匹配表头字段（对象有子类的重组为父key_子key）*/
    disposeChattelMortgage(currentOpenDetailsTable) {
      let resData = JSON.stringify(
        this.tableDetailsData[currentOpenDetailsTable]
      );
      resData = JSON.parse(resData);
      this.deepSort(resData);
      this.tableDetailsData[currentOpenDetailsTable] = resData;
    },
    /* 递归降维对象重组*/
    deepSort(object) {
      for (let i in object) {
        if (object[i] instanceof Object) {
          for (let j in object[i]) {
            let currentObjectKey = i + "_" + j; //父级对象和子级对象key重组
            object[currentObjectKey] = object[i][j];
            if (object[i][j] instanceof Object) {
              for (let k in object[i][j]) {
                let currentObjectKey = j + "_" + k; //父级对象和子级对象key重组
                object[currentObjectKey] = object[i][j][k];
              }
              this.deepSort();
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.business-risks {
  height: 100%;
  .table-box {
    margin-bottom: 30px;
    .table-name {
      margin-bottom: 22px;
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
    .info-null-box {
      height: 53px;
      background: rgba(250, 250, 250, 1);
      border-radius: 4px 4px 0px 0px;
      border: 1px solid #e9e9e9;
      padding-left: 26px;
      margin-bottom: 30px;
      p {
        height: 53px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 53px;
      }
    }
  }
}
</style>