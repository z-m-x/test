/*   
    "echarts": "^4.7.0"
    cnpm下载的echarts--src--chart--tree--treeLayout.js修改内容或者在静态文件内的echartsjs文件内在configjs配置webpack，在main引入js文件挂载到vue实例原型上，防止多人开发被覆盖
    else if (orient === 'TB' || orient === 'BT') {
        // kx = width / (right.getLayout().x + delta + tx);
        // ky = height / (bottom.depth - 1 || 1);
        kx=165;
        ky=150
        eachBefore(realRoot, function (node) {
        node.depth===1?coorX =window.innerWidth/2:coorX =window.innerWidth/2+ (node.getLayout().x ) * kx;
          coorY = orient === 'TB' ? (node.depth - 1) * ky : height - (node.depth - 1) * ky;
          node.setLayout({
            x: coorX,
            y: coorY
          }, true);
        });
      }
 */
<template>
  <div class="tree-view" ref="tree_view">
    <div class="chartsControl">
      <ul class="chartsControl-menu">
        <li class="chartsControl-item" ref="toBigtoMallBtn" @click="handelToBigToSmall('big')">
          <img src="../assets/images/magnify_svg.svg" alt="放大" />
          <span>放大</span>
        </li>
        <li class="chartsControl-item" ref="toBigtoMallBtn" @click="handelToBigToSmall('small')">
          <img src="../assets/images/shrink_svg.svg" alt="缩小" />
          <span>缩小</span>
        </li>
        <li class="chartsControl-item" @click="handelResizeC">
          <img src="../assets/images/restore_svg.svg" alt="还原" />
          <span>还原</span>
        </li>
      </ul>
    </div>
    <div id="myChart" v-if="show" ref="myChart"></div>
  </div>
</template>

