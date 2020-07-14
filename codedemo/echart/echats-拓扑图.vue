<template>
  <div id="graph" style="width:100%;height:100%"></div>
</template>
    
<script>
export default {
  data() {
    return {
      /* 获取到的股东关系 */
      requestNode: {
        eid: "534472fd-7d53-4958-8132-d6a6242423d8",
        name: "小米科技有限责任公司",
        type: "E",
        has_problem: "0",
        short_name: "小米科技",
        identifier: "1",
        p_trees: [
          {
            eid: "null",
            name: "雷军",
            type: "P",
            has_problem: "0",
            short_name: "雷军",
            amount: "143934.0478",
            percent: "0.778",
            sh_type: "工商股东",
            level: "1",
            identifier: "2",
            items: []
          },
          {
            eid: "null",
            name: "黎万强",
            type: "P",
            has_problem: "0",
            short_name: "黎万强",
            amount: "18724.3569",
            percent: "0.1012",
            sh_type: "工商股东",
            level: "1",
            identifier: "3",
            items: []
          },
          {
            eid: "null",
            name: "洪锋",
            type: "P",
            has_problem: "0",
            short_name: "洪锋",
            amount: "18623.099",
            percent: "0.1007",
            sh_type: "工商股东",
            level: "1",
            identifier: "4",
            items: []
          },
          {
            eid: "null",
            name: "刘德",
            type: "P",
            has_problem: "0",
            short_name: "刘德",
            amount: "3718.4963",
            percent: "0.0201",
            sh_type: "工商股东",
            level: "1",
            identifier: "5",
            items: []
          }
        ],
        c_trees: [
          {
            eid: "8ee84f74-d12e-41fd-aeee-21cc20958786",
            name: "四川银米科技有限责任公司",
            type: "E",
            has_problem: "0",
            short_name: "银米科技",
            amount: "200000",
            percent: "1",
            sh_type: "原工商股东",
            level: "1",
            identifier: "7",
            items: [
              {
                eid: "54a944d3-03bb-49b8-9ad0-09231c9b6d6d",
                name: "四川新网银行股份有限公司",
                type: "E",
                has_problem: "0",
                short_name: "四川新网银行股份",
                amount: "88500.0",
                percent: "0.295",
                sh_type: "工商股东",
                level: "2",
                identifier: "8",
                items: []
              },
              {
                eid: "e3817e77-86dc-4210-8fdf-5aea9551eada",
                name: "北京小米保险经纪有限公司",
                type: "E",
                has_problem: "0",
                short_name: "小米保险经纪",
                amount: "5000.0",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "9",
                items: []
              },
              {
                eid: "acf905fe-0145-4648-a9dd-1954ebf1ea48",
                name: "上海小米金融信息服务有限公司",
                type: "E",
                has_problem: "0",
                short_name: "小米金融信息服务",
                amount: "3000",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "10",
                items: []
              },
              {
                eid: "e1d69dad-7539-4e66-9b76-5669b5de8962",
                name: "上海米筹互联网金融服务股份有限公司",
                type: "E",
                has_problem: "0",
                short_name: "米筹互联网金融服",
                amount: "2000.0",
                percent: "0.2",
                sh_type: "工商股东",
                level: "2",
                identifier: "11",
                items: [
                  {
                    eid: "d8dd0caf-3a7d-4841-8f1f-413df62fbcd5",
                    name: "上海乐盈资产管理有限公司",
                    type: "E",
                    has_problem: "0",
                    short_name: "乐盈资产管理",
                    amount: "1000",
                    percent: "1",
                    sh_type: "工商股东",
                    level: "3",
                    identifier: "12",
                    items: []
                  },
                  {
                    eid: "d7acdabb-7631-4d25-9883-1eaa55953c36",
                    name: "上海八刀网络技术有限公司",
                    type: "E",
                    has_problem: "0",
                    short_name: "上海八刀网络技术",
                    amount: "100.0",
                    percent: "1",
                    sh_type: "工商股东",
                    level: "3",
                    identifier: "13",
                    items: []
                  },
                  {
                    eid: "3e44df5e-9f18-479a-a979-9877b9a38ce0",
                    name: "上海坤图贸易有限公司",
                    type: "E",
                    has_problem: "0",
                    short_name: "上海坤图贸易有限",
                    amount: "100.0",
                    percent: "1",
                    sh_type: "工商股东",
                    level: "3",
                    identifier: "14",
                    items: []
                  }
                ]
              }
            ]
          },
          {
            eid: "a9443222-29d9-4722-96f2-221ec9e389b8",
            name: "珠海小米金融科技有限公司",
            type: "E",
            has_problem: "0",
            short_name: "珠海小米金融科技",
            amount: "30000",
            percent: "1",
            sh_type: "原工商股东",
            level: "1",
            identifier: "325",
            items: [
              {
                eid: "3be3bc20-7e04-4978-a124-790570a2de75",
                name: "珠海小米小额贷款有限公司",
                type: "E",
                has_problem: "0",
                short_name: "珠海小米小额贷款",
                amount: "30000",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "326",
                items: []
              }
            ]
          },
          {
            eid: "527baee4-8d0c-4b6a-8eb4-582ae1fc4718",
            name: "北京小米支付技术有限公司",
            type: "E",
            has_problem: "0",
            short_name: "小米支付技术",
            amount: "10000",
            percent: "1",
            sh_type: "原工商股东",
            level: "1",
            identifier: "327",
            items: []
          },
          {
            eid: "43f8b1f8-5315-4f87-809d-50239eeb1ec9",
            name: "重庆小米商业保理有限公司",
            type: "E",
            has_problem: "0",
            short_name: "重庆小米商业保理",
            amount: "10000.0",
            percent: "1",
            sh_type: "原工商股东",
            level: "1",
            identifier: "328",
            items: []
          },
          {
            eid: "229ac970-c2ac-4854-a0cf-2cbcbbb86e42",
            name: "小米信用管理有限公司",
            type: "E",
            has_problem: "0",
            short_name: "小米信用管理",
            amount: "5000",
            percent: "1",
            sh_type: "原工商股东",
            level: "1",
            identifier: "555",
            items: []
          },
          {
            eid: "aa91087d-32a8-4339-9e5c-4e6578031b27",
            name: "成都倍达资产管理有限公司",
            type: "E",
            has_problem: "0",
            short_name: "成都倍达资产管理",
            amount: "5000",
            percent: "1",
            sh_type: "原工商股东",
            level: "1",
            identifier: "556",
            items: []
          },
          {
            eid: "e7b34b62-d83f-44de-95b4-a947c4e29439",
            name: "深圳英鹏信息技术股份有限公司",
            type: "E",
            has_problem: "0",
            short_name: "英鹏信息技术",
            amount: "289.7438",
            percent: "0.246",
            sh_type: "原工商股东",
            level: "1",
            identifier: "557",
            items: []
          },
          {
            eid: "03ea3570-2716-413a-9cc4-51eea07001c3",
            name: "上海迈外迪网络科技有限公司",
            type: "E",
            has_problem: "0",
            short_name: "迈外迪网络科技",
            amount: "149.3606",
            percent: "0.0639",
            sh_type: "原工商股东",
            level: "1",
            identifier: "567",
            items: [
              {
                eid: "083da6ca-0478-44c2-b1e3-e8a48c46909c",
                name: "上海迈外迪佑康网络科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "迈外迪佑康网络科",
                amount: "667.02362545",
                percent: "0.6035",
                sh_type: "工商股东",
                level: "2",
                identifier: "568",
                items: []
              },
              {
                eid: "3f01cb90-e7f7-4776-b9cd-abc45f535961",
                name: "天津迈博远瞻科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "迈博远瞻科技",
                amount: "200.0",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "569",
                items: []
              },
              {
                eid: "240bf1a6-710f-4b81-82dd-df980cd94aed",
                name: "上海迈外迪协力网络科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "迈外迪协力网络科",
                amount: "100",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "570",
                items: []
              },
              {
                eid: "4ef012f6-dccc-4141-8140-ab0949cd5283",
                name: "重庆迈外迪网络科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "迈外迪网络科技",
                amount: "51.0",
                percent: "0.51",
                sh_type: "工商股东",
                level: "2",
                identifier: "571",
                items: []
              },
              {
                eid: "583b7657-f35d-44fe-8f06-06567e5d8e64",
                name: "天津微商通联科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "微商通联科技",
                amount: "50.0",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "572",
                items: []
              },
              {
                eid: "716776c8-b8b3-4a01-8933-492b9afd5c58",
                name: "北京迈外迪高翔网络科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "迈外迪高翔网络科",
                amount: "36.0",
                percent: "0.36",
                sh_type: "工商股东",
                level: "2",
                identifier: "573",
                items: []
              },
              {
                eid: "e23b6007-c943-49a1-bc2f-9b3d479cc2b6",
                name: "上海等等网络科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "等等网络科技",
                amount: "35.0",
                percent: "0.35",
                sh_type: "工商股东",
                level: "2",
                identifier: "574",
                items: []
              },
              {
                eid: "0fae9043-e9b5-4efc-9fb5-b68e7a3b5bfc",
                name: "杭州鼎码科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "鼎码科技",
                amount: "35.0",
                percent: "0.35",
                sh_type: "工商股东",
                level: "2",
                identifier: "575",
                items: []
              },
              {
                eid: "7e83c090-c614-41ed-a72a-094f32db9584",
                name: "客如云科技（北京）股份有限公司",
                type: "E",
                has_problem: "0",
                short_name: "客如云科技",
                amount: "",
                percent: "",
                sh_type: "工商股东",
                level: "2",
                identifier: "576",
                items: [
                  {
                    eid: "7d6c3e0b-4be6-4b12-8969-92ce84f363c4",
                    name: "客如云科技（成都）有限责任公司",
                    type: "E",
                    has_problem: "0",
                    short_name: "客如云科技",
                    amount: "1000",
                    percent: "1",
                    sh_type: "工商股东",
                    level: "3",
                    identifier: "577",
                    items: []
                  },
                  {
                    eid: "775f6b6e-ff59-44e0-a498-313c312d2cd6",
                    name: "客如云科技（深圳）有限责任公司",
                    type: "E",
                    has_problem: "0",
                    short_name: "客如云科技",
                    amount: "1000.0",
                    percent: "1",
                    sh_type: "工商股东",
                    level: "3",
                    identifier: "578",
                    items: []
                  },
                  {
                    eid: "e05f6c05-fda0-42ce-b6df-da89e718f442",
                    name: "客如云科技（北京）股份有限公司深圳分公司",
                    type: "E",
                    has_problem: "0",
                    short_name: "客如云科技",
                    amount: "",
                    percent: "",
                    sh_type: "工商股东",
                    level: "3",
                    identifier: "579",
                    items: []
                  }
                ]
              },
              {
                eid: "e299d125-b524-4cbc-8ad8-5de4464fe5c4",
                name: "深圳杰睿联科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "深圳杰睿联科技有",
                amount: "",
                percent: "",
                sh_type: "工商股东",
                level: "2",
                identifier: "580",
                items: [
                  {
                    eid: "ebfb0823-0b0c-4c2d-933c-1527566539e0",
                    name: "上海红茶网络科技有限公司",
                    type: "E",
                    has_problem: "0",
                    short_name: "红茶网络科技",
                    amount: "2010.64",
                    percent: "1",
                    sh_type: "工商股东",
                    level: "3",
                    identifier: "581",
                    items: []
                  }
                ]
              }
            ]
          },
          {
            eid: "9e4038ac-8ed8-44ab-92b0-9f65449d4dc9",
            name: "江苏紫米电子技术有限公司",
            type: "E",
            has_problem: "0",
            short_name: "紫米电子技术",
            amount: "136.37",
            percent: "0.1932",
            sh_type: "原工商股东",
            level: "1",
            identifier: "582",
            items: [
              {
                eid: "477a2ab7-b093-43fc-bc32-1f71b06cad42",
                name: "江苏紫米软件技术有限公司",
                type: "E",
                has_problem: "0",
                short_name: "紫米软件技术",
                amount: "1000",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "583",
                items: []
              },
              {
                eid: "f2a5c702-8aca-47f9-b01e-e17d6f40baa8",
                name: "西安蜂语信息科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "蜂语信息科技",
                amount: "44.284",
                percent: "0.0829",
                sh_type: "工商股东",
                level: "2",
                identifier: "584",
                items: []
              },
              {
                eid: "51ccd8fc-4124-4873-8530-fb6497d2d608",
                name: "舒可士（深圳）科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "舒可士（深圳）科",
                amount: "32.1846",
                percent: "0.0333",
                sh_type: "工商股东",
                level: "2",
                identifier: "585",
                items: []
              },
              {
                eid: "08b1d4e0-89cd-4bde-8009-14e5484c1bf3",
                name: "珠海小猴科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "小猴科技",
                amount: "30.0",
                percent: "0.0783",
                sh_type: "工商股东",
                level: "2",
                identifier: "586",
                items: []
              },
              {
                eid: "359d4ae0-b9fe-4716-afc5-dcbea712131f",
                name: "南京酷科电子科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "酷科电子科技",
                amount: "3.0",
                percent: "0.3",
                sh_type: "工商股东",
                level: "2",
                identifier: "587",
                items: []
              }
            ]
          },
          {
            eid: "6817f366-b63b-48d5-9b13-3366abcc52c2",
            name: "西藏小米科技有限责任公司",
            type: "E",
            has_problem: "0",
            short_name: "小米科技",
            amount: "100.0",
            percent: "1",
            sh_type: "原工商股东",
            level: "1",
            identifier: "588",
            items: []
          },
          {
            eid: "61a91c81-0840-4d03-b2d8-a48933b5c6cd",
            name: "英鹏互娱科技（北京）有限公司",
            type: "E",
            has_problem: "0",
            short_name: "英鹏互娱科技",
            amount: "15.78",
            percent: "0.0158",
            sh_type: "原工商股东",
            level: "1",
            identifier: "589",
            items: [
              {
                eid: "a9258ecc-cbd1-4d12-b453-98e5b82ed509",
                name: "上海英鹏网络科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "英鹏网络科技",
                amount: "50",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "590",
                items: []
              }
            ]
          },
          {
            eid: "ec47c04c-5877-419e-9c62-d1ab17d348aa",
            name: "北京创派力量科技有限公司",
            type: "E",
            has_problem: "0",
            short_name: "创派力量科技",
            amount: "",
            percent: "",
            sh_type: "原工商股东",
            level: "1",
            identifier: "591",
            items: [
              {
                eid: "9d2ba85e-3271-4158-9856-a3788f378b73",
                name: "北京尖叫力量文化传播有限公司",
                type: "E",
                has_problem: "0",
                short_name: "尖叫力量文化传播",
                amount: "100",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "592",
                items: [
                  {
                    eid: "cb76edaa-62b6-4e40-824a-8abb5981ea5e",
                    name: "北京爆品企业管理咨询有限公司",
                    type: "E",
                    has_problem: "0",
                    short_name: "爆品企业管理咨询",
                    amount: "67.0",
                    percent: "0.67",
                    sh_type: "工商股东",
                    level: "3",
                    identifier: "593",
                    items: []
                  }
                ]
              },
              {
                eid: "6941643e-cadd-4036-879a-4f9fa8e9254f",
                name: "杭州金小米文化创意有限公司",
                type: "E",
                has_problem: "0",
                short_name: "金小米文化创意",
                amount: "100",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "594",
                items: []
              },
              {
                eid: "794a00ce-fd69-4744-9193-65d91f8f05dc",
                name: "杭州金错刀科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "金错刀科技",
                amount: "7.5",
                percent: "0.15",
                sh_type: "工商股东",
                level: "2",
                identifier: "595",
                items: []
              }
            ]
          },
          {
            eid: "a34fb8c4-4432-4486-9ce2-b3741b1ba231",
            name: "小米科技有限责任公司深圳分公司",
            type: "E",
            has_problem: "0",
            short_name: "小米科技",
            amount: "",
            percent: "",
            sh_type: "原工商股东",
            level: "1",
            identifier: "596",
            items: []
          },
          {
            eid: "946da789-6559-47c0-9a55-6cc3c0a51231",
            name: "成都西米互动科技有限公司",
            type: "E",
            has_problem: "0",
            short_name: "西米互动科技",
            amount: "",
            percent: "",
            sh_type: "原工商股东",
            level: "1",
            identifier: "597",
            items: [
              {
                eid: "76573512-4d21-4373-9bf0-9b38bf0f051f",
                name: "海南棋妙互动科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "海南棋妙互动科技",
                amount: "100.0",
                percent: "1",
                sh_type: "工商股东",
                level: "2",
                identifier: "598",
                items: []
              }
            ]
          },
          {
            eid: "d82ab834-f731-4c33-bb12-227c9873141c",
            name: "深圳英鹏互娱科技有限公司",
            type: "E",
            has_problem: "0",
            short_name: "英鹏互娱科技",
            amount: "",
            percent: "",
            sh_type: "原工商股东",
            level: "1",
            identifier: "599",
            items: [
              {
                eid: "6e9dee3c-0489-4f26-a1c6-abe6f456cffe",
                name: "深圳英鹏玩聚互娱科技有限公司",
                type: "E",
                has_problem: "0",
                short_name: "英鹏玩聚互娱科技",
                amount: "25.5",
                percent: "0.51",
                sh_type: "工商股东",
                level: "2",
                identifier: "600",
                items: []
              },
              {
                eid: "9a71aae6-591f-42c4-9906-d821538021bb",
                name: "深圳市一零二四信息技术有限公司",
                type: "E",
                has_problem: "0",
                short_name: "一零二四信息技术",
                amount: "3.0769",
                percent: "0.02",
                sh_type: "工商股东",
                level: "2",
                identifier: "601",
                items: []
              }
            ]
          },
          {
            eid: "8e3dd1ce-8127-42c6-9db6-642990e98f00",
            name: "湖北小米长江产业基金合伙企业（有限合伙）",
            type: "E",
            has_problem: "0",
            short_name: "湖北小米长江产业",
            amount: "",
            percent: "",
            sh_type: "原工商股东",
            level: "1",
            identifier: "602",
            items: [
              {
                eid: "3ce1a416-e0ef-4a22-9380-40917c938867",
                name: "湖北嘉月股权投资合伙企业（有限合伙）",
                type: "E",
                has_problem: "0",
                short_name: "湖北嘉月股权投资",
                amount: "",
                percent: "",
                sh_type: "工商股东",
                level: "2",
                identifier: "603",
                items: []
              }
            ]
          }
        ]
      },
      nodes: [
        {
          name: "小米科技有限责任公司",
          symbolSize: 50
          // value: [],//数据项值。
        },
        {
          name: "雷军",
          symbolSize: 50
        },
        {
          name: "黎万强",
          symbolSize: 50
        },
        {
          name: "洪锋",
          symbolSize: 50
        },
        {
          name: "刘德",
          symbolSize: 50
        }
      ],
      edges: [
        {
          //节点间的关系数据
          source: "小米科技有限责任公司", //边的源节点名称的字符串，也支持使用数字表示源节点的索引。
          target: "雷军", //边的目标节点名称的字符串，也支持使用数字表示源节点的索引。
          value: 200, //边的数值，可以在力引导布局中用于映射到边的长度。
          lineStyle: {}, //关系边的线条样式。
          label: {} //边上标签样式
        },
        {
          source: "小米科技有限责任公司",
          target: "黎万强"
        },
        {
          source: "小米科技有限责任公司",
          target: "洪锋"
        },
        {
          source: "小米科技有限责任公司",
          target: "刘德"
        }
      ]
    };
  },
  methods: {
    handleNodeClick(parmas) {
      //点击事件
      if (parmas.dataType === "node") {
        //判断点击到节点上
        console.log(parmas, this.myChart);
      }
    },
    handleFocusnodeadjacency(parmas) {
      //高亮触发
      console.log(parmas);
    },
    handleUnfocusnodeadjacency(parmas) {
      //取消高亮触发
      console.log(parmas);
    },
    /* 解析后台返回的图谱格式 */
    analysis(Obj) {
      let initNodes = []; //nodes
      let initedges = []; //edges
      let edgeObj = {};
      let nodeObj = {};
      nodeObj = {
        name: Obj.name,
        des: Obj.name,
        // symbolSize: 50,
        category: 0 //数据项所在类目的 index。
        // value: [],//数据项值。
      };
      initNodes.push(nodeObj);
      deep(Obj.c_trees, Obj.name, "c_trees");
      deep(Obj.p_trees, Obj.name, "p_trees");
      function deep(obj, name, type) {
        if (obj instanceof Object && !(obj instanceof Array)) {
          nodeObj = {
            name: obj.name,
            relation: obj.sh_type, //关系
            amount: obj.amount, //总额
            percent: obj.percent, //占比
            category: type === "c_trees" ? 1 : 2 //数据项所在类目的 index。
            // value: obj.name.length / 6,//数据项值。值越小边越长
          };
          initNodes.push(nodeObj);
          edgeObj = {
            source: name, //边的源节点名称的字符串，也支持使用数字表示源节点的索引。
            target: obj.name, //边的目标节点名称的字符串，也支持使用数字表示源节点的索引。
            value: obj.sh_type.length, //边的数值，可以在力引导布局中用于映射到边的长度。值越小边越长
            lineStyle: {}, //关系边的线条样式。
            label: {}, //边上标签样式
            relation: obj.sh_type, //关系
            amount: obj.amount, //总额
            percent: obj.percent //占比
          };
          initedges.push(edgeObj);
        } else {
          for (let i of obj) {
            nodeObj = {
              name: i.name,
              category: type === "c_trees" ? 1 : 2, //数据项所在类目的 index。
              // value: i.name.length / 6,//数据项值
              relation: i.sh_type, //关系
              amount: i.amount, //总额
              percent: i.percent //占比
            };
            initNodes.push(nodeObj);
            edgeObj = {
              source: name, //边的源节点名称的字符串，也支持使用数字表示源节点的索引。
              target: i.name, //边的目标节点名称的字符串，也支持使用数字表示源节点的索引。
              // value: i.sh_type.length,//边的数值，可以在力引导布局中用于映射到边的长度。
              lineStyle: {}, //关系边的线条样式。
              label: {}, //边上标签样式
              relation: i.sh_type, //关系
              amount: i.amount, //总额
              percent: i.percent //占比
            };
            initedges.push(edgeObj);
            if (i.items !== []) {
              deep(i.items, i.name, type);
            }
          }
        }
      }
      this.nodes = initNodes;
      this.edges = initedges;
    },
    /* 创建图 */
    createGraph() {
      this.myChart = this.echarts.init(document.getElementById("graph"));
      this.myChart.on("click", this.handleNodeClick);
      this.myChart.on("focusnodeadjacency", this.handleFocusnodeadjacency);
      this.myChart.on("unfocusnodeadjacency", this.handleUnfocusnodeadjacency);
      //分组
      // name: i,//类目名称，用于和 legend 对应以及格式化 tooltip 的内容。
      // // symbolSize: [100, 100],//该类目节点标记的大小
      // itemStyle: '',//该类目节点的样式。
      // label: '',//该类目节点标签的样式。
      // emphasis: '',//高亮样式
      var categories = [//分组，对应legend
        {
          name: "源头",
          label: {
            color: "blue", //颜色
            borderColor: "#FFF", //边框颜色
            borderWidth: 0, //柱条的描边宽度，默认不描边。
            borderType: "solid", //柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
            barBorderRadius: 0, //柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径。
            shadowBlur: 10, //图形阴影的模糊大小。
            shadowColor: "#000", //阴影颜色
            shadowOffsetX: 0, //阴影水平方向上的偏移距离。
            shadowOffsetY: 0, //阴影垂直方向上的偏移距离。
            opacity: 1 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
          }
        },
        {
          name: "对外投资",
          label: {
            color: "blue", //颜色
            borderColor: "#FFF", //边框颜色
            borderWidth: 0, //柱条的描边宽度，默认不描边。
            borderType: "solid", //柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
            barBorderRadius: 0, //柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径。
            shadowBlur: 10, //图形阴影的模糊大小。
            shadowColor: "#000", //阴影颜色
            shadowOffsetX: 0, //阴影水平方向上的偏移距离。
            shadowOffsetY: 0, //阴影垂直方向上的偏移距离。
            opacity: 1 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
          }
        },
        {
          name: "公司股东",
          label: {
            color: "#CCC", //颜色
            borderColor: "#FFF", //边框颜色
            borderWidth: 0, //柱条的描边宽度，默认不描边。
            borderType: "solid", //柱条的描边类型，默认为实线，支持 'dashed', 'dotted'。
            barBorderRadius: 0, //柱形边框圆角半径，单位px，支持传入数组分别指定柱形4个圆角半径。
            shadowBlur: 10, //图形阴影的模糊大小。
            shadowColor: "#000", //阴影颜色
            shadowOffsetX: 0, //阴影水平方向上的偏移距离。
            shadowOffsetY: 0, //阴影垂直方向上的偏移距离。
            opacity: 1 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
          }
        }
      ];
      let option = {
        id: 0,
        // 图的标题
        title: {
          text: "企业关系图"
        },
        // 提示框的配置
        tooltip: {
          //提示框组件
          trigger: "item", //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
          // triggerOn: "mousemove",                      //提示框触发的条件,'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发
          showContent: true,                           //是否显示提示框浮层
          // alwaysShowContent: true,                     //是否永远显示提示框内容
          // showDelay: 0,                                  //浮层显示的延迟，单位为 ms
          // hideDelay: 100,                                //浮层隐藏的延迟，单位为 ms
          // enterable: false,                             //鼠标是否可进入提示框浮层中
          // confine: false,                               //是否将 tooltip 框限制在图表的区域内
          // transitionDuration: 0.4,                      //提示框浮层的移动动画过渡时间，单位是 s,设置为 0 的时候会紧跟着鼠标移动
          // position: [0, 0],  //提示框浮层的位置，默认不设置时位置会跟随鼠标的位置,[10, 10],回掉函数，inside鼠标所在图形的内部中心位置，top、left、bottom、right鼠标所在图形上侧，左侧，下侧，右侧，
          formatter: params => {
            //提示框浮层内容格式器，支持字符串模板和回调函数两种形式,模板变量有 {a}, {b}，{c}，{d}，{e}，分别表示系列名，数据名，数据值等<br />{b1}: {c1}
            let marker1 = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#03856A;"></span>`;
            let marker2 = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#036ADE;"></span>`;
            let marker3 = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#DD4F42;"></span>`;
            return (
              '<div class="relationImg"></div>' +
              (params.data.relation
                ? marker1 + "关系：" + params.data.relation + "<br/> "
                : "") +
              (params.data.percent
                ? marker2 + "持股比例：" + params.data.percent + "<br />"
                : "") +
              (params.data.amount
                ? marker3 + "总额：" + params.data.amount
                : "")
            );
          },
          // backgroundColor: 'red',//背景色
          // borderColor: "#ccc",                        //边框颜色
          // borderWidth: 0,                              //边框线宽
          // padding: 5,                                  //图例内边距，单位px  5  [5, 10]  [5,10,5,10]
          textStyle: {
            //文本样式
            color: "#fff", //文字颜色
            fontStyle: "normal", //italic斜体  oblique倾斜
            fontWeight: "normal", //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
            fontFamily: "sans-serif", //字体系列
            fontSize: 18 //字体大小
          }
        },
        // 工具箱
        toolbox: {
          // 显示工具箱
          show: true,
          feature: {
            mark: {
              show: true
            },
            // 还原
            restore: {
              show: true
            },
            // 保存为图片
            saveAsImage: {
              show: true
            }
          }
        },
        legend: [//图例组件
          {
            left:0,
            top:20,
            orient:'vertical',//图例列表的布局朝向。
            // selectedMode: 'single',
            data: categories.map(function(a) {
              return a.name;
            })
          }
        ],
        series: [
          {
            type: "graph", // 类型:关系图
            layout: "force", //图的布局，类型为力导图
            symbolSize: 80, // 调整节点的大小
            force: {
              repulsion: 2000, //值越大则斥力越大
              gravity: 0.9, //值越大节点越往中心点靠拢
              edgeLength: [200, 200], //边的两个节点之间的距离,数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长
              layoutAnimation: true //布局动画
            },
            roam: true, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            nodeScaleRatio: 1, //鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
            draggable: false, //节点是否可拖拽，只在使用力引导布局的时候有用。
            focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            symbol: "circle", //节点标记的图形 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbolKeepAspect: true, //是否在缩放时保持该图形的长宽比。
            // symbolOffset: [0, 10],//关系图节点标记相对于原本位置的偏移
            // edgeSymbol: ['circle', 'arrow'],//边两端的标记类型
            cursor: "pointer", //鼠标悬浮时在边上时鼠标的样式
            itemStyle: {
              //图形样式。
            },
            lineStyle: {
              //关系边的公用线条样式
              color: "target",
              // shadowColor: "red",          //阴影颜色
              shadowOffsetX: 0, //阴影水平方向上的偏移距离。
              shadowOffsetY: 0, //阴影垂直方向上的偏移距离
              // shadowBlur: 10,              //图形阴影的模糊大小。
              type: "solid", //坐标轴线线的类型，solid，dashed，dotted
              width: 2, //坐标轴线线宽
              opacity: 1 //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形
            },
            edgeSymbolSize: [100, 100],
            edgeLabel: {
              //边上标签
              normal: {
                show: true,
                position: "middle", //标签位置，
                rich: {
                  relation: {
                    //关系
                    left: 10,
                    right: 10,
                    width: 0
                  },
                  percent: {
                    //百分比
                    left: 10,
                    right: 10,
                    width: 0
                  },
                  amount: {
                    //总额
                    left: 10,
                    right: 10,
                    width: 0
                  }
                },
                formatter: function(params) {
                  return (
                    "{relation|" +
                    params.data.relation +
                    "}" +
                    "\n" +
                    "{percent|" +
                    params.data.percent +
                    "}" +
                    "\n" +
                    "{amount|" +
                    params.data.amount +
                    "}"
                  );
                }, //格式化边上标签
                textStyle: {
                  color: "#333", //文字颜色
                  fontStyle: "normal", //italic斜体  oblique倾斜
                  fontWeight: "normal", //文字粗细bold   bolder   lighter  100 | 200 | 300 | 400...
                  fontFamily: "sans-serif", //字体系列
                  fontSize: 18 //字体大小
                }
              }
            },
            label: {
              //节点内内容
              normal: {
                show: true,
                position: ["50%", "50%"], //标签的位置// 绝对的像素值[10, 10],// 相对的百分比['50%', '50%'].'top','left','right','bottom','inside','insideLeft','insideRight','insideTop','insideBottom','insideTopLeft','insideBottomLeft','insideTopRight','insideBottomRight'
                distance: 100, //距离图形元素的距离
                // rotate: 90,//标签旋转。从 -90 度到 90 度。正值是逆时针。
                // offset: [30, 40],//文字在横向上偏移 30，纵向上偏移 40。
                // color: 'auto',//文字的颜色。
                fontStyl: "oblique", //文字字体的风GE
                fontFamily: "Arial", //文字的字体系列
                fontSize: 12, //文字的字体大小
                align: "center", //文字水平对齐方式，默认自动。
                verticalAlign: "middle", //文字垂直对齐方式
                // backgroundColor: 'rgba(0, 23, 11, 0.3)',//文字块背景色。
                //  borderColor:'',//文字块边框颜色。 borderWidth:'',//文字块边框宽度。  borderRadius:'',//文字块的圆角。 padding:''//文字块的内边距。 width:''//文字块的宽度不包含 padding。 height:''//文字块的高度
                // textBorderColor// 文字本身的描边颜色。  textBorderWidth//文字本身的描边宽度。
                textStyle: {},
                rich: {
                  title: {
                    color: "#FFF"
                  }
                },
                formatter: function(params) {
                  //格式器。
                  return `${
                    params.data.name.length > 6 && params.data.name.length > 19
                      ? "{title|" +
                        params.data.name.substring(0, 6) +
                        "\n" +
                        params.data.name.substring(6, 12) +
                        "\n" +
                        params.data.name.substring(11, 15) +
                        params.data.name.substring(16, 20) +
                        "..."
                      : "{title|" +
                        params.data.name.substring(0, 6) +
                        "\n" +
                        params.data.name.substring(6, 12) +
                        "\n" +
                        params.data.name.substring(11, 16) +
                        params.data.name.substring(16)
                  }}`;
                }
              }
            },
            emphasis: {
              //高亮的图形样式。
              //  itemStyle:'{ color , borderColor , borderWidth , borderType , shadowBlur , shadowColor , shadowOffsetX , shadowOffsetY , opacity'//节点图形样式
              // lineStyle:{ color , width , type , shadowBlur , shadowColor , shadowOffsetX , shadowOffsetY , opacity }//边线的样式
              // label:{}//节点内标签样式
              //  edgeLabel:{}//高亮样式
            },
            animationDurationUpdate: 1000, // 动画的时长。
            animationEasingUpdate: "quinticInOut", // 动画的加载效果
            // 数据
            data: this.nodes,
            links: this.edges,
            categories: categories
          }
        ]
      };
      this.myChart.setOption(option);
       /*  自适应 */
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
        this.myChart.resize();
    }
  },
  created() {
    this.$nextTick(function() {
      this.analysis(this.requestNode);
      this.createGraph();
    });
  }
};
</script>
<style lang="less" scoped>
.relationImg {
  width: 10px;
  height: 10px;
  background: url("../assets/images/relation.png") no-repeat;
  background-size: 10px;
}
</style>