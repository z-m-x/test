<template>
  <div ref="double" class="double"></div>
</template>

<script>
export default {
  /* 双轴图 */
  data() {
    return {};
  },
  props: {
    currentChartData: {
      required: true,
      type: Object,
      default: () => ({
        type: "bar",
        title: "截止每月企业总体项目数据情况",
        date: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        itemData: [
          {
            name: "蒸发量",
            value: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "降水量",
            value: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            yAxisIndex: 1,
            name: "平均温度",
            value: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      })
    }
  },
  computed: {
    chartDatas() {
      return this.$props.currentChartData;
    }
  },
  created() {
    console.log(this.$props.currentChartData);
    this.$nextTick(function() {
      this.myChart = this.echarts.init(this.$refs.double);
      let options = {
        title: {
          text: this.chartDatas.title,
          textStyle: {}
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          icon: "roundRect",
          data: this.chartDatas.itemData.map(item => item.name) //圖例名稱,對應Y軸series name
        },
        /* 工具箱
          切換圖表類型
        */
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: [
          {
            boundaryGap: true,
            axisTick: { alignWithLabel: true }, //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
            type: "category", //类目轴
            data: this.chartDatas.date
          }
        ],
        yAxis: [
          {
            splitLine: {
              //横轴虚线
              show: true,
              lineStyle: {
                type: "dashed",
                color: "#CCC"
              }
            },
            axisLine: {
              //隐藏Y轴
              show: false
            },
            type: "value",
            name: "（万元）",
            // min: 0,坐标轴刻度最小值。
            // max: 250,坐标轴刻度最大值。
            // interval: 50,强制设置坐标轴分割间隔。
            minInterval: 1, //自动计算的坐标轴最小间隔大小。
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            splitLine: {
              //横轴虚线
              show: true,
              lineStyle: {
                type: "dashed",
                color: "#CCC"
              }
            },
            axisLine: {
              show: false
            },
            type: "value",
            name: "（个/户）",
            // min: 0,
            // max: 25,
            // interval: 5,
            minInterval: 1, //自动计算的坐标轴最小间隔大小。
            axisLabel: {
              //坐标轴刻度标签的相关设置
              formatter: "{value} °C"
            }
          }
        ],
        series: this.chartDatas.itemData.map(item => {
          if (item.yAxisIndex)
            return {
              name: item.name,
              type: this.chartDatas.type,
              data: item.value,
              yAxisIndex: item.yAxisIndex,
              symbolSize: 1 //拐点圆的大小
            };
          return {
            name: item.name,
            type: this.chartDatas.type,
            data: item.value,
            symbolSize: 1
          };
        })
      };
      this.myChart.setOption(options);
      window.addEventListener("resize", () => {
        //自适应
        this.myChart.resize();
      });
      this.myChart.resize();
    });
  },
  beforeDestroy() {
    /* 销毁图表 */
    this.myChart.dispose();
  }
};
</script>

<style lang="scss" scoped>
.double {
  width: 100%;
  height: 400px;
  font-family: "agency fb";
  font-weight: bolder;
}
</style>