<script>
export default {
  data() {
    this.delSvg =
      "path://M512 1024C229.238154 1024 0 794.761846 0 512S229.238154 0 512 0s512 229.238154 512 512-229.238154 512-512 512z m236.307692-551.384615H275.692308a39.384615 39.384615 0 1 0 0 78.76923h472.615384a39.384615 39.384615 0 0 0 0-78.76923z";
    this.addSvg =
      "path://M512 0C228.266667 0 0 228.266667 0 512s228.266667 512 512 512 512-228.266667 512-512S795.733333 0 512 0z m256 533.333333H533.333333v234.666667c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333333-21.333333V533.333333H256c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333h234.666667V256c0-12.8 8.533333-21.333333 21.333333-21.333333s21.333333 8.533333 21.333333 21.333333v234.666667h234.666667c12.8 0 21.333333 8.533333 21.333333 21.333333s-8.533333 21.333333-21.333333 21.333333z";
    return {
      show: false,
      initHeight: "", //初始宽高
      initWidth: "",
      ratio: 1, //初始缩放比例
      threeData: {
        eid: "9e036170-b972-42be-8720-3e67728e4a09",
        name: "同程网络科技股份有限公司",
        short_name: "同程网络科技",
        level: "0",
        children: [
          {
            eid: "",
            name: "吴志祥",
            type: "P",
            short_name: "吴志祥",
            amount: "1968.88万元",
            percent: "29.28%",
            sh_type: "工商股东",
            level: "1",
            children: []
          },
          {
            eid: "822d475c-e3a1-4062-b286-4508bedb2cda",
            name: "凯风创业投资有限公司",
            type: "E",
            short_name: "凯风创业投资",
            amount: "890.88万元",
            percent: "13.25%",
            sh_type: "工商股东",
            level: "1",
            children: [
              {
                eid: "18667dc0-d8c9-4819-bd78-6f211a1408b5",
                name: "中新苏州工业园区创业投资有限公司",
                type: "E",
                short_name: "苏州工业园区创业",
                amount: "12000万元",
                percent: "100%",
                sh_type: "工商股东",
                level: "2",
                children: [
                  {
                    eid: "714fc289-c1f4-4f13-bf58-7a1e4f31b630",
                    name: "苏州元禾控股股份有限公司",
                    type: "E",
                    short_name: "元禾控股",
                    amount: "173000万元",
                    percent: "100%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            eid: "7e1f5e3b-b9b0-404d-adc5-de82393efc36",
            name: "霍尔果斯凯风进取创业投资有限公司",
            type: "E",
            short_name: "凯风进取创业投资",
            amount: "807.6万元",
            percent: "12.01%",
            sh_type: "工商股东",
            level: "1",
            children: [
              {
                eid: "714fc289-c1f4-4f13-bf58-7a1e4f31b630",
                name: "苏州元禾控股股份有限公司",
                type: "E",
                short_name: "元禾控股",
                amount: "7000万元",
                percent: "28.00%",
                sh_type: "工商股东",
                level: "2",
                children: [
                  {
                    eid: "3bbf1712-8ec6-4c62-8814-2e22c6f6d5c9",
                    name: "苏州工业园区经济发展有限公司",
                    type: "E",
                    short_name: "经济发展",
                    amount: "210000万元",
                    percent: "70.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "b1b64f60-9aff-45cc-9daf-a8c8bc3dd576",
                    name: "苏州工业园区国有资产控股发展有限公司",
                    type: "E",
                    short_name: "国有资产控股发展",
                    amount: "90000万元",
                    percent: "30.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  }
                ]
              },
              {
                eid: "507be026-2ea2-457c-ae32-fd253ea80285",
                name: "苏州金枫门窗有限公司",
                type: "E",
                short_name: "金枫门窗",
                amount: "6900万元",
                percent: "27.60%",
                sh_type: "工商股东",
                level: "2",
                children: [
                  {
                    eid: "",
                    name: "邱九芳",
                    type: "P",
                    short_name: "邱九芳",
                    amount: "210万元",
                    percent: "70.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "邱玥芳",
                    type: "P",
                    short_name: "邱玥芳",
                    amount: "90万元",
                    percent: "30.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  }
                ]
              },
              {
                eid: "6bef88b8-f5a1-468b-b7c0-f47525a17772",
                name: "浙江中纺控股集团有限公司",
                type: "E",
                short_name: "中纺控股",
                amount: "2050万元",
                percent: "8.20%",
                sh_type: "工商股东",
                level: "2",
                children: [
                  {
                    eid: "",
                    name: "姚卫中",
                    type: "P",
                    short_name: "姚卫中",
                    amount: "3556万元",
                    percent: "70.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "姚连干",
                    type: "P",
                    short_name: "姚连干",
                    amount: "1524万元",
                    percent: "30.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  }
                ]
              },
              {
                eid: "",
                name: "顾克强",
                type: "P",
                short_name: "顾克强",
                amount: "1750万元",
                percent: "7.00%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "e24e4b21-bb13-44cf-adf6-0c7f56598d99",
                name: "杭州海华花边有限公司",
                type: "E",
                short_name: "海华花边",
                amount: "1350万元",
                percent: "5.40%",
                sh_type: "工商股东",
                level: "2",
                children: [
                  {
                    eid: "",
                    name: "李智芸",
                    type: "P",
                    short_name: "李智芸",
                    amount: "500万元",
                    percent: "31.25%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "董玥",
                    type: "P",
                    short_name: "董玥",
                    amount: "500万元",
                    percent: "31.25%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "陆海啸",
                    type: "P",
                    short_name: "陆海啸",
                    amount: "500万元",
                    percent: "31.25%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "金献苏",
                    type: "P",
                    short_name: "金献苏",
                    amount: "100万元",
                    percent: "6.25%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  }
                ]
              },
              {
                eid: "e2f1781d-f791-4b52-a19c-ccd9f2b61fc2",
                name: "苏州常成置业有限公司",
                type: "E",
                short_name: "常成置业",
                amount: "1350万元",
                percent: "5.40%",
                sh_type: "工商股东",
                level: "2",
                children: [
                  {
                    eid: "",
                    name: "沈玉琴",
                    type: "P",
                    short_name: "沈玉琴",
                    amount: "10000万元",
                    percent: "100%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  }
                ]
              },
              {
                eid: "",
                name: "苏州金海德投资有限公司",
                type: "UE",
                short_name: "苏州金海德投资有限公司",
                amount: "1350万元",
                percent: "5.40%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "c16963d1-3720-4faa-9df3-d4e29cf6a191",
                name: "兰州天宝成投资有限责任公司",
                type: "E",
                short_name: "天宝成投资",
                amount: "1000万元",
                percent: "4.00%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "e6c491b4-2e0d-448e-8bf6-a45468db7f2b",
                name: "江阴市长丰投资有限公司",
                type: "E",
                short_name: "江阴市长丰投资",
                amount: "1000万元",
                percent: "4.00%",
                sh_type: "工商股东",
                level: "2",
                children: [
                  {
                    eid: "",
                    name: "周德秀",
                    type: "P",
                    short_name: "周德秀",
                    amount: "490万元",
                    percent: "49.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "孙阿兴",
                    type: "P",
                    short_name: "孙阿兴",
                    amount: "400万元",
                    percent: "40.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "金和良",
                    type: "P",
                    short_name: "金和良",
                    amount: "110万元",
                    percent: "11.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  }
                ]
              },
              {
                eid: "fa7815b7-8fe3-4159-8374-58d6437f1f1a",
                name: "苏州领潮文化传媒有限公司",
                type: "E",
                short_name: "领潮文化传媒",
                amount: "1000万元",
                percent: "4.00%",
                sh_type: "工商股东",
                level: "2",
                children: [
                  {
                    eid: "",
                    name: "陆惠英",
                    type: "P",
                    short_name: "陆惠英",
                    amount: "45万元",
                    percent: "90.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "陆敏浩",
                    type: "P",
                    short_name: "陆敏浩",
                    amount: "5万元",
                    percent: "10.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  }
                ]
              },
              {
                eid: "d9891cb1-cffa-4afd-90b9-b49ae78568db",
                name: "苏州凯风正德投资管理有限公司",
                type: "E",
                short_name: "凯风正德投资管理",
                amount: "250万元",
                percent: "1.00%",
                sh_type: "工商股东",
                level: "2",
                children: [
                  {
                    eid: "",
                    name: "姚骅",
                    type: "P",
                    short_name: "姚骅",
                    amount: "92.5万元",
                    percent: "37.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "苏州时通利合管理咨询有限公司",
                    type: "UE",
                    short_name: "苏州时通利合管理咨询有限公司",
                    amount: "75万元",
                    percent: "30.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "刘彪",
                    type: "P",
                    short_name: "刘彪",
                    amount: "32.5万元",
                    percent: "13.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "王亚雄",
                    type: "P",
                    short_name: "王亚雄",
                    amount: "32.5万元",
                    percent: "13.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  },
                  {
                    eid: "",
                    name: "赵贵宾",
                    type: "P",
                    short_name: "赵贵宾",
                    amount: "17.5万元",
                    percent: "7.00%",
                    sh_type: "工商股东",
                    level: "3",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            eid: "",
            name: "霍尔果斯乐程天下股权投资管理合伙企业（有限合伙）",
            type: "UE",
            short_name: "霍尔果斯乐程天下股权投资管理合伙企业（有限合伙）",
            amount: "594.84万元",
            percent: "8.85%",
            sh_type: "工商股东",
            level: "1",
            children: []
          },
          {
            eid: "",
            name: "吴剑",
            type: "P",
            short_name: "吴剑",
            amount: "417.42万元",
            percent: "6.21%",
            sh_type: "工商股东",
            level: "1",
            children: []
          },
          {
            eid: "",
            name: "张海龙",
            type: "P",
            short_name: "张海龙",
            amount: "417.42万元",
            percent: "6.21%",
            sh_type: "工商股东",
            level: "1",
            children: []
          },
          {
            eid: "",
            name: "王专",
            type: "P",
            short_name: "王专",
            amount: "417.42万元",
            percent: "6.21%",
            sh_type: "工商股东",
            level: "1",
            children: []
          },
          {
            eid: "",
            name: "马和平",
            type: "P",
            short_name: "马和平",
            amount: "318.18万元",
            percent: "4.73%",
            sh_type: "工商股东",
            level: "1",
            children: []
          },
          {
            eid: "f34a5e61-1632-4296-84c2-79d5ee696bda",
            name: "深圳市世纪凯旋科技有限公司",
            type: "E",
            short_name: "世纪凯旋科技",
            amount: "296.58万元",
            percent: "4.41%",
            sh_type: "工商股东",
            level: "1",
            children: [
              {
                eid: "",
                name: "马化腾",
                type: "P",
                short_name: "马化腾",
                amount: "597.1427万元",
                percent: "54.29%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "张志东",
                type: "P",
                short_name: "张志东",
                amount: "251.4281万元",
                percent: "22.86%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "许晨晔",
                type: "P",
                short_name: "许晨晔",
                amount: "125.7146万元",
                percent: "11.43%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "陈一丹",
                type: "P",
                short_name: "陈一丹",
                amount: "125.7146万元",
                percent: "11.43%",
                sh_type: "工商股东",
                level: "2",
                children: []
              }
            ]
          },
          {
            eid: "",
            name: "成都晟唐银科创业投资企业（有限合伙））",
            type: "UE",
            short_name: "成都晟唐银科创业投资企业（有限合伙））",
            amount: "120万元",
            percent: "1.78%",
            sh_type: "工商股东",
            level: "1",
            children: []
          },
          {
            eid: "361a58ce-9e6d-4c4f-b105-5286701cfbdc",
            name: "苏州凯风万盛创业投资合伙企业（有限合伙）",
            type: "E",
            short_name: "凯风万盛创业投资",
            amount: "120万元",
            percent: "1.78%",
            sh_type: "工商股东",
            level: "1",
            children: []
          },
          {
            eid: "b5d5d864-92f8-48e0-85e5-c8d1e822d4e0",
            name: "苏州工业园区特程万里投资管理有限公司",
            type: "E",
            short_name: "特程万里投资管理",
            amount: "118.62万元",
            percent: "1.76%",
            sh_type: "工商股东",
            level: "1",
            children: [
              {
                eid: "",
                name: "吴剑",
                type: "P",
                short_name: "吴剑",
                amount: "20.1万元",
                percent: "10.05%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "吴志祥",
                type: "P",
                short_name: "吴志祥",
                amount: "20.1万元",
                percent: "10.05%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "张海龙",
                type: "P",
                short_name: "张海龙",
                amount: "20.1万元",
                percent: "10.05%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "王专",
                type: "P",
                short_name: "王专",
                amount: "20.1万元",
                percent: "10.05%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "马和平",
                type: "P",
                short_name: "马和平",
                amount: "20.1万元",
                percent: "10.05%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "柏陈",
                type: "P",
                short_name: "柏陈",
                amount: "8万元",
                percent: "4.00%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "陈鸾",
                type: "P",
                short_name: "陈鸾",
                amount: "8万元",
                percent: "4.00%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "李久健",
                type: "P",
                short_name: "李久健",
                amount: "6万元",
                percent: "3.00%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "贝玲",
                type: "P",
                short_name: "贝玲",
                amount: "6万元",
                percent: "3.00%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "孙红霞",
                type: "P",
                short_name: "孙红霞",
                amount: "5万元",
                percent: "2.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "曲丽丽",
                type: "P",
                short_name: "曲丽丽",
                amount: "5万元",
                percent: "2.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "李运动",
                type: "P",
                short_name: "李运动",
                amount: "5万元",
                percent: "2.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "陈明珠",
                type: "P",
                short_name: "陈明珠",
                amount: "5万元",
                percent: "2.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "靳彩娟",
                type: "P",
                short_name: "靳彩娟",
                amount: "5万元",
                percent: "2.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "马诚磊",
                type: "P",
                short_name: "马诚磊",
                amount: "5万元",
                percent: "2.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "刘学",
                type: "P",
                short_name: "刘学",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "季国良",
                type: "P",
                short_name: "季国良",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "张婷婷",
                type: "P",
                short_name: "张婷婷",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "张晓敏",
                type: "P",
                short_name: "张晓敏",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "张玲娜",
                type: "P",
                short_name: "张玲娜",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "杨佳佳",
                type: "P",
                short_name: "杨佳佳",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "柏敏",
                type: "P",
                short_name: "柏敏",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "武郭良",
                type: "P",
                short_name: "武郭良",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "许卉",
                type: "P",
                short_name: "许卉",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "赵静",
                type: "P",
                short_name: "赵静",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "郭琼",
                type: "P",
                short_name: "郭琼",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "郭瑞山",
                type: "P",
                short_name: "郭瑞山",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "金烨",
                type: "P",
                short_name: "金烨",
                amount: "3万元",
                percent: "1.50%",
                sh_type: "工商股东",
                level: "2",
                children: []
              },
              {
                eid: "",
                name: "马晶晶",
                type: "P",
                short_name: "马晶晶",
                amount: "2.5万元",
                percent: "1.25%",
                sh_type: "工商股东",
                level: "2",
                children: []
              }
            ]
          },
          {
            eid: "",
            name: "霍尔果斯业程股权投资管理合伙企业（有限合伙）",
            type: "UE",
            short_name: "霍尔果斯业程股权投资管理合伙企业（有限合伙）",
            amount: "118.62万元",
            percent: "1.76%",
            sh_type: "工商股东",
            level: "1",
            children: []
          },
          {
            eid: "",
            name: "霍尔果斯青程股权投资管理合伙企业（有限合伙）",
            type: "UE",
            short_name: "霍尔果斯青程股权投资管理合伙企业（有限合伙）",
            amount: "118.62万元",
            percent: "1.76%",
            sh_type: "工商股东",
            level: "1",
            children: []
          }
        ]
      }
    };
  },
  methods: {
    /* 创建图谱*/
    createInitChart() {
      this.deepThreeData(this.threeData);
      this.myChart = this.echarts.init(this.$refs.myChart);
      var option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
          formatter: function() {}
        },
        calculable: true,
        series: [
          {
            top: 0,
            left: 0,
            right: 0,
            bottom: 90,
            // symbol: (value, params) => {
            // }, //节点形状  'image://url'图片
            symbolSize: 20,
            symbolOffset: [0, -40], //节点偏移度
            type: "tree",
            layout: "orthogonal",
            data: [this.threeData],
            // symbol: 'emptyCircle',
            edgeShape: "curve", //正交边缘的形状polyline
            orient: "BT",
            roam: true, // 缩放
            // edgeForkPosition: "0%", //段分叉的位置。这里的位置指的是分叉点与子树父节点的距离占整个子树高度的百分比
            expandAndCollapse: true,
            symbolKeepAspect: true,
            initialTreeDepth: 1, //树图初始展开的层级（深度）。根节点是第 0 层
            scaleLimit: {
              min: 0.5, //最小的缩放值
              max: 1 //最大的缩放值
            },
            lineStyle: {
              //边的样式
              curveness: 0.9 //弯曲度
            },
            itemStyle: {
              //节点样式
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#FFFFFF" // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "#2FA4F3" // 50% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#FFFFFF" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              },
              shadowColor: "#2FA4F3",
              borderColor: "#fff",
              shadowBlur: 8,
              opacity: 0.9
            },
            label: {
              //节点所对应的文本标签的样式
              borderColor: "#777",
              borderWidth: 1,
              // position: 'left',//左右布局
              position: "top", //垂直布局
              verticalAlign: "middle",
              align: "center",
              distance: -63, //距离节点图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效
              // fontSize: 20,
              rich: {
                //对每个格式化键样式设置
                /* title不足2排 */
                levelTitle: {
                  //第一层节点
                  fontSize: 12,
                  backgroundColor: "#65A1EA",
                  height: 40,
                  lineHeight: 40,
                  width: 160,
                  align: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  borderColor: "#65A1EA"
                },
                flaseTitle: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  align: "center",
                  height: 40,
                  lineHeight: 40,
                  width: 160,
                  color: "#000",
                  fontWeight: "bold",
                  borderWidth: 0
                },
                title: {
                  fontSize: 12,
                  backgroundColor: "#FFF",
                  align: "center",
                  height: 20,
                  lineHeight: 20,
                  width: 160,
                  color: "#000",
                  fontWeight: "bold",
                  borderWidth: 0
                },
                context1: {
                  fontSize: 12,
                  backgroundColor: "#fff",
                  align: "center",
                  height: 20,
                  lineHeight: 20,
                  width: 160,
                  color: "#000"
                },
                context2: {
                  fontSize: 12,
                  backgroundColor: "#fff",
                  align: "center",
                  height: 20,
                  lineHeight: 20,
                  width: 160,
                  color: "#000"
                },
                after: {
                  //伪类
                  height: 4,
                  width: 160,
                  backgroundColor: "#65A1EA"
                }
              },
              formatter: function(params) {
                if (
                  params.data.level === "0" &&
                  params.data.short_name.length < 12
                ) {
                  return "{levelTitle|" + params.data.short_name + "}";
                } else if (params.data.level === "0") {
                  return (
                    "{levelTitle|" +
                    params.data.short_name.substring(0, 12) +
                    "\n" +
                    params.data.short_name.substring(12) +
                    "}"
                  );
                }
                //标签内容格式器'\n'换行
                return (
                  `${
                    params.data.short_name.length > 12
                      ? "{title|" +
                        params.data.short_name.substring(0, 12) +
                        "\n" +
                        params.data.short_name.substring(12)
                      : "{flaseTitle|" + params.data.short_name
                  }}` +
                  "\n" +
                  "{context1|" +
                  `${
                    params.data.sh_type ? `关系:${params.data.sh_type}` : ""
                  }` +
                  "}" +
                  "\n" +
                  "{context2|" +
                  `${
                    params.data.percent ? `股权：${params.data.percent}` : "无"
                  }` +
                  "}" +
                  "\n" +
                  "{after|}"
                );
              }
            },
            leaves: {
              label: {
                // position: 'left',
                // verticalAlign: 'middle',
                // align: 'right'
              }
            },
            emphasis: {
              label: {
                borderColor: "#65A1EA",
                borderWidth: 2,
                rich: {
                  //对每个格式化键样式设置
                  /* title不足2排 */
                  levelTitle: {
                    //第一层节点
                    fontSize: 12,
                    backgroundColor: "#65A1EA",
                    height: 40,
                    lineHeight: 40,
                    width: 160,
                    align: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    borderColor: "#65A1EA"
                  },
                  flaseTitle: {
                    fontSize: 12,
                    backgroundColor: "#FFF",
                    align: "center",
                    height: 40,
                    lineHeight: 40,
                    width: 160,
                    color: "#000",
                    fontWeight: "bold",
                    borderWidth: 0
                  },
                  title: {
                    fontSize: 12,
                    backgroundColor: "#FFF",
                    align: "center",
                    height: 20,
                    lineHeight: 20,
                    width: 160,
                    color: "#000",
                    fontWeight: "bold",
                    borderWidth: 0
                  },
                  context1: {
                    fontSize: 12,
                    backgroundColor: "#fff",
                    align: "center",
                    height: 20,
                    lineHeight: 20,
                    width: 160,
                    color: "#000"
                  },
                  context2: {
                    fontSize: 12,
                    backgroundColor: "#fff",
                    align: "center",
                    height: 20,
                    lineHeight: 20,
                    width: 160,
                    color: "#000"
                  },
                  after: {
                    //伪类
                    height: 4,
                    width: 160,
                    backgroundColor: "#65A1EA"
                  }
                },
                formatter: function(params) {
                  if (
                    params.data.level === "0" &&
                    params.data.short_name.length < 12
                  ) {
                    return "{levelTitle|" + params.data.short_name + "}";
                  } else if (params.data.level === "0") {
                    return (
                      "{levelTitle|" +
                      params.data.short_name.substring(0, 12) +
                      "\n" +
                      params.data.short_name.substring(12) +
                      "}"
                    );
                  }
                  //标签内容格式器'\n'换行
                  return (
                    `${
                      params.data.short_name.length > 12
                        ? "{title|" +
                          params.data.short_name.substring(0, 12) +
                          "\n" +
                          params.data.short_name.substring(12)
                        : "{flaseTitle|" + params.data.short_name
                    }}` +
                    "\n" +
                    "{context1|" +
                    `${
                      params.data.sh_type ? `关系:${params.data.sh_type}` : ""
                    }` +
                    "}" +
                    "\n" +
                    "{context2|" +
                    `${
                      params.data.percent
                        ? `股权：${params.data.percent}`
                        : "无"
                    }` +
                    "}" +
                    "\n" +
                    "{after|}"
                  );
                }
              }
            },
            animationDurationUpdate: 1000
          }
        ]
      };
      this.myChart.setOption(option);
      /*  自适应 */
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
      this.myChart.on("click", this.handelNodeClick);
      this.changeCHW();
      this.myChart.resize();
    },
    /* 找到数组中出现次数最多的元素和次数 */
    GetArrayMost(arr) {
      var arrMap = new Map();
      var key = arr[0],
        value = 1;
      arr.forEach(item => {
        if (arrMap.get(item) !== undefined) {
          let num = arrMap.get(item);
          arrMap.set(item, ++num);
        } else {
          arrMap.set(item, 1);
        }
        if (arrMap.get(item) > value) {
          key = item;
          value = arrMap.get(item);
        }
      });
      return [key, value];
    },
    /* 改变canvas高度宽度 */
    changeCHW() {
      let expandNode = []; //收集所有展开的节点的层级
      let allNodes = this.myChart._chartsViews[0]._data.tree._nodes; //所有节点信息。包括层级，是否展开
      function setStatus(obj) {
        for (let i of obj) {
          if (!i.isExpand && i.children) {
            //如果此层为收缩状态，后面所有的子级都为收缩状态
            for (let j of i.children) {
              j.isExpand = false;
              if (j.children) {
                setStatus(j.children);
              }
            }
          } else {
            for (let x of i.children) {
              expandNode.push(x.depth);
            }
          }
        }
      }
      setStatus(allNodes);
      var allNode = [];
      var nodes = this.myChart._chartsViews[0]._data._graphicEls;
      for (var i = 0, count = nodes.length; i < count; i++) {
        var node = nodes[i];
        if (node === undefined) continue;
        allNode++;
      }
      var container = this.$refs.myChart;
      container.style.transform = `scale(${this.ratio})`;
      const currentHeight = 150 * Math.max.apply(null, expandNode); //现在的层级，每一层高度加300
      const currentWidth = 170 * allNode;
      const newHeight = Math.max(currentHeight, this.initHeight);
      const newWidth = Math.max(currentWidth, this.initWidth);
      container.style.height = newHeight + "px";
      container.style.width = newWidth + "px";
      this.myChart.resize();
    },
    /* 处理后台返回的图谱数据 */
    deepThreeData(obj) {
      /* 如果是对象不循环 */
      if (obj instanceof Object && !(obj instanceof Array)) {
        if (obj.children.length !== 0) {
          obj.level === "0"
            ? ((obj.symbol = this.refreshSvg), (obj.symbolSize = 0.1))
            : (obj.symbol = this.addSvg); //第一级打开状态，所以是del，并且展开
          this.deepThreeData(obj.children);
        } else {
          obj.symbol = this.delSvg;
        }
      } else {
        for (let i of obj) {
          i;
          if (i.children.length !== 0) {
            i.symbol = this.addSvg;
            this.deepThreeData(i.children);
          } else {
            i.symbol = this.delSvg;
          }
        }
      }
    },
    /* 节点点击 */
    handelNodeClick(params) {
      if (params.data.level === "0") {
        //点击到根节点，禁止回缩树
        this.myChart._chartsViews[0]._data.tree._nodes[1].isExpand = true;
      }
      if (params.componentType === "series") {
        /* 改变节点图片 */
        if (params.data.children.length !== 0 && params.data.level !== "0") {
          params.data.symbol === this.addSvg
            ? (params.data.symbol = this.delSvg)
            : (params.data.symbol = this.addSvg);
          this.myChart.resize();
        }
        // 点击到了 series 上 改变高度
        if (!params.value) {
          this.changeCHW();
        }
      }
    },
    /* 放大缩小 */
    handelToBigToSmall(type) {
      var height = window.innerHeight;
      let myChart = this.$refs.myChart; //图
      if (type === "big") {
        if (this.ratio > 0.99) return; //限制最多放大到1倍
        this.ratio += 0.1;
        this.$refs.tree_view.style.height = height * this.ratio;
        myChart.style.transform = `scale(${this.ratio})`;
      } else {
        if (this.ratio < 0.6) return; //限制最多缩小到0.5倍
        this.ratio -= 0.1;
        this.$refs.tree_view.style.height = height * this.ratio;
        myChart.style.transform = `scale(${this.ratio})`;
      }
    },
    /* 还原 */
    handelResizeC() {
      this.show = false;
      this.$nextTick(async () => {
        await (this.show = true);
        this.ratio = 1;
        this.createInitChart();
      });
    }
  },
  created() {
    /* 初始化宽高 */
    this.$nextTick(async () => {
      await (this.show = true);
      this.createInitChart();
      this.initHeight = this.$refs.myChart.getBoundingClientRect().height; //初始宽高
      this.initWidth = this.$refs.myChart.getBoundingClientRect().width;
    });
  }
};
</script>

<style lang="less" scoped>
#myChart {
  width: 100%;
  height: 250px;
}
.tree-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .chartsControl {
    width: 50px;
    padding: 10px 0;
    height: 200px;
    display: flex;
    position: fixed;
    right: 0;
    top: 50%;
    z-index: 999999;
    background-color: rgba(0, 0, 0, 0.1);
    .chartsControl-menu {
      list-style: none;
      display: flex;
      flex-flow: nowrap column;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      li {
        display: flex;
        flex-flow: nowrap column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
</style>