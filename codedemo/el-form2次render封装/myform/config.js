export const configJson = [
  {
    type: "el-input", //element中表单项标签名
    valueKey: "input", //在form中绑定的属性key,校验规则name需要一致
    props: {
      //使用该组件属性配置项
      placeholder: "我是默认值",
      clearable: true,
    },
    "form-item": {
      //form-item属性配置项
      label: "输入框1",
      prop: "input", //校验规则的name和valuekey一致
      rules: [
        {
          //校验规则
          required: true,
          message: "必填",
          trigger: "blur",
        },
      ],
    },
    gutter: 20, //栅格布局每列的间隔，可不传默认20
    span: 6, //栅格布局每个元素占多一行多宽，可不传默认6
  },
  {
    type: "el-input",
    valueKey: "input2",
    props: {
      placeholder: "我是默认值",
      suffixIcon: "el-icon-delete",
    },
    //  //可通过 slot 来指定在 input 中前置或者后置内容。
    //   slot:[
    //     {
    //       slotName:"prepend",
    //       children:'Http://'
    //     },
    //     {
    //       slotName:"append",
    //       children:['el-button',{icon:"el-icon-search"}]
    //     }
    //   ],
    "form-item": {
      label: "输入框2",
      prop: "input2",
    },
  },

  {
    type: "el-select",
    valueKey: "select1",
    options: [
      {
        value: "1",
        label: "黄金糕",
      },
      {
        value: "2",
        label: "双皮奶",
      },
      {
        value: "3",
        label: "蚵仔煎",
      },
    ],
    "form-item": {
      label: "下拉框1",
      prop: "select1",
      rules: [
        {
          required: true,
          message: "请至少选择一个活动性质",
          trigger: "change",
        },
      ],
    },
  },
  {
    type: "el-radio",
    valueKey: "radio1",
    props: {},
    "form-item": {
      label: "单选框",
      prop: "radio1",
    },
    items: [
      {
        label: "ra1",
        name: "黄金糕",
      },
      {
        label: "ra2",
        name: "双皮奶",
      },
    ],
  },
  {
    type: "el-checkbox",
    valueKey: "checkbox1",
    props: {},
    "form-item": {
      label: "多选框",
      prop: "checkbox1",
    },
    items: [
      {
        label: "che1",
        name: "黄金糕",
      },
      {
        label: "che2",
        name: "双皮奶",
      },
    ],
  },
  {
    type: "el-input-number",
    valueKey: "inputnumber1",
    props: {
      min: 0,
      max: 10,
      step: 1,
    },
    "form-item": {
      label: "计数器",
    },
  },
  {
    type: "el-cascader",
    valueKey: "cascader1",
    props: {
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
          ],
        },
      ],
    },
    "form-item": {
      label: "级连选择器",
    },
  },
  {
    type: "el-time-select",
    valueKey: "timeselect",
    props: {
      "picker-options": {
        start: "08:30",
        step: "00:15",
        end: "18:30",
      },
    },
    "form-item": {
      label: "时间选择",
    },
  },
  {
   
    type: "el-date-picker",
    valueKey: "datepicker",
    props: {
      "value-format": "yyyy-MM-dd",
      type: "daterange",
      "range-separator": "至",
      "start-placeholder": "开始日期",
      "end-placeholder": "结束日期",
      "picker-options": {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    },
    "form-item": {
      label: "日期选择器",
    },
     span: 12, //栅
  },
];
