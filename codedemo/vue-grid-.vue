
<template>
  <d2-container type="full" class="page">
    https://www.cnblogs.com/whoani/p/11377793.html
    <!-- grid-layout
       作用        数据类型          必填        备注
        :layout.sync="layout"  网格初始化布局  数组       必填  每一项都必须具有i、x、y、w和h属性 属性用作什么 见下方 
        :col-num="12"        表示网格有多少列 数字           非必填    默认为12
        :row-height="30"    表示一行的高度(以像素为单位) 数字     非必填     默认值为150、
        :maxRows="20"       表示网格中最大行数 数字          非必填     默认为无穷大
        :is-draggable="true"  表示网格项数是否可以拖动 Boolean        非必填     默认为true
        :is-resizable="true"  表示网格是否可以改变带大小 Boolean      非必填     默认为true
        :is-mirrored="false"  RTL/LTR 的转换 Boolean      非必填 默认为false
        :autoSize="ture"   容器是否适应内部变化 Boolean  非必填 默认为 true
        :vertical-compact="true"   垂直方向上 是否应该紧凑布局 Boolean 非必填 默认为true
        :margin="[10, 10]"   网格之间的边距 两个数字组成的数组 第一个数字为水品距离 第二个为垂直距离 非必填 默认值为 [10,10]
        :use-css-transforms="true"    是否使用css的transforms来排版 非必填 为false时 使用后采用定位方式来布局 默认为true
        :responsive="false"   布局是否应响应窗口宽度 非必填 默认false 为true时 会出现一些布局错乱的问题
        :breakpoints=" { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 } 布局是否应响应为响应布局定义的窗口宽度断点 对象类型 非必填 默认值
        :cols="{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }"   定义每个断点的列数
        ==========================================生命周期======================================================
        @layout-created="layoutCreatedEvent"  布局创建事件
        @layout-before-mount="layoutBeforeMountEvent" 布局安装以前事件
        @layout-mounted="layoutMountedEvent"    布局安装事件
        @layout-ready="layoutReadyEvent"    布局准备活动
        @layout-updated="layoutUpdatedEvent"  格子位置 大小更新 
    -->
    <!--grid-item // 每个单独控制 需要注意的是 每一个属性都要在data中注册一下 不然会导致不能拖拽 或者 不能放大缩小 -->
    <!-- 
          :x="layoutData[0].x"  横向距离
          :y="layoutData[0].y"  纵向距离
          :w="layoutData[0].w"  宽度
          :h="layoutData[0].h"  高度
          :i="layoutData[0].i"  唯一值 （重复时设置会导致一块放大或缩小）string类型
          @resize="resizeEvent"  当该元素 被放大缩小触发的事件 
          @move="moveEvent" 该元素移动时 触发的事件
          @resized="resizedEvent"  放大缩小结束 触发事件 注意:必须当大小相对上一次发生改变结束时才会触发
          @moved="movedEvent"  移动结束触发 注意:只有当位置相对上一次发生改变才会触发 
    -->

    <grid-layout
      :layout="layout"
      :auto-size="false"
      :col-num="20"
      :row-height="50"
      :max-rows="100"
      :is-draggable="true"
      :is-resizable="false"
      :vertical-compact="false"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :key="item.i"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        @resize="resizeEvent"
        @move="moveEvent"
        @resized="resizedEvent"
        @moved="movedEvent"
      >{{item.i}}</grid-item>
    </grid-layout>

  </d2-container>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"; //文件引入
// const matedata = [
//   {
//     i: "0", // 索引值 必填
//     h: 4, // 高度   必填
//     w: 7, // 宽度   必填
//     x: 2, // x 轴距离 必填
//     y: 0, // y轴距离 必填
//     minW: 5, // 最小宽度 当 w的值小于minW时 采用minW的值
//     minH: 3, // 同上
//     maxW: 8, // 的最大宽度。如果w大于maxW，那么w将被设置为maxW。
//     maxH: 6, // 同上
//     isDraggable: true, // 单独控制这一个盒子是否可以拖动 未填写 继承父元素的 非必填
//     isResizable: true, // 单独控制这一个盒子是否可以调整大小 未填写 继承父元素的 非必填
//     static: false, // 这个盒子是静态的  不能被其他元素改变位置 会被覆盖在底部
//     dragIgnoreFrom: "", // 属性这值为css 选择器 项的哪些元素不应触发项的拖动事件// 具体不知道干嘛的 没有用到
//     dragAllowFrom: "", // 属性这值为css 选择器 项的哪些元素应触发项的拖动事件 // 文档这样写的
//     resizeIgnoreFrom: "" //属性这值为css 选择器 表示项的哪些元素不应触发项的调整大小事件。//来自文档翻译
//   },
//   {
//     h: 1,
//     i: "1",
//     w: 1,
//     x: 0,
//     y: 1
//   },
//   {
//     h: 1,
//     i: "2",
//     w: 1,
//     x: 0,
//     y: 2
//   },
//   {
//     h: 1,
//     i: "3",
//     w: 1,
//     x: 0,
//     y: 3
//   }
// ];
var testLayout = [
    {"x":0,"y":0,"w":1,"h":1,"i":"0"},
    {"x":0,"y":1,"w":1,"h":1,"i":"1"},
    {"x":0,"y":2,"w":1,"h":1,"i":"2"},
    {"x":0,"y":3,"w":1,"h":1,"i":"3"},
    {"x":1,"y":0,"w":1,"h":1,"i":"4"},
    {"x":1,"y":1,"w":1,"h":1,"i":"5"},
    {"x":1,"y":2,"w":1,"h":1,"i":"6"},
    {"x":1,"y":3,"w":1,"h":1,"i":"7"},
    {"x":2,"y":0,"w":1,"h":1,"i":"8"},
    {"x":2,"y":1,"w":1,"h":1,"i":"9"},
    {"x":2,"y":2,"w":1,"h":1,"i":"10"},
    {"x":2,"y":3,"w":1,"h":1,"i":"11"},
    {"x":3,"y":0,"w":1,"h":1,"i":"12"},
    {"x":3,"y":1,"w":1,"h":1,"i":"13"},
    {"x":3,"y":2,"w":1,"h":1,"i":"14"},
    {"x":3,"y":3,"w":1,"h":1,"i":"15"},
    {"x":4,"y":0,"w":1,"h":1,"i":"16"},
    {"x":4,"y":1,"w":1,"h":1,"i":"17"},
    {"x":4,"y":2,"w":1,"h":1,"i":"18"},
    {"x":4,"y":3,"w":1,"h":1,"i":"19"}
  ];

export default {
  name: 'Layout',
  components: {
    GridLayout,
    GridItem
  },
  data() {
    return {
       layout: testLayout,
        newX:0,
        newY:0
    };
  },
  methods:{
      moveEvent: function(i, newX, newY,e){
        //console.log(e)
        //console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      resizeEvent: function(i, newH, newW){
        //console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW);
      },
      movedEvent: function(i, newX, newY,e){
        //console.log(e)
        //console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
      },
      resizedEvent: function(i, newH, newW, newHPx, newWPx){
        //console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
      }
    }
};
</script>
<style lang="scss" scoped>
.page {
  .vue-grid-layout {
    background-color: $color-bg;
    border-radius: 4px;
    margin: -10px;
    .page_card {
      height: 100%;
      @extend %unable-select;
    }
    .vue-resizable-handle {
      opacity: 0.3;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>