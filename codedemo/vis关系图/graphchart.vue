<template>
  <div
    class="network"
    ref="network"
    v-loading="isShowLoding"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
  >
    <!-- element-loading-background="rgba(0, 0, 0, 0.8)" -->

    <div id="mynetwork" ref="mynetwork"></div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
// import test1 from "./mockjson1.json";
export default {
  name: "FINANCIAL_DATA_MANAGE",
  watch: {
    getChartShareholderData: {
      handler: function(val) {
        JSON.stringify(val) == "{}"
          ? (this.isShowLoding = false)
          : ((this.isShowLoding = true),
            (this.nodes = val.nodeArrays),
            (this.edges = val.edgeArrays));
        this.createNetwork();
      },
      deep: true
    }
  },
  data() {
    return {
      isShowLoding: false,
      nodes: [
        // {
        //   id: 1,
        //   label: "中小担",
        //   // shapeProperties: { borderDashes: [5, 5] },
        //   group: 1
        // },
      ],
      // create an array with edges
      edges: [
        // { from: 0, to: 6, label: "arrows\nare cool", font: {}, length: 400 },
        // { from: 1, to: 9, label: "不良发生额66万", font: {}, length: 400 }, //,color:'#15B1DE'边缘颜色来自于from节点
      ],
      /* 所有节点 */
      allNodes: [],
      /* 所有边 */
      connectEdge: []
    };
  },
  computed: {
    ...mapGetters("revlettertreasure/qixinbao", ["getChartShareholderData"])
  },
  methods: {
    /* 创建network */
    createNetwork() {
      var container = this.$refs.mynetwork;
      var data = {
        nodes: this.nodes,
        edges: this.edges
      };
      let options = {
        // width: "100%",
        autoResize: false,
        clickToUse: true,
        nodes: {
          margin: {
            top: 10,
            right: 10,
            bottom: 10,
            left: 10
          },
          font: { strokeWidth: 0 }
        },
        /* 布局 */
        layout: { randomSeed: 1 },
        /* 边缘 */
        edges: {
          labelHighlightBold: true,
          arrowStrikethrough: false,
          chosen: true,
          font: {
            strokeWidth: 1,
            align: "middle",
            size: 16, // px
            face: "arial",
            vadjust: 1
          },
          shadow: false, //连接线阴影配置
          smooth: false, //是否显示方向箭头
          // arrows: { to: true }, //箭头指向from节点
          color: {
            inherit: "to",
            opacity: 1.0
          },
          dashes: true,
          width: 1
        },
        groups: {
          1: {
            //系统定义的形状 圆形等 这些官网都可以找到
            shape: "circle",
            font: {
              size: 16,
              color: "#fff"
            },
            color: "#00B6C6",
            widthConstraint: { maximum: 70 },
            heightConstraint: { maximum: 70 }
          },
          2: {
            //系统定义的形状 dot等 这些官网都可以找到
            shape: "circle",
            font: {
              size: 16,
              color: "#fff"
            },
            color: "#F25A29",
            widthConstraint: { maximum: 70 },
            heightConstraint: { maximum: 70 }
          },
          3: {
            //系统定义的形状 dot等 这些官网都可以找到
            shape: "circle",
            font: {
              size: 16,
              color: "#fff"
            },
            color: "#0183FE",
            widthConstraint: { maximum: 70 },
            heightConstraint: { maximum: 70 }
          }
        },
        /* 物理系统 */
        physics: {
          barnesHut: {
            // theta:1,
            centralGravity: 1, // 中心重力吸引器将整个网络拉回中心
            gravitationalConstant: -500,
            centralGravity: 0.3,
            springConstant: 0,
            avoidOverlap: 1,
            springLength: 10
          },
          timestep: 0.7,
          maxVelocity: 1,
          minVelocity: 1
          //  stabilization: false,
          // adaptiveTimestep:false
        },
        /* 控制 */
        interaction: {
          hideEdgesOnDrag: true, //拖动视图时不会绘制边缘
          hideEdgesOnZoom: true, //缩放视图时不会绘制边缘
          dragNodes: true, //是否能拖动节点
          navigationButtons: true, //是否开启控制器
          hover: true, //鼠标移过后加粗该节点和连接线
          selectConnectedEdges: true, //选择节点后是否显示连接线
          hoverConnectedEdges: true, //鼠标滑动节点后是否显示连接线
          tooltipDelay: 200, //提示
          zoomView: false, //是否能缩放画布
          dragView: true //是否能拖动画布
        }
      };
      let _this = this;
      // initialize your network!
      window.network = new _this.vis.Network(container, data, options);
      this.allNodes = window.network.view.body.nodeIndices;
      this.allEdges = window.network.view.body.edgeIndices;

      /* 动画结束后执行 */
      window.network.on("afterDrawing", function() {
        _this.isShowLoding = false;
      });
      /* 定义一个标杆。取反控制隐藏无关节点和全部节点显示 */
      var flag = false; //根据情况放开======================================================================================================
      /* 选择节点时触发 */
      window.network.on(
        "selectNode",
        function(params) {
          let currentNodeGroupId;
          let currentNodeColor;
          /* 循环nodes找到当前节点所在的组Id */
          for (let currentNode of _this.nodes) {
            if (currentNode.id === params.nodes[0])
              currentNodeGroupId = currentNode.group;
          }
          /* 循环edge获取到当前节点组的颜色 */
          for (let currentGroupKey in network.groups.groups) {
            if (currentNodeGroupId === Number(currentGroupKey)) {
              currentNodeColor = network.groups.groups[currentGroupKey].color;
            }
          }
          /* 获取到所有关联的节点 */
          let relevanceNodes = network.getConnectedNodes(params.nodes[0]);
          var allConnectNodes = [];
          allConnectNodes = relevanceNodes.concat(params.nodes[0]); //所有关联节点包括被选中节点
          let connectEdge = network.getConnectedEdges(params.nodes[0]); //获取连接到此节点的边的edgeIds数组
          // if (!flag) {//根据情况放开======================================================================================================
          /* 改变节点 */
          for (let currentNode of _this.allNodes) {
            if (
              !relevanceNodes.includes(currentNode) &&
              currentNode != params.nodes[0]
            ) {
              network.clustering.updateClusteredNode(currentNode, {
                hidden: true,
                font: {
                  color: "#f0ffff"
                },
                color: {
                  border: "#FAFAFA00",
                  background: "#f0ffff"
                  // highlight: {
                  //   border: "#FAFAFA00",
                  //   background: "#FAFAFA00"
                  // },
                }
              });
            } else {
              /* 获取所有有关联的节点分组 */
              var currentGroupColor =
                network.groups.groups[_this.nodes[currentNode].group].color;
              network.clustering.updateClusteredNode(currentNode, {
                hidden: false
              });
            }
          }
          /* 改变边 */
          for (let currentEdge of _this.allEdges) {
            if (!connectEdge.includes(currentEdge)) {
              network.clustering.updateEdge(currentEdge, {
                hidden: true,
                color: "#FAFAFA00",
                font: { color: "#FAFAFA00" }
              });
            } else {
              network.clustering.updateEdge(currentEdge, {
                hidden: false,

                color: currentNodeColor,
                font: { color: "#000" }
              });
            }
          }
          // flag = !flag;//根据情况放开======================================================================================================
        }
        // else { //根据情况放开======================================================================================================
        //  for (let currentNode of _this.allNodes) {
        //    network.clustering.updateClusteredNode(currentNode, {
        //      hidden:false
        //    })
        //  }
        //   flag = !flag;
        // }}
      );
      /* 双击节点时触发 */
      window.network.on("doubleClick", function(params) {
        _this.isShowLoding = true;
        _this.createNetwork(); //重置
      });
    }
  },
  created() {},
  mounted() {},
  beforeDestroy() {
    this.isShowLoding = false;
  }
};
</script>

<style lang="scss" scoped>
.network {
  height: 90vh;
}
#mynetwork {
  width: 100%;
  height: 100%;
}
</style